// import CreateCarousel from './CreateCarousel';

const TeamDrawerCarousel = () => {
  const teamActions = document.querySelectorAll('.team-action');
  teamActions.forEach((teamAction) => {
    teamAction.addEventListener('click', () => {
      const teamMember = teamAction.getAttribute('data-team-member');
      switch (teamMember) {
        case 'mark-mcnulty':
          const teamDrawerContainer = document.querySelector(
            '.team-drawer__container'
          );
          // Team Member + Designation
          const teamMemberDesignation = document.createElement('h2');
          teamMemberDesignation.className =
            'body-text--secondary heading--team-member team-drawer__heading';
          teamMemberDesignation.innerHTML =
            'Mark McNulty<span class="small-regular small-regular--designations-drawer team-drawer__designation">BA, CIM, CFP®</span>';
          teamDrawerContainer.appendChild(teamMemberDesignation);

          // Team Member Role
          const teamMemberRole = document.createElement('h3');
          teamMemberRole.className =
            'body-text--all-caps team-member-role--drawer team-drawer__role';
          teamMemberRole.innerHTML = 'Senior Wealth Manager';
          teamDrawerContainer.appendChild(teamMemberRole);

          // Image
          const teamMemberImage = document.createElement('img');
          teamMemberImage.src =
            'https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656aa914cb1171dcc0f7b5ca_team-members_drawer_mark-mcnulty_2x.png';
          teamMemberImage.loading = 'lazy';
          teamMemberImage.sizes =
            '(max-width: 479px) 88vw, (max-width: 767px) 91vw, (max-width: 1279px) 546px, 704.53125px';
          teamMemberImage.alt = '';
          teamMemberImage.width = '1410';
          teamMemberImage.srcset =
            'https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656aa914cb1171dcc0f7b5ca_team-members_drawer_mark-mcnulty_2x-p-500.png 500w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656aa914cb1171dcc0f7b5ca_team-members_drawer_mark-mcnulty_2x-p-800.png 800w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656aa914cb1171dcc0f7b5ca_team-members_drawer_mark-mcnulty_2x-p-1080.png 1080w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656aa914cb1171dcc0f7b5ca_team-members_drawer_mark-mcnulty_2x.png 1410w';
          teamMemberImage.className = 'team-drawer__img';
          teamDrawerContainer.appendChild(teamMemberImage);

          // Bio
          const teamMemberBio = document.createElement('div');
          teamMemberBio.className = 'team-drawer__bio';
          teamMemberBio.innerHTML =
            '<p class="body-text--primary team-drawer__bio-paragraph">Mark is a widely recognized expert in Canada on financial and retirement planning for dentists. For over twenty years Mark has been a speaker for the Ontario Dental Association and a regular contributor to Ontario Dentist, the journal of the Ontario Dental Association.</p><p class="body-text--primary team-drawer__bio-paragraph">Mark is also the co-founder of The Professional Advisory, a publication designed to provide non-clinical information to dentists, with close to 100 issues to date. In addition to multiple television and radio appearances, Mark has authored three books, the most recent is The $6 Million Dentist.</p><p class="body-text--primary team-drawer__bio-paragraph">His expertise and dedication to the dental profession have been recognized nationally, as evidenced by his accolade as one of Canada’s Top Wealth Advisors for 2021 by The Globe and Mail in conjunction with SHOOK Research.</p><p class="body-text--primary team-drawer__bio-paragraph">Mark has been with his wife, Krystyna for 24 years. They have three daughters ages 13, 11 and 9 and live in Unionville, Ontario. In his free time, Mark plays tennis, volleyball and touch football, which is why he is often injured</p>';
          teamDrawerContainer.appendChild(teamMemberBio);
          break;
        case 'michael-wilson':
          // code to execute
          break;
        case 'karen-barrow':
          // code to execute
          break;
        case 'robert-mark':
          // code to execute
          break;
        case 'graeme-moreau':
          // code to execute
          break;
        case 'lisa-clementi':
          // code to execute
          break;
        case 'kim-yates':
          // code to execute
          break;
        case 'tim-vlahopoulos':
          // code to execute
          break;
        default:
        // code to execute
      }
    });
  });
};

export default TeamDrawerCarousel;

