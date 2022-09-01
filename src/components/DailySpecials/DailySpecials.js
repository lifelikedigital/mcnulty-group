// Selectors
const $dailySpecialsHeading = $('h2.daily-specials__heading');
const $dailySpecialsBody = $('p.daily-specials__body');
const $dailySpecialsBtn = $('#daily-specials-btn');
const $dailySpecialsImage = $('#daily-specials-img');
const $dailySpecialsShadow = $('#daily-specials-shadow');

// Specials related
const specials = {
  weekdays: {
    heading: 'Daily cannabis specials',
    prefix: 'Each',
    cta: 'Specials',
    days: {
      mondays: {
        label: 'Monday',
        products: 'Cannabis Pre-Rolls',
        image:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/61b015e4710f16bc1749ce6b_best-toronto-dispensary_cannabis-stores-toronto__daily-specials_cannabis-pre-rolls.png',
        shadow:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/61b015e3ff6095dc866e5930_shadow__daily-specials_cannabis-pre-rolls.png',
      },
      tuesdays: {
        label: 'Tuesday',
        products: 'Vaporizer Cartridges & Disposable Cannabis Vaporizers',
        image:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/61b015e570a6915785220648_best-toronto-dispensary_cannabis-stores-toronto__daily-specials_cannabis-vaporizers-vapes.png',
        shadow:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/61b015e260f891af1173b219_shadow__daily-specials_cannabis-vaporizers-vapes.png',
      },
      wednesdays: {
        label: 'Wednesday',
        products: 'Cannabis and CBD Oils, Capsules & Concentrates',
        image:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/61b015e52a3f76217aac8523_best-toronto-dispensary_cannabis-stores-toronto__daily-specials_cbd-cannabis-oils.png',
        shadow:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/61b015e450e05825f369ec2f_shadow__daily-specials_cbd-cannabis-oils.png',
      },
      thursdays: {
        label: 'Thursday',
        products: 'Cannabis Edibles',
        image:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/61b015e4f939b4808fe4379b_best-toronto-dispensary_cannabis-stores-toronto__daily-specials_cannabis-edibles.png',
        shadow:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/61b015e3520ea877d53e2c2f_shadow__daily-specials_cannabis-edibles.png',
      },
    },
  },
  weekends: {
    heading: `You've been invited`,
    prefix: 'On',
    cta: 'Collection',
    days: {
      weekends: {
        label: 'Weekends',
        products: 'Private Collection',
        image:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/61b015e45324e89e1448c186_best-toronto-dispensary_cannabis-stores-toronto__daily-specials_cannabis-accessories.png',
        shadow:
          'https://assets.website-files.com/60cfd1175523ac59337574a3/61b015e2f1f32626a5305b07_shadow__daily-specials_cannabis-accessories.png',
      },
    },
  },
};

// Date related
const currentDate = new Date();
const currentDay = currentDate.getDay();

const DailySpecials = () => {
  if (currentDay === 0 || currentDay === 6 || currentDay === 5) {
    // refactor into a function that takes all of these repeating variables as arguments
    // see if I can use ternarys in place of some of these variables
    $dailySpecialsImage.attr('src', specials.weekends.days.weekends.image);
    $dailySpecialsShadow.attr('src', specials.weekends.days.weekends.shadow);
    $dailySpecialsImage.attr('srcset', specials.weekends.days.weekends.image);
    $dailySpecialsShadow.attr('srcset', specials.weekends.days.weekends.shadow);
    $dailySpecialsHeading.text(specials.weekends.heading);
    $dailySpecialsBody.text(
      `${specials.weekends.prefix} ${specials.weekends.days.weekends.label} we feature our ${specials.weekends.days.weekends.products} of cannabis accessories. Hand carved and polished by a small team of generational wood craftsmen showcasing a range of natural tones and unique finishes. An aesthetic sure to fit in with your home décor.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekends.cta}`);
  } else if (currentDay === 4) {
    $dailySpecialsImage.attr('src', specials.weekdays.days.thursdays.image);
    $dailySpecialsShadow.attr('src', specials.weekdays.days.thursdays.shadow);
    $dailySpecialsImage.attr('srcset', specials.weekdays.days.thursdays.image);
    $dailySpecialsShadow.attr(
      'srcset',
      specials.weekdays.days.thursdays.shadow
    );
    $dailySpecialsHeading.text(specials.weekdays.heading);
    $dailySpecialsBody.text(
      `${specials.weekdays.prefix} ${specials.weekdays.days.thursdays.label} we feature our favourite ${specials.weekdays.days.thursdays.products} at 10% off their normal price. Shop today's deals below for Toronto cannabis delivery or visit a Canvas Cannabis dispensary near you.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekdays.cta}`);
  } else if (currentDay === 3) {
    $dailySpecialsImage.attr('src', specials.weekdays.days.wednesdays.image);
    $dailySpecialsShadow.attr('src', specials.weekdays.days.wednesdays.shadow);
    $dailySpecialsImage.attr('srcset', specials.weekdays.days.wednesdays.image);
    $dailySpecialsShadow.attr(
      'srcset',
      specials.weekdays.days.wednesdays.shadow
    );
    $dailySpecialsHeading.text(specials.weekdays.heading);
    $dailySpecialsBody.text(
      `${specials.weekdays.prefix} ${specials.weekdays.days.wednesdays.label} we feature our favourite ${specials.weekdays.days.wednesdays.products} at 10% off their normal price. Shop today's deals below for Toronto cannabis delivery or visit a Canvas Cannabis dispensary near you.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekdays.cta}`);
  } else if (currentDay === 2) {
    $dailySpecialsImage.attr('src', specials.weekdays.days.tuesdays.image);
    $dailySpecialsShadow.attr('src', specials.weekdays.days.tuesdays.shadow);
    $dailySpecialsImage.attr('srcset', specials.weekdays.days.tuesdays.image);
    $dailySpecialsShadow.attr('srcset', specials.weekdays.days.tuesdays.shadow);
    $dailySpecialsHeading.text(specials.weekdays.heading);
    $dailySpecialsBody.text(
      `${specials.weekdays.prefix} ${specials.weekdays.days.tuesdays.label} we feature our favourite ${specials.weekdays.days.tuesdays.products} at 10% off their normal price. Shop today's deals below for Toronto cannabis delivery or visit a Canvas Cannabis dispensary near you.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekdays.cta}`);
  } else if (currentDay === 1) {
    $dailySpecialsImage.attr('src', specials.weekdays.days.mondays.image);
    $dailySpecialsShadow.attr('src', specials.weekdays.days.mondays.shadow);
    $dailySpecialsImage.attr('srcset', specials.weekdays.days.mondays.image);
    $dailySpecialsShadow.attr('srcset', specials.weekdays.days.mondays.shadow);
    $dailySpecialsHeading.text(specials.weekdays.heading);
    $dailySpecialsBody.text(
      `${specials.weekdays.prefix} ${specials.weekdays.days.mondays.label} we feature our favourite ${specials.weekdays.days.mondays.products} at 10% off their normal price. Shop today's deals below for Toronto cannabis delivery or visit a Canvas Cannabis dispensary near you.`
    );
    $dailySpecialsBtn.text(`Shop ${specials.weekdays.cta}`);
  }
};

export default DailySpecials;
