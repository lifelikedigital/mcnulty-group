import { gsap } from 'gsap';
import CustomEase from 'gsap/CustomEase';

// Register the CustomEase plugin
gsap.registerPlugin(CustomEase);

// Selectors
const $faqQuestionsParent = $('.faq__questions'); // houses all of the toggle buttons
const $toggleButton = $('.faq__question-container'); // container with question and toggle icon - triggers the whole thing
const $toggleIcon = $('.faq__open-icon'); // toggle icon needs to rotate
const $questionAnswer = $('.faq__question-answer'); // question and answer parent

// Classes
const activeToggleButton = 'faq__question-container--active';
const activeAnswer = 'faq__answer-container--active';
const activeToggleIcon = '.faq__open-icon--active';

// Other
let tabFocus = 0;
CustomEase.create('basicEase', 'M0,0 C0.17,0.67 0.83,0.67 1,1 ');

// Functions
const Questions = () => {
  // Click handling
  $toggleButton.on('click', function () {
    const $this = $(this);
    const $otherTabs = $this.parent().siblings().find($toggleButton);
    $otherTabs.removeClass(activeToggleButton).attr('aria-selected', 'false');
    $otherTabs
      .next()
      .removeClass(activeAnswer)
      .css('max-height', '0')
      .attr('aria-expanded', 'false');
    const $otherActiveToggleIcon = $otherTabs.find(
      '.faq__open-icon' + activeToggleIcon
    );
    $otherActiveToggleIcon.removeClass(activeToggleIcon);
    gsap.fromTo(
      $otherActiveToggleIcon,
      { duration: 0.3, rotation: 180 },
      { duration: 0.3, rotation: 90, ease: 'basicEase' }
    );
    const $thisToggleIcon = $this.find($toggleIcon);
    if ($this.hasClass(activeToggleButton)) {
      $thisToggleIcon.removeClass(activeToggleIcon);
      gsap.fromTo(
        $thisToggleIcon,
        { duration: 0.3, rotation: 180 },
        { duration: 0.3, rotation: 90, ease: 'basicEase' }
      );
    } else {
      $thisToggleIcon.addClass(activeToggleIcon);
      gsap.fromTo(
        $thisToggleIcon,
        { duration: 0.3, rotation: 90 },
        { duration: 0.3, rotation: 180, ease: 'basicEase' }
      );
    }
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
  });
  // Enter handling
  $toggleButton.on('keyup', function (e) {
    const enterKey = 13;
    if (e.keyCode === enterKey) {
      const $this = $(this);
      const $otherTabs = $this.parent().siblings().find($toggleButton);
      $otherTabs.removeClass(activeToggleButton).attr('aria-selected', 'false');
      $otherTabs
        .next()
        .removeClass(activeAnswer)
        .css('max-height', '0')
        .attr('aria-expanded', 'false');
      const $otherActiveToggleIcon = $otherTabs.find(
        '.faq__open-icon' + activeToggleIcon
      );
      $otherActiveToggleIcon.removeClass(activeToggleIcon);
      gsap.to(
        $otherActiveToggleIcon,
        { duration: 0.3, rotation: 180 },
        { duration: 0.3, rotation: 90, ease: 'basicEase' }
      );
      const $thisToggleIcon = $this.find($toggleIcon);
      if ($this.hasClass(activeToggleButton)) {
        $thisToggleIcon.removeClass(activeToggleIcon);
        gsap.fromTo(
          $thisToggleIcon,
          { duration: 0.3, rotation: 180 },
          { duration: 0.3, rotation: 90, ease: 'basicEase' }
        );
      } else {
        $thisToggleIcon.addClass(activeToggleIcon);
        gsap.fromTo(
          $thisToggleIcon,
          { duration: 0.3, rotation: 90 },
          { duration: 0.3, rotation: 180, ease: 'basicEase' }
        );
      }
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

export default Questions;
