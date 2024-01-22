// import CreateCarousel from './CreateCarousel';

const TeamDrawerCarousel = () => {
  const teamActions = document.querySelectorAll('.team-action');
  teamActions.forEach((teamAction) => {
    teamAction.addEventListener('click', () => {
      const teamDrawerContainer = document.querySelector(
        '.team-drawer__container'
      );
      teamDrawerContainer.innerHTML = ''; // Clear all child elements
      const teamMember = teamAction.getAttribute('data-team-member');
      switch (teamMember) {
        case 'mark-mcnulty':
          // Team Member + Designation
          const markMcNultyDesignation = document.createElement('h2');
          markMcNultyDesignation.className =
            'body-text--secondary heading--team-member team-drawer__heading';
          markMcNultyDesignation.innerHTML =
            'Mark McNulty<span class="small-regular small-regular--designations-drawer team-drawer__designation">BA, CIM, CFP®</span>';
          teamDrawerContainer.appendChild(markMcNultyDesignation);

          // Team Member Role
          const markMcNultyRole = document.createElement('h3');
          markMcNultyRole.className =
            'all-caps team-member-role--drawer team-drawer__role';
          // update body-text--all-caps to all-caps
          markMcNultyRole.innerHTML = 'Senior Wealth Manager';
          teamDrawerContainer.appendChild(markMcNultyRole);

          // Image
          const markMcNultyImage = document.createElement('img');
          markMcNultyImage.src =
            'https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/65aebc569adb1ad6a6fbda9d_team-members_drawer_mark-mcnulty_1404w_v3_optimized.jpg';
          markMcNultyImage.loading = 'lazy';
          markMcNultyImage.sizes =
            '(max-width: 479px) 88vw, (max-width: 767px) 91vw, (max-width: 1279px) 546px, 704.53125px';
          markMcNultyImage.alt = '';
          markMcNultyImage.width = '1410';
          markMcNultyImage.srcset =
            'https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/65aebc569adb1ad6a6fbda9d_team-members_drawer_mark-mcnulty_1404w_v3_optimized-p-500.jpg 500w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/65aebc569adb1ad6a6fbda9d_team-members_drawer_mark-mcnulty_1404w_v3_optimized-p-800.jpg 800w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/65aebc569adb1ad6a6fbda9d_team-members_drawer_mark-mcnulty_1404w_v3_optimized-p-1080.jpg 1080w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/65aebc569adb1ad6a6fbda9d_team-members_drawer_mark-mcnulty_1404w_v3_optimized.jpg 1410w';
          markMcNultyImage.className = 'team-drawer__img';
          teamDrawerContainer.appendChild(markMcNultyImage);

          // Bio
          const markMcNultyBio = document.createElement('div');
          markMcNultyBio.className = 'team-drawer__bio';
          markMcNultyBio.innerHTML =
            '<p class="body-text--primary team-drawer__bio-paragraph">Mark is a widely recognized expert in Canada on financial and retirement planning for dentists. For over twenty years Mark has been a speaker for the Ontario Dental Association and a regular contributor to Ontario Dentist, the journal of the Ontario Dental Association.</p><p class="body-text--primary team-drawer__bio-paragraph">Mark is also the co-founder of The Professional Advisory, a publication designed to provide non-clinical information to dentists, with close to 100 issues to date. In addition to multiple television and radio appearances, Mark has authored three books, the most recent is The $6 Million Dentist.</p><p class="body-text--primary team-drawer__bio-paragraph">Mark has been with his wife, Krystyna for 24 years. They have three daughters ages 13, 11 and 9 and live in Unionville, Ontario. In his free time, Mark plays tennis, volleyball and touch football, which is why he is often injured</p>';
          teamDrawerContainer.appendChild(markMcNultyBio);
          break;
        case 'michael-wilson':
          // Team Member + Designation
          const michaelWilsonDesignation = document.createElement('h2');
          michaelWilsonDesignation.className =
            'body-text--secondary heading--team-member team-drawer__heading';
          michaelWilsonDesignation.innerHTML =
            'Michael Wilson<span class="small-regular small-regular--designations-drawer team-drawer__designation">CPA, CA, CIM, CFP®</span>';
          teamDrawerContainer.appendChild(michaelWilsonDesignation);

          // Team Member Role
          const michaelWilsonRole = document.createElement('h3');
          michaelWilsonRole.className =
            'all-caps team-member-role--drawer team-drawer__role';
          michaelWilsonRole.innerHTML = 'Senior Financial Planner';
          teamDrawerContainer.appendChild(michaelWilsonRole);

          // Image
          const michaelWilsonImage = document.createElement('img');
          michaelWilsonImage.src =
            'https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce64cb788152b191a88b_team-members_drawer_michael-wilson_2x.png';
          michaelWilsonImage.loading = 'lazy';
          michaelWilsonImage.sizes =
            '(max-width: 479px) 88vw, (max-width: 767px) 91vw, (max-width: 1279px) 546px, 704.53125px';
          michaelWilsonImage.alt = '';
          michaelWilsonImage.width = '1410';
          michaelWilsonImage.srcset =
            'https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce64cb788152b191a88b_team-members_drawer_michael-wilson_2x-p-500.png 500w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce64cb788152b191a88b_team-members_drawer_michael-wilson_2x-p-800.png 800w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce64cb788152b191a88b_team-members_drawer_michael-wilson_2x-p-1080.png 1080w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce64cb788152b191a88b_team-members_drawer_michael-wilson_2x.png 1410w';
          michaelWilsonImage.className = 'team-drawer__img';
          teamDrawerContainer.appendChild(michaelWilsonImage);

          // Bio
          const michaelWilsonBio = document.createElement('div');
          michaelWilsonBio.className = 'team-drawer__bio';
          michaelWilsonBio.innerHTML =
            "<p class='body-text--primary team-drawer__bio-paragraph'>Michael's approach to financial advice is rooted in a deep understanding that it's about more than just having a plan—it's about having the right plan tailored to your entire life, not just your finances. This philosophy is built on a foundation of trusted relationships and a true grasp of each client's unique life situation.</p><p class='body-text--primary team-drawer__bio-paragraph'>A proud alumnus of the Queen’s School of Business, Michael’s academic journey led him to acquire a diverse array of professional designations including Chartered Accountant (CPA, CA), Chartered Investment Management (CIM®), and Certified Financial Planner® (CFP®).</p><p class='body-text--primary team-drawer__bio-paragraph'>Since 2012, Michael has dedicated himself to working closely with Mark and serving the specific needs of Dentists. His commitment and expertise have earned him the position of equity partner at McNulty Group.</p><p class='body-text--primary team-drawer__bio-paragraph'>Outside of his professional realm, Michael's life is deeply rooted in Vancouver, where he resides with his wife Meagan and their daughter Elsie. A man of varied interests, he is an avid cook and cyclist, with a passion for the great outdoors. His love for skiing is a lifelong affair, having grown up as a member of the Devils Glen Country Club.</p><p class='body-text--primary team-drawer__bio-paragraph'>Michael has worked very closely with Mark and Dentists since 2012. Today he is an equity partner at McNulty Group.</p><p class='body-text--primary team-drawer__bio-paragraph'>Michael lives in Vancouver with his wife Meagan and their daughter Elsie. He enjoys cooking, and cycling and is passionate about the outdoors. He also loves to ski, having grown up as a member of the Devils Glen Country Club.</p>";
          teamDrawerContainer.appendChild(michaelWilsonBio);
          break;
        case 'karen-barrow':
          // Team Member + Designation
          const karenBarrowDesignation = document.createElement('h2');
          karenBarrowDesignation.className =
            'body-text--secondary heading--team-member team-drawer__heading';
          karenBarrowDesignation.innerHTML =
            'Karen Barrow<span class="small-regular small-regular--designations-drawer team-drawer__designation">BSc</span>';
          teamDrawerContainer.appendChild(karenBarrowDesignation);

          // Team Member Role
          const karenBarrowRole = document.createElement('h3');
          karenBarrowRole.className =
            'all-caps team-member-role--drawer team-drawer__role';
          karenBarrowRole.innerHTML = 'Senior Client Services Manager';
          teamDrawerContainer.appendChild(karenBarrowRole);

          // Image
          const karenBarrowImage = document.createElement('img');
          karenBarrowImage.src =
            'https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce66d51f80e5cc87cb75_team-members_drawer_karen-barrow_2x.png';
          karenBarrowImage.loading = 'lazy';
          karenBarrowImage.sizes =
            '(max-width: 479px) 88vw, (max-width: 767px) 91vw, (max-width: 1279px) 546px, 704.53125px';
          karenBarrowImage.alt = '';
          karenBarrowImage.width = '1410';
          karenBarrowImage.srcset =
            'https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce66d51f80e5cc87cb75_team-members_drawer_karen-barrow_2x-p-500.png 500w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce66d51f80e5cc87cb75_team-members_drawer_karen-barrow_2x-p-800.png 800w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce66d51f80e5cc87cb75_team-members_drawer_karen-barrow_2x-p-1080.png 1080w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce66d51f80e5cc87cb75_team-members_drawer_karen-barrow_2x.png 1410w';
          karenBarrowImage.className = 'team-drawer__img';
          teamDrawerContainer.appendChild(karenBarrowImage);

          // Bio
          const karenBarrowBio = document.createElement('div');
          karenBarrowBio.className = 'team-drawer__bio';
          karenBarrowBio.innerHTML =
            '<p class="body-text--primary team-drawer__bio-paragraph">Karen has been a member of the McNulty Group for over fifteen years. She brought with her national and international financial industry experience, having worked in Toronto for a fund company and in London, England for J.P. Morgan. Since she arrived at McNulty Group, she has worked in all areas of the business as an assistant financial planner, portfolio administrator, branch administrator, account executive, and most recently as Manager of Client Services.</p><p class="body-text--primary team-drawer__bio-paragraph">She strives to provide a high level of client service through her day-to-day operations and communication with McNulty Group families and offers a personal, friendly touch with her easygoing and energetic nature.</p><p class="body-text--primary team-drawer__bio-paragraph">In her free time, Karen enjoys running, skiing, spin class, music, and spending time with her son Jack and daughter Lauren.</p>';
          teamDrawerContainer.appendChild(karenBarrowBio);
          break;
        case 'robert-mark':
          // Team Member + Designation
          const robertMarkDesignation = document.createElement('h2');
          robertMarkDesignation.className =
            'body-text--secondary heading--team-member team-drawer__heading';
          robertMarkDesignation.innerHTML =
            'Robert Mark<span class="small-regular small-regular--designations-drawer team-drawer__designation">CFA</span>';
          teamDrawerContainer.appendChild(robertMarkDesignation);

          // Team Member Role
          const robertMarkRole = document.createElement('h3');
          robertMarkRole.className =
            'all-caps team-member-role--drawer team-drawer__role';
          robertMarkRole.innerHTML = 'Senior Portfolio Manager';
          teamDrawerContainer.appendChild(robertMarkRole);

          // Image
          const robertMarkImage = document.createElement('img');
          robertMarkImage.src =
            'https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce63cb788152b191a556_team-members_drawer_robert-mark_2x.png';
          robertMarkImage.loading = 'lazy';
          robertMarkImage.sizes =
            '(max-width: 479px) 88vw, (max-width: 767px) 91vw, (max-width: 1279px) 546px, 704.53125px';
          robertMarkImage.alt = '';
          robertMarkImage.width = '1410';
          robertMarkImage.srcset =
            'https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce63cb788152b191a556_team-members_drawer_robert-mark_2x-p-500.png 500w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce63cb788152b191a556_team-members_drawer_robert-mark_2x-p-800.png 800w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce63cb788152b191a556_team-members_drawer_robert-mark_2x-p-1080.png 1080w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce63cb788152b191a556_team-members_drawer_robert-mark_2x.png 1410w';
          robertMarkImage.className = 'team-drawer__img';
          teamDrawerContainer.appendChild(robertMarkImage);

          // Bio
          const robertMarkBio = document.createElement('div');
          robertMarkBio.className = 'team-drawer__bio';
          robertMarkBio.innerHTML =
            "<p class='body-text--primary team-drawer__bio-paragraph'>Rob joined the McNulty Group after a twenty-plus-year career on Bay Street. Prior to joining the firm, Rob was a portfolio manager and investment strategist at two of Canada’s most respected investment firms, MacDougall, MacDougall &amp; MacTier (3Macs) and Raymond James Canada.</p><p class='body-text--primary team-drawer__bio-paragraph'>Rob graduated from Queen’s University in 1996 and was awarded his CFA Charter (Chartered Financial Analyst) in 2003.</p><p class='body-text--primary team-drawer__bio-paragraph'>Rob lives in Toronto with his wife Jane and their two boys, James and Graham. In his free time, Rob is a passionate guitarist, avid skier, terrible golfer and aspiring mechanic/carpenter/arborist at the family cottage in Muskoka.</p>";
          teamDrawerContainer.appendChild(robertMarkBio);

          break;
        case 'graeme-moreau':
          // Team Member + Designation
          const graemeMoreauDesignation = document.createElement('h2');
          graemeMoreauDesignation.className =
            'body-text--secondary heading--team-member team-drawer__heading';
          graemeMoreauDesignation.innerHTML =
            'Graeme Moreau<span class="small-regular small-regular--designations-drawer team-drawer__designation">CPA</span>';
          teamDrawerContainer.appendChild(graemeMoreauDesignation);

          // Team Member Role
          const graemeMoreauRole = document.createElement('h3');
          graemeMoreauRole.className =
            'all-caps team-member-role--drawer team-drawer__role';
          graemeMoreauRole.innerHTML = 'Associate Financial Planner';
          teamDrawerContainer.appendChild(graemeMoreauRole);

          // Image
          const graemeMoreauImage = document.createElement('img');
          graemeMoreauImage.src =
            'https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce668a358ad2b667f94a_team-members_drawer_graeme-moreau_2x.png';
          graemeMoreauImage.loading = 'lazy';
          graemeMoreauImage.sizes =
            '(max-width: 479px) 88vw, (max-width: 767px) 91vw, (max-width: 1279px) 546px, 704.53125px';
          graemeMoreauImage.alt = '';
          graemeMoreauImage.width = '1410';
          graemeMoreauImage.srcset =
            'https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce668a358ad2b667f94a_team-members_drawer_graeme-moreau_2x-p-500.png 500w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce668a358ad2b667f94a_team-members_drawer_graeme-moreau_2x-p-800.png 800w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce668a358ad2b667f94a_team-members_drawer_graeme-moreau_2x-p-1080.png 1080w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce668a358ad2b667f94a_team-members_drawer_graeme-moreau_2x.png 1410w';
          graemeMoreauImage.className = 'team-drawer__img';
          teamDrawerContainer.appendChild(graemeMoreauImage);

          // Bio
          const graemeMoreauBio = document.createElement('div');
          graemeMoreauBio.className = 'team-drawer__bio';
          graemeMoreauBio.innerHTML =
            "<p class='body-text--primary team-drawer__bio-paragraph'>Graeme is a Chartered Professional Accountant (CPA) and has held various corporate reporting and financial analyst positions in the Railroad, Oil &amp; Gas, and Radio Broadcasting industries.</p><p class='body-text--primary team-drawer__bio-paragraph'>Graeme has extensive experience in financial reporting, analysis, and budgeting for publicly traded companies.</p>";
          teamDrawerContainer.appendChild(graemeMoreauBio);

          break;
        case 'lisa-clementi':
          // Team Member + Designation
          const lisaClementiDesignation = document.createElement('h2');
          lisaClementiDesignation.className =
            'body-text--secondary heading--team-member team-drawer__heading';
          lisaClementiDesignation.innerHTML = 'Lisa Clementi';
          teamDrawerContainer.appendChild(lisaClementiDesignation);

          // Team Member Role
          const lisaClementiRole = document.createElement('h3');
          lisaClementiRole.className =
            'all-caps team-member-role--drawer team-drawer__role';
          lisaClementiRole.innerHTML = 'Associate Client Services';
          teamDrawerContainer.appendChild(lisaClementiRole);

          // Image
          const lisaClementiImage = document.createElement('img');
          lisaClementiImage.src =
            'https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce651c98c505af65ae71_team-members_drawer_lisa-clementi_2x.png';
          lisaClementiImage.loading = 'lazy';
          lisaClementiImage.sizes =
            '(max-width: 479px) 88vw, (max-width: 767px) 91vw, (max-width: 1279px) 546px, 704.53125px';
          lisaClementiImage.alt = '';
          lisaClementiImage.width = '1410';
          lisaClementiImage.srcset =
            'https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce651c98c505af65ae71_team-members_drawer_lisa-clementi_2x-p-500.png 500w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce651c98c505af65ae71_team-members_drawer_lisa-clementi_2x-p-800.png 800w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce651c98c505af65ae71_team-members_drawer_lisa-clementi_2x-p-1080.png 1080w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce651c98c505af65ae71_team-members_drawer_lisa-clementi_2x.png 1410w';
          lisaClementiImage.className = 'team-drawer__img';
          teamDrawerContainer.appendChild(lisaClementiImage);

          // Bio
          const lisaClementiBio = document.createElement('div');
          lisaClementiBio.className = 'team-drawer__bio';
          lisaClementiBio.innerHTML =
            "<p class='body-text--primary team-drawer__bio-paragraph'>Lisa brings with her over 20 years of experience in the banking industry. She is highly organized with a dedicated work ethic. Lisa has a strong track record in building trusting, supportive partnerships all the while connecting in a friendly professional manner. She strives to provide a high level of client service through her daily operations and communications with everyone she comes in contact with.</p><p class='body-text--primary team-drawer__bio-paragraph'>In her spare time, she enjoys spending time cooking with her husband Walter and her adult children Eric and Claudia, and travelling.</p>";
          teamDrawerContainer.appendChild(lisaClementiBio);

          break;
        case 'kim-yates':
          // Team Member + Designation
          const kimYatesDesignation = document.createElement('h2');
          kimYatesDesignation.className =
            'body-text--secondary heading--team-member team-drawer__heading';
          kimYatesDesignation.innerHTML = 'Kim Yates';
          teamDrawerContainer.appendChild(kimYatesDesignation);

          // Team Member Role
          const kimYatesRole = document.createElement('h3');
          kimYatesRole.className =
            'all-caps team-member-role--drawer team-drawer__role';
          kimYatesRole.innerHTML = 'Associate Portfolio Administrator';
          teamDrawerContainer.appendChild(kimYatesRole);

          // Image
          const kimYatesImage = document.createElement('img');
          kimYatesImage.src =
            'https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce675e215d8295adc846_team-members_drawer_kim-yates_2x.png';
          kimYatesImage.loading = 'lazy';
          kimYatesImage.sizes =
            '(max-width: 479px) 88vw, (max-width: 767px) 91vw, (max-width: 1279px) 546px, 704.53125px';
          kimYatesImage.alt = '';
          kimYatesImage.width = '1410';
          kimYatesImage.srcset =
            'https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce675e215d8295adc846_team-members_drawer_kim-yates_2x-p-500.png 500w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce675e215d8295adc846_team-members_drawer_kim-yates_2x-p-800.png 800w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce675e215d8295adc846_team-members_drawer_kim-yates_2x-p-1080.png 1080w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce675e215d8295adc846_team-members_drawer_kim-yates_2x.png 1410w';
          kimYatesImage.className = 'team-drawer__img';
          teamDrawerContainer.appendChild(kimYatesImage);

          // Bio
          const kimYatesBio = document.createElement('div');
          kimYatesBio.className = 'team-drawer__bio';
          kimYatesBio.innerHTML =
            "<p class='body-text--primary team-drawer__bio-paragraph'>Kim brings along a combination of skills and competencies that span across various industries, including consumer goods, not-for-profit, and financial sectors. With a strong emphasis on enhancing processes and generating efficiencies, Kim focuses on providing excellent service and support within her work environment.</p><p class='body-text--primary team-drawer__bio-paragraph'>Beyond the office, Kim enjoys outdoor activities, music, and hanging out with her husband Brian and their three children, Alex, Andrew, and Kaitlyn.</p>";
          teamDrawerContainer.appendChild(kimYatesBio);
          break;
        case 'tim-vlahopoulos':
          // Team Member + Designation
          const timVlahopoulosDesignation = document.createElement('h2');
          timVlahopoulosDesignation.className =
            'body-text--secondary heading--team-member team-drawer__heading';
          timVlahopoulosDesignation.innerHTML =
            'Tim Vlahopoulos<span class="small-regular small-regular--designations-drawer team-drawer__designation">BCom (Hons), CIM</span>';
          teamDrawerContainer.appendChild(timVlahopoulosDesignation);

          // Team Member Role
          const timVlahopoulosRole = document.createElement('h3');
          timVlahopoulosRole.className =
            'all-caps team-member-role--drawer team-drawer__role';
          timVlahopoulosRole.innerHTML = 'Senior portfolio manager';
          teamDrawerContainer.appendChild(timVlahopoulosRole);

          // Image
          const timVlahopoulosImage = document.createElement('img');
          timVlahopoulosImage.src =
            'https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce66441c45e7ebebfc2b_team-members_drawer_tim-vlahopoulos_2x.png';
          timVlahopoulosImage.loading = 'lazy';
          timVlahopoulosImage.sizes =
            '(max-width: 479px) 88vw, (max-width: 767px) 91vw, (max-width: 1279px) 546px, 704.53125px';
          timVlahopoulosImage.alt = '';
          timVlahopoulosImage.width = '1410';
          timVlahopoulosImage.srcset =
            'https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce66441c45e7ebebfc2b_team-members_drawer_tim-vlahopoulos_2x-p-500.png 500w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce66441c45e7ebebfc2b_team-members_drawer_tim-vlahopoulos_2x-p-800.png 800w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce66441c45e7ebebfc2b_team-members_drawer_tim-vlahopoulos_2x-p-1080.png 1080w, https://assets-global.website-files.com/6552714dc2b17e1f98aa393d/656fce66441c45e7ebebfc2b_team-members_drawer_tim-vlahopoulos_2x.png 1410w';
          timVlahopoulosImage.className = 'team-drawer__img';
          teamDrawerContainer.appendChild(timVlahopoulosImage);

          // Bio
          const timVlahopoulosBio = document.createElement('div');
          timVlahopoulosBio.className = 'team-drawer__bio';
          timVlahopoulosBio.innerHTML =
            "<p class='body-text--primary team-drawer__bio-paragraph'>With over 25 years of experience in the Financial Services industry, Tim has honed his expertise through notable tenures at TD Bank Finance Group and Scotiawealth. At Scotiawealth, he most recently spearheaded the Fixed Income and Foreign Exchange Trading desk, showcasing his robust analytical abilities and adeptness in trade execution.</p><p class='body-text--primary team-drawer__bio-paragraph'>Outside of his professional life, Tim is an avid hockey fan and cherishes moments spent with his family and their dog.</p>";
          teamDrawerContainer.appendChild(timVlahopoulosBio);

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
