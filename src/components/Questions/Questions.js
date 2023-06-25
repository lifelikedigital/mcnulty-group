import { gsap } from 'gsap';
import CustomEase from 'gsap/CustomEase';

// Register the CustomEase plugin
gsap.registerPlugin(CustomEase);

// Selectors
const $faqQuestionsParent = $('.faq__questions'); // houses all of the toggle buttons
const $toggleButton = $('.faq__question-container'); // container with question and toggle icon - triggers the whole thing
const $toggleIcon = $('.faq__open-icon'); // toggle icon needs to rotate
const $questionAnswer = $('.faq__question-answer'); // question and answer parent

// Get references to the text and sticky elements.
const textElement = document.querySelector('#question4');
const stickyParent = document.querySelector('#sticky-faq').parentNode;

// Classes
const activeToggleButton = 'faq__question-container--active';
const activeAnswer = 'faq__answer-container--active';
const activeToggleIcon = '.faq__open-icon--active';

// Other
let tabFocus = 0;
CustomEase.create('basicEase', 'M0,0 C0.17,0.67 0.83,0.67 1,1 ');

// Functions
// Define a function to update the sticky parent height.
const updateStickyParentHeight = () => {
  // Get the position of the text baseline and sticky parent top.
  const textBaseline = textElement.getBoundingClientRect().bottom;
  const stickyParentTop = stickyParent.getBoundingClientRect().top;

  // Calculate the difference between the text baseline and sticky parent top.
  const height = textBaseline - stickyParentTop + 15;

  // Adjust the height of the sticky element's parent.
  stickyParent.style.height = `${height}px`;
};

// Intersection Observer Implementation
const initializeStickyElementBehavior = () => {
  // Define a function to update the sticky parent height.
  function setupObserver() {
    if (window.innerWidth >= 768) {
      const observerCallback = (entries, observer) => {
        for (let entry of entries) {
          // If the text element's position has changed...
          if (entry.isIntersecting) {
            // Update the sticky parent height.
            updateStickyParentHeight();
          }
        }
      };

      const observerOptions = {
        threshold: [0, 1],
        rootMargin: '50px',
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );

      observer.observe(textElement);
      return observer;
    } else {
      // If the viewport is 767px or less, set the sticky parent's height to "auto"
      stickyParent.style.height = 'auto';
      return null;
    }
  }

  let observer = setupObserver();

  window.addEventListener('resize', () => {
    if (observer) {
      observer.disconnect(); // Stop observing with the old observer.
    }
    observer = setupObserver(); // Set up a new observer if the window is now wide enough.
  });
};

const Questions = () => {
  // Click handling
  $toggleButton.on('click', function () {
    const $this = $(this);
    const $otherTabs = $this.parent().siblings($questionAnswer);
    $this.attr('aria-selected', 'true');
    $otherTabs.find($toggleButton).attr('aria-selected', 'false');
    $this.toggleClass(activeToggleButton);
    const $answerContainer = $this.next();
    $answerContainer.toggleClass(activeAnswer);

    const targetMaxHeight = $answerContainer.hasClass(activeAnswer)
      ? $answerContainer[0].scrollHeight + 'px'
      : '0';
    // Apply the target max-height with a smooth transition
    $answerContainer.css('max-height', targetMaxHeight);
    // Calculate the target max-height based on the content's scrollHeight

    // aria handling
    if (!$this.hasClass(activeToggleButton)) {
      $this.attr('aria-selected', 'false');
    }
    if ($answerContainer.hasClass(activeAnswer)) {
      // $this.next().removeAttr('hidden');
      $answerContainer.attr('aria-expanded', 'true');
    } else if (!$answerContainer.hasClass(activeAnswer)) {
      // $this.next().prop('hidden', true);
      $answerContainer.attr('aria-expanded', 'false');
    }
    // prettier-ignore
    if ($this.find($toggleIcon).hasClass(activeToggleIcon)) {
      $this.find($toggleIcon).removeClass(activeToggleIcon);
      gsap.fromTo($this.find($toggleIcon), { duration: 0.3, rotation: 180 }, { duration: 0.3, rotation: 90, ease: 'basicEase' });
    } else {
      $this.find($toggleIcon).addClass(activeToggleIcon);
      gsap.fromTo($this.find($toggleIcon), { duration: 0.3, rotation: 90 }, { duration: 0.3, rotation: 180, ease: 'basicEase' });
    }
    if (window.innerWidth >= 768) {
      updateStickyParentHeight();
    }
  });
  // Enter handling
  $toggleButton.on('keyup', function (e) {
    const enterKey = 13;
    if (e.keyCode === enterKey) {
      const $this = $(this);
      const $otherTabs = $this.parent().siblings($questionAnswer);
      $this.attr('aria-selected', 'true');
      $otherTabs.find($toggleButton).attr('aria-selected', 'false');
      $this.toggleClass(activeToggleButton);
      const $answerContainer = $this.next();
      $answerContainer.toggleClass(activeAnswer);

      const targetMaxHeight = $answerContainer.hasClass(activeAnswer)
        ? $answerContainer[0].scrollHeight + 'px'
        : '0';
      // Apply the target max-height with a smooth transition
      $answerContainer.css('max-height', targetMaxHeight);
      // Calculate the target max-height based on the content's scrollHeight

      // aria handling
      if (!$this.hasClass(activeToggleButton)) {
        $this.attr('aria-selected', 'false');
      }
      if ($answerContainer.hasClass(activeAnswer)) {
        // $this.next().removeAttr('hidden');
        $answerContainer.attr('aria-expanded', 'true');
      } else if (!$answerContainer.hasClass(activeAnswer)) {
        // $this.next().prop('hidden', true);
        $answerContainer.attr('aria-expanded', 'false');
      }
      // prettier-ignore
      if ($this.find($toggleIcon).hasClass(activeToggleIcon)) {
        $this.find($toggleIcon).removeClass(activeToggleIcon);
        gsap.fromTo($this.find($toggleIcon), { duration: 0.3, rotation: 180 }, { duration: 0.3, rotation: 90, ease: 'basicEase' });
      } else {
        $this.find($toggleIcon).addClass(activeToggleIcon);
        gsap.fromTo($this.find($toggleIcon), { duration: 0.3, rotation: 90 }, { duration: 0.3, rotation: 180, ease: 'basicEase' });
      }
      if (window.innerWidth >= 768) {
        updateStickyParentHeight();
      }
    }
  });
  // Arrow handling
  $faqQuestionsParent.on('keydown', function (e) {
    const moveRight = 39;
    const moveLeft = 37;
    // Enter only if left or right keys
    if (e.keyCode === moveRight || e.keyCode === moveLeft) {
      $questionAnswer[tabFocus].firstChild.setAttribute('tabindex', -1);
      $questionAnswer[tabFocus].firstChild.setAttribute(
        'aria-selected',
        'false'
      );
      // move right
      if (e.keyCode === moveRight) {
        tabFocus++;
        // If we're at the end, go to the start
        if (tabFocus >= $questionAnswer.length) {
          tabFocus = 0;
        }
        // Move left
      } else if (e.keyCode === moveLeft) {
        tabFocus--;
        // If we're at the start, move to the end
        if (tabFocus < 0) {
          tabFocus = $questionAnswer.length - 1;
        }
      }
      $questionAnswer[tabFocus].firstChild.setAttribute('tabindex', 0);
      $questionAnswer[tabFocus].firstChild.setAttribute(
        'aria-selected',
        'true'
      );
      $questionAnswer[tabFocus].firstChild.focus();
    }
  });

  // Dynamic Sticky Header
  initializeStickyElementBehavior();
};

export default Questions;
