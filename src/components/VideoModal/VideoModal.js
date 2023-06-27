// Functions
const modalDependency = () => {
  // utility functions
  var Util = Util || {};

  Util.hasClass = function (el, className) {
    return el.classList.contains(className);
  };

  Util.addClass = function (el, className) {
    var classList = className.split(' ');
    el.classList.add(classList[0]);
    if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
  };

  Util.removeClass = function (el, className) {
    var classList = className.split(' ');
    el.classList.remove(classList[0]);
    if (classList.length > 1)
      Util.removeClass(el, classList.slice(1).join(' '));
  };

  // File#: _1_modal-window
  // Usage: codyhouse.co/license
  (function () {
    var Modal = function (element) {
      this.element = element;
      this.triggers = document.querySelectorAll(
        '[aria-controls="' + this.element.getAttribute('id') + '"]'
      );
      this.firstFocusable = null;
      this.lastFocusable = null;
      this.moveFocusEl = null; // focus will be moved to this element when modal is open
      this.modalFocus = this.element.getAttribute('data-modal-first-focus')
        ? this.element.querySelector(
            this.element.getAttribute('data-modal-first-focus')
          )
        : null;
      this.selectedTrigger = null;
      this.preventScrollEl = this.getPreventScrollEl();
      this.showClass = 'modal--is-visible';
      this.initModal();
    };

    Modal.prototype.getPreventScrollEl = function () {
      var scrollEl = false;
      var querySelector = this.element.getAttribute(
        'data-modal-prevent-scroll'
      );
      if (querySelector) scrollEl = document.querySelector(querySelector);
      return scrollEl;
    };

    Modal.prototype.initModal = function () {
      var self = this;
      //open modal when clicking on trigger buttons
      if (this.triggers) {
        for (var i = 0; i < this.triggers.length; i++) {
          this.triggers[i].addEventListener('click', function (event) {
            event.preventDefault();
            if (Util.hasClass(self.element, self.showClass)) {
              self.closeModal();
              return;
            }
            self.selectedTrigger = event.currentTarget;
            self.showModal();
            self.initModalEvents();
          });
        }
      }

      // listen to the openModal event -> open modal without a trigger button
      this.element.addEventListener('openModal', function (event) {
        if (event.detail) self.selectedTrigger = event.detail;
        self.showModal();
        self.initModalEvents();
      });

      // listen to the closeModal event -> close modal without a trigger button
      this.element.addEventListener('closeModal', function (event) {
        if (event.detail) self.selectedTrigger = event.detail;
        self.closeModal();
      });

      // if modal is open by default -> initialise modal events
      if (Util.hasClass(this.element, this.showClass)) this.initModalEvents();
    };

    Modal.prototype.showModal = function () {
      var self = this;
      Util.addClass(this.element, this.showClass);
      this.getFocusableElements();
      if (this.moveFocusEl) {
        this.moveFocusEl.focus();
        // wait for the end of transitions before moving focus
        this.element.addEventListener('transitionend', function cb(event) {
          self.moveFocusEl.focus();
          self.element.removeEventListener('transitionend', cb);
        });
      }
      this.emitModalEvents('modalIsOpen');
      // change the overflow of the preventScrollEl
      if (this.preventScrollEl) this.preventScrollEl.style.overflow = 'hidden';
    };

    Modal.prototype.closeModal = function () {
      if (!Util.hasClass(this.element, this.showClass)) return;
      Util.removeClass(this.element, this.showClass);
      this.firstFocusable = null;
      this.lastFocusable = null;
      this.moveFocusEl = null;
      if (this.selectedTrigger) this.selectedTrigger.focus();
      //remove listeners
      this.cancelModalEvents();
      this.emitModalEvents('modalIsClose');
      // change the overflow of the preventScrollEl
      if (this.preventScrollEl) this.preventScrollEl.style.overflow = '';
    };

    Modal.prototype.initModalEvents = function () {
      //add event listeners
      this.element.addEventListener('keydown', this);
      this.element.addEventListener('click', this);
    };

    Modal.prototype.cancelModalEvents = function () {
      //remove event listeners
      this.element.removeEventListener('keydown', this);
      this.element.removeEventListener('click', this);
    };

    Modal.prototype.handleEvent = function (event) {
      switch (event.type) {
        case 'click': {
          this.initClick(event);
        }
        case 'keydown': {
          this.initKeyDown(event);
        }
      }
    };

    Modal.prototype.initKeyDown = function (event) {
      if (
        (event.keyCode && event.keyCode == 9) ||
        (event.key && event.key == 'Tab')
      ) {
        //trap focus inside modal
        this.trapFocus(event);
      } else if (
        ((event.keyCode && event.keyCode == 13) ||
          (event.key && event.key == 'Enter')) &&
        event.target.closest('.js-modal__close')
      ) {
        event.preventDefault();
        this.closeModal(); // close modal when pressing Enter on close button
      }
    };

    Modal.prototype.initClick = function (event) {
      //close modal when clicking on close button or modal bg layer
      if (
        !event.target.closest('.js-modal__close') &&
        !Util.hasClass(event.target, 'js-modal')
      )
        return;
      event.preventDefault();
      this.closeModal();
    };

    Modal.prototype.trapFocus = function (event) {
      if (this.firstFocusable == document.activeElement && event.shiftKey) {
        //on Shift+Tab -> focus last focusable element when focus moves out of modal
        event.preventDefault();
        this.lastFocusable.focus();
      }
      if (this.lastFocusable == document.activeElement && !event.shiftKey) {
        //on Tab -> focus first focusable element when focus moves out of modal
        event.preventDefault();
        this.firstFocusable.focus();
      }
    };

    Modal.prototype.getFocusableElements = function () {
      //get all focusable elements inside the modal
      var allFocusable = this.element.querySelectorAll(focusableElString);
      this.getFirstVisible(allFocusable);
      this.getLastVisible(allFocusable);
      this.getFirstFocusable();
    };

    Modal.prototype.getFirstVisible = function (elements) {
      //get first visible focusable element inside the modal
      for (var i = 0; i < elements.length; i++) {
        if (isVisible(elements[i])) {
          this.firstFocusable = elements[i];
          break;
        }
      }
    };

    Modal.prototype.getLastVisible = function (elements) {
      //get last visible focusable element inside the modal
      for (var i = elements.length - 1; i >= 0; i--) {
        if (isVisible(elements[i])) {
          this.lastFocusable = elements[i];
          break;
        }
      }
    };

    Modal.prototype.getFirstFocusable = function () {
      if (!this.modalFocus || !Element.prototype.matches) {
        this.moveFocusEl = this.firstFocusable;
        return;
      }
      var containerIsFocusable = this.modalFocus.matches(focusableElString);
      if (containerIsFocusable) {
        this.moveFocusEl = this.modalFocus;
      } else {
        this.moveFocusEl = false;
        var elements = this.modalFocus.querySelectorAll(focusableElString);
        for (var i = 0; i < elements.length; i++) {
          if (isVisible(elements[i])) {
            this.moveFocusEl = elements[i];
            break;
          }
        }
        if (!this.moveFocusEl) this.moveFocusEl = this.firstFocusable;
      }
    };

    Modal.prototype.emitModalEvents = function (eventName) {
      var event = new CustomEvent(eventName, { detail: this.selectedTrigger });
      this.element.dispatchEvent(event);
    };

    function isVisible(element) {
      return (
        element.offsetWidth ||
        element.offsetHeight ||
        element.getClientRects().length
      );
    }

    window.Modal = Modal;

    //initialize the Modal objects
    var modals = document.getElementsByClassName('js-modal');
    // generic focusable elements string selector
    var focusableElString =
      '[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary';
    if (modals.length > 0) {
      var modalArrays = [];
      for (var i = 0; i < modals.length; i++) {
        (function (i) {
          modalArrays.push(new Modal(modals[i]));
        })(i);
      }

      window.addEventListener('keydown', function (event) {
        //close modal window on esc
        if (
          (event.keyCode && event.keyCode == 27) ||
          (event.key && event.key.toLowerCase() == 'escape')
        ) {
          for (var i = 0; i < modalArrays.length; i++) {
            (function (i) {
              modalArrays[i].closeModal();
            })(i);
          }
        }
      });
    }
  })();
};