// const selector = '#team-drawer-carousel .embla__viewport';
// const options = {
//   loop: false,
//   align: 'start',
// };
// let carousels = CreateCarousel(selector, options);
// let carousel = carousels[0];

// // Assuming the carousel has an ID of 'service-highlights-carousel'
// const carouselId = 'team-drawer-carousel';

// // Select the buttons using the carousel ID
// const prevButton = document.querySelector(`#${carouselId} #team-drawer-prev`);
// const nextButton = document.querySelector(`#${carouselId} #team-drawer-next`);

// // Function to update button styles
// const updateButtonStyles = () => {
//   if (prevButton && nextButton) {
//     prevButton.classList.toggle('is-disabled', !carousel.canScrollPrev());
//     nextButton.classList.toggle('is-disabled', !carousel.canScrollNext());
//   }
// };

// // Function to update carousel height and handle opacity transition
// const updateCarouselHeightAndOpacity = () => {
//   const activeSlideIndex = carousel.selectedScrollSnap();
//   const slides = document.querySelectorAll(`${selector} .team-drawer__slide`);
//   const activeSlideHeight = slides[activeSlideIndex].offsetHeight;
//   const carouselContainer = document.querySelector(selector);
//   carouselContainer.style.height = `${activeSlideHeight}px`;

//   // Handle opacity transition
//   slides.forEach((slide, index) => {
//     if (index === activeSlideIndex) {
//       slide.classList.add('is--active-slide');
//     } else {
//       slide.classList.remove('is--active-slide');
//     }
//   });
// };

// // Add event listeners to the buttons
// let prevButtonListener, nextButtonListener;
// if (prevButton && nextButton) {
//   prevButtonListener = () => {
//     carousel.scrollPrev();
//     updateButtonStyles();
//     updateCarouselHeightAndOpacity();
//   };
//   nextButtonListener = () => {
//     carousel.scrollNext();
//     updateButtonStyles();
//     updateCarouselHeightAndOpacity();
//   };
//   prevButton.addEventListener('click', prevButtonListener);
//   nextButton.addEventListener('click', nextButtonListener);
// }

// // Update carousel height when the carousel's scroll position changes
// carousel.on('scroll', () => {
//   const viewport = document.querySelector(
//     '#team-drawer-carousel .embla__viewport'
//   );
//   viewport.classList.add('embla--is-ready');
//   updateButtonStyles();
//   updateCarouselHeightAndOpacity(); // update height on scroll
// });

// // Update button styles and carousel height initially
// updateButtonStyles();
// updateCarouselHeightAndOpacity();

// // Add any additional behavior here

// // Disable the default sliding transition
// carousel.internalEngine().translate.toggleActive(false);

// // Add an init event listener to the carousel
// carousel.on('init', () => {
//   // Disable the default sliding transition
//   carousel.internalEngine().translate.toggleActive(false);

//   // Add the 'embla--is-ready' class to the viewport
//   const viewport = document.querySelector(
//     '#team-drawer-carousel .embla__viewport'
//   );
//   viewport.classList.add('embla--is-ready');
// });

// // Add a resize event listener to the window
// window.addEventListener('resize', () => {
//   // Remove the old event listeners
//   if (prevButton && nextButton) {
//     prevButton.removeEventListener('click', prevButtonListener);
//     nextButton.removeEventListener('click', nextButtonListener);
//   }

//   // Destroy the current carousel
//   carousel.destroy();

//   // Create a new carousel
//   carousels = CreateCarousel(selector, options);
//   carousel = carousels[0];

//   // Reapply your customizations
//   carousel.internalEngine().translate.toggleActive(false);
//   const viewport = document.querySelector(
//     '#team-drawer-carousel .embla__viewport'
//   );
//   viewport.classList.add('embla--is-ready');

//   // Add new event listeners to the buttons
//   if (prevButton && nextButton) {
//     prevButtonListener = () => {
//       carousel.scrollPrev();
//       updateButtonStyles();
//       updateCarouselHeightAndOpacity();
//     };
//     nextButtonListener = () => {
//       carousel.scrollNext();
//       updateButtonStyles();
//       updateCarouselHeightAndOpacity();
//     };
//     prevButton.addEventListener('click', prevButtonListener);
//     nextButton.addEventListener('click', nextButtonListener);
//   }
// });
