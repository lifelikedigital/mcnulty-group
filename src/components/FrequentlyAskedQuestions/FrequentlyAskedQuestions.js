// import { throttle as _throttle, debounce as _debounce } from 'lodash'; // bring these dependencies back in when I learn how to bind properly
import { gsap } from 'gsap';

// Selectors
const $faqQuestionsParent = $('.faq__questions'); // houses all of the toggle buttons
const $toggleButton = $('.faq__question-container'); // container with question and toggle icon - triggers the whole thing
const $toggleIcon = $('.faq__toggle-icon'); // toggle icon needs to rotate
const $questionAnswer = $('.faq__question-answer'); // question and answer parent

// Classes
const activeToggleButton = 'faq__question-container--active';
const activeAnswer = 'faq__answer-container--active';
const activeToggleIcon = 'faq__toggle-icon--active';

// Other
let tabFocus = 0;

const FrequentlyAskedQuestions = () => {
  // Click handling
  $toggleButton.on('click', function () {
    const $this = $(this);
    const $otherTabs = $this.parent().siblings($questionAnswer);
    $this.attr('aria-selected', 'true');
    $otherTabs.find($toggleButton).attr('aria-selected', 'false');
    $this.toggleClass(activeToggleButton);
    $this.next().toggleClass(activeAnswer);
    if (!$this.hasClass(activeToggleButton)) {
      $this.attr('aria-selected', 'false');
    }
    // aria handling
    if ($this.next().hasClass(activeAnswer)) {
      $this.next().removeAttr('hidden');
      $this.next().attr('aria-expanded', 'true');
    } else if (!$this.next().hasClass(activeAnswer)) {
      $this.next().prop('hidden', true);
      $this.next().attr('aria-expanded', 'false');
    }
    // prettier-ignore
    if ($this.find($toggleIcon).hasClass(activeToggleIcon)) {
      $this.find($toggleIcon).removeClass(activeToggleIcon);
      gsap.fromTo($this.find($toggleIcon), { duration: 0.25, rotation: 90 }, { duration: 0.25, rotation: 0 });
    } else {
      $this.find($toggleIcon).addClass(activeToggleIcon);
      gsap.fromTo($this.find($toggleIcon), { duration: 0.25, rotation: 0 }, { duration: 0.25, rotation: 90 });
    }
  });
  // Enter handling
  $toggleButton.on('keyup', function (e) {
    const enterKey = 13;
    if (e.keyCode === enterKey) {
      const $this = $(this);
      const $otherTabs = $this.parent().siblings($questionAnswer);
      // $this.attr('tabindex', '-1');
      $this.attr('aria-selected', 'true');
      // $otherTabs.find($toggleButton).attr('tabindex', '0');
      $otherTabs.find($toggleButton).attr('aria-selected', 'false');
      $this.toggleClass(activeToggleButton);
      // aria handling
      // if ($otherTabs.find($toggleButton).hasClass(activeToggleButton)) {
      //   $otherTabs.find($toggleButton).attr('aria-selected', 'false');
      // }
      $this.next().toggleClass(activeAnswer);
      // aria handling
      if ($this.next().hasClass(activeAnswer)) {
        $this.next().removeAttr('hidden');
        $this.next().attr('aria-expanded', 'true');
      } else if (!$this.next().hasClass(activeAnswer)) {
        $this.next().prop('hidden', true);
        $this.next().attr('aria-expanded', 'false');
      }
      // prettier-ignore
      if ($this.find($toggleIcon).hasClass(activeToggleIcon)) {
        $this.find($toggleIcon).removeClass(activeToggleIcon);
        gsap.fromTo($this.find($toggleIcon), { duration: 0.25, rotation: 90 }, { duration: 0.25, rotation: 0 });
      } else {
        $this.find($toggleIcon).addClass(activeToggleIcon);
        gsap.fromTo($this.find($toggleIcon), { duration: 0.25, rotation: 0 }, { duration: 0.25, rotation: 90 });
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
};

export default FrequentlyAskedQuestions;