const videoModal = () => {
  // utility functions
  var Util = Util || {};

  Util.addClass = function (el, className) {
    var classList = className.split(' ');
    el.classList.add(classList[0]);
    if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
  };

  Util.removeClass = function (el, className) {
    var classList = className.split(' ');
    el.classList.remove(classList[0]);
    if (classList.length > 1)
      Util.removeClass(el, classList.slice(1).join(' '));
  };

  // File#: _2_modal-video
  // Usage: codyhouse.co/license
  (function () {
    var ModalVideo = function (element) {
      this.element = element;
      this.modalContent = this.element.getElementsByClassName(
        'js-modal-video__content'
      )[0];
      this.media = this.element.getElementsByClassName(
        'js-modal-video__media'
      )[0];
      this.contentIsIframe = this.media.tagName.toLowerCase() == 'iframe';
      this.modalIsOpen = false;
      this.initModalVideo();
    };

    ModalVideo.prototype.initModalVideo = function () {
      var self = this;
      // reveal modal content when iframe is ready
      this.addLoadListener();
      // listen for the modal element to be open -> set new iframe src attribute
      this.element.addEventListener('modalIsOpen', function (event) {
        self.modalIsOpen = true;
        self.media.setAttribute(
          'src',
          event.detail.closest('[aria-controls]').getAttribute('data-url')
        );
      });
      // listen for the modal element to be close -> reset iframe and hide modal content
      this.element.addEventListener('modalIsClose', function (event) {
        self.modalIsOpen = false;
        Util.addClass(self.element, 'modal--is-loading');
        self.media.setAttribute('src', '');
      });
    };

    ModalVideo.prototype.addLoadListener = function () {
      var self = this;
      if (this.contentIsIframe) {
        this.media.onload = function () {
          self.revealContent();
        };
      } else {
        this.media.addEventListener('loadedmetadata', function () {
          self.revealContent();
        });
      }
    };

    ModalVideo.prototype.revealContent = function () {
      if (!this.modalIsOpen) return;
      Util.removeClass(this.element, 'modal--is-loading');
      if (this.element.getAttribute('data-modal-first-focus')) return; // user selected a specific element to focus
      this.contentIsIframe
        ? this.media.contentWindow.focus()
        : this.media.focus();
    };

    //initialize the ModalVideo objects
    var modalVideos = document.getElementsByClassName('js-modal-video__media');
    if (modalVideos.length > 0) {
      for (var i = 0; i < modalVideos.length; i++) {
        (function (i) {
          new ModalVideo(modalVideos[i].closest('.js-modal'));
        })(i);
      }
    }
  })();
};

const VideoModal = () => {
  modalDependency();
  videoModal();
};

export default VideoModal;
