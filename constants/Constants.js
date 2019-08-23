import joinBtpIcon from '../static/assets/menu/ic-joinasbtp.png';
import joinMerchantIcon from '../static/assets/menu/ic-joinasmerchant.png';
import joinPreneurIcon from '../static/assets/menu/ic-joinaspreneur.png';
import joinSupplierIcon from '../static/assets/menu/ic-joinassupplier.png';
import englishIcon from '../static/assets/menu/ic-english.svg';
import indonesiaIcon from '../static/assets/menu/ic-indonesia.svg';
import globalIcon from '../static/assets/menu/ic-global.svg';

export const HeaderMenu = [
  {
    name: {
      en: 'About us',
      id: 'Tentang Kami'
    },
    url: '/about'
  },
  {
    name: {
      en: 'Services',
      id: 'Layanan'
    },
    nodes: [
      {
        url: '/boostplay',
        name: {
          en: 'BoostPlay',
          id: 'BoostPlay'
        }
      },
      {
        url: '/boostpenjual',
        name: {
          en: 'BoostPenjual',
          id: 'BoostPenjual'
        }
      },
      {
        url: '/boostpreneur',
        name: {
          en: 'BoostPreneur',
          id: 'BoostPreneur'
        }
      }
    ]
  },
  {
    name: {
      en: 'Blog',
      id: 'Blog'
    },
    url: '/comingsoon'
  },
  {
    name: {
      en: 'Join as Merchant',
      id: 'Gabung sebagai'
    },
    nodes: [
      {
        icon: joinMerchantIcon,
        url: '/commingsoon',
        name: {
          en: 'Merchant',
          id: 'Penjual'
        }
      },
      {
        icon: joinPreneurIcon,
        url: '/commingsoon',
        name: {
          en: 'Boostpreneur',
          id: 'Boostpreneur'
        }
      },
      {
        icon: joinBtpIcon,
        url: '/commingsoon',
        name: {
          en: 'Territory Partner',
          id: 'Territory Partner'
        }
      },
      {
        icon: joinSupplierIcon,
        url: '/commingsoon',
        name: {
          en: 'Supplier',
          id: 'Supplier'
        }
      }
    ]
  },
  {
    name: {
      en: 'FAQ',
      id: 'FAQ'
    },
    url: '/faq'
  }
];

export const LangList = {
  icon: globalIcon,
  name: {
    en: 'English',
    id: 'Bahasa Indonesia'
  },
  nodes: [
    {
      id: 'en',
      icon: englishIcon,
      name: {
        en: 'English',
        id: 'English'
      }
    },
    {
      id: 'id',
      icon: indonesiaIcon,
      name: {
        en: 'Bahasa Indonesia',
        id: 'Bahasa Indonesia'
      }
    }
  ]
};

export const Constants = {
  NAVBAR_MENU: [
    {
      BRAND_LOGO: '/static/assets/boost_logo/asset-logoboost@3x.png',
      CAPTION: 'Boost Logo'
    },
    {
      NAME: 'About Us',
      URL: '/about'
    },
    {
      NAME: 'Services',
      URL: '/comingsoon'
    },
    {
      NAME: 'Blog',
      URL: '/comingsoon'
    },
    {
      NAME: 'FAQ',
      URL: '/faq'
    },
    {
      NAME: 'Join As Merchant',
      URL: '/comingsoon'
    },
    {
      NAME: 'ENG',
      URL: '/'
    }
  ],
  NAVBAR_MOBILE_MENUS: [
    {
      NAME: 'About Us',
      URL: '/about'
    },
    {
      NAME: 'Services',
      URL: '/'
    },
    {
      NAME: 'Blog',
      URL: '/'
    },
    {
      NAME: 'FAQ',
      URL: '/faq'
    },
    {
      NAME: 'Join Us',
      REF: [
        {
          ICON: '',
          MENU: 'As a Merchant'
        },
        {
          ICON: '',
          MENU: 'As a Boostpreneur'
        },
        {
          ICON: '',
          MENU: 'As a Boost Territory Partner'
        },
        {
          ICON: '',
          MENU: 'As a Boost Business Partner'
        }
      ]
    },
    {
      NAME: 'Language',
      REF: [
        {
          ICON: '/static/assets/languages/ic-english-24-px.svg',
          MENU: 'English'
        },
        {
          ICON: '/static/assets/languages/ic-indonesia-24-px.svg',
          MENU: 'Indonesia'
        }
      ]
    }
  ],
  NAVBAR_JOIN_US: [
    {
      ICON: '',
      MENU: 'As a Merchant'
    },
    {
      ICON: '',
      MENU: 'As a Boostpreneur'
    },
    {
      ICON: '',
      MENU: 'As a Boost Territory Partner'
    },
    {
      ICON: '',
      MENU: 'As a Boost Business Partner'
    }
  ],
  NAVBAR_LANGUAGE: [
    {
      ICON: '/static/assets/languages/ic-english-24-px.svg',
      MENU: 'English'
    },
    {
      ICON: '/static/assets/languages/ic-indonesia-24-px.svg',
      MENU: 'Indonesia'
    }
  ],
  HOME_BANNER: {
    HEADER: 'Everyone Deserves Growth',
    DESCRIPTION:
      "The fundamental challenge of Indonesia's Financial Inclusion is literacy of the underserved segments.",
    LEFT_BUTTON: 'View More',
    RIGHT_BUTTON: 'See Video'
  },
  LANGUAGE: {
    LANG_1: 'English',
    LANG_2: 'Indonesian'
  },
  LANG_CODES: {
    LANG_1: 'ENG',
    LANG_2: 'BAHASA'
  },
  BANNER_BUTTONS: {
    APP_STORE:
      '/static/assets/banner-buttons/app-store/asset-appstore-homepage@3x.png',
    GOOGLE_PLAY:
      '/static/assets/banner-buttons/google-play/asset-playstore-homepage@3x.png'
  },
  HOME_CONTENT: {
    LEFT_CONTENT: '',
    HEADER: 'Meet Boost, the Digital Economy Platform',
    DESCRIPTION:
      "The fundamental challenge of Indonesia's Financial Inclusion is literacy of the underserved segments. To address literacy, users must be educated. Boost disrupt financial literacy education through gamification to make the process more fun.",
    MORE_BUTTON: 'Know More Here ->'
  },
  HOME_ABOUT_US: {
    RIGHT_CONTENT: '',
    HEADER: 'Step Closer With Us',
    DESCRIPTION:
      'Boost is a digital economy platform which provides digital interaction between merchant and consumers (B2C) over a QR Code as a medium to initiate - process - record are interaction through a mobile application at both merchant and consumer end.',
    MORE_BUTTON: 'See Detail Here ->'
  },
  BOOSTPLAY_BANNER: {
    HEADER: 'Boost Your Day with BoostPlay',
    DESCRIPTION:
      'With BoostPlay, enrich your fun experience and get the delightful benefit',
    LEFT_BUTTON: 'Google Play',
    RIGHT_BUTTON: 'App Store'
  },
  BOOSTPLAY_FAQ: {
    HEADER: 'FAQs',
    QUESTION_1: 'Apa itu BoostPlay',
    QUESTION_2: 'Bagaimana mengaktifkan BoostCash saya?',
    QUESTION_3: 'Bagaimana membeli voucher di PromoZone',
    QUESTION_4: 'Bagaimana cara top up BoostCash'
  },
  FAQ_BOTTOM_BANNER: {
    HEADER: 'Still have a question?',
    BUTTON_TEXT: 'Contact Us Now'
  },
  BE_OUR_PARTNER: {
    HEADER: 'Be Our Partner',
    DESCRIPTION: ''
  },
  BOOST_PERSONAS_CAROUSEL: {
    BOOSTPLAY: {
      HEADER: 'BoostPlay',
      DESCRIPTION:
        "For the young and young-at-heart, Boost open up an opportunity for the young to 'do good' by giving access to take part of the growth of the SMEs around you in a fun and exciting environment while gaining benefits through gamification."
    }
  },
  HOMEPAGE_DATA: {
    RIGHT_CARD: {
      HEADER: 'We As A Numbers',
      DESCRIPTION:
        'Spreading digital financial service throughout the nation. Boost is growing from urban cities, sub-urban to rural areas to cater the digital financial needs of every layers of Indonesian society. 550.000 merchants in over 20 provinces Bali 53.000 merchants.'
    }
  },
  BOOST_BOTTOM_CAROUSEL_HOMEPAGE: {
    BOOSTPLAY: {
      HEADER: 'BoostPlay',
      DESCRIPTION:
        'BoostPlay is designed in a gamification format to create a hybrid experience of both physical and digital interaction/transaction between users and participating Boost merchants'
    }
  },
  BOOSTPRENEUR_BANNER: {
    HEADER: 'Connect Potential Customer',
    DESCRIPTION:
      'With BoostPenjual, digitalize your business to gain footfall through quest that connects you to your potential customer.'
  },
  BEING_A_BOOSTPRENEUR: [
    'Benefit being a BoostPreneur',
    [
      {
        TITLE: 'Benefit A',
        DESCRIPTION: 'Limitless game and quiz experience',
        ICON: '/static/assets/boost.jpg'
      },
      {
        TITLE: 'Benefit B',
        DESCRIPTION: 'Easily scan to pay at merchant',
        ICON: '/static/assets/boost.jpg'
      },
      {
        TITLE: 'Benefit C',
        DESCRIPTION: 'Get interesting voucher from some brand',
        ICON: '/static/assets/boost.jpg'
      }
    ]
  ],
  BOOSTPLAY_FOR_YOU: [
    'BoostPlay for you',
    [
      {
        TITLE: 'Fun gamification',
        DESCRIPTION: 'Limitless game and quiz experience',
        ICON:
          '/static/assets/boostplay/fun_games/asset-benefit-1-boostplay@3x.png'
      },
      {
        TITLE: 'Transact to merchant',
        DESCRIPTION: 'Easily scan to pay at merchant',
        ICON:
          '/static/assets/boostplay/transact_with_merchant/asset-benefit-2-boostplay@3x.png'
      },
      {
        TITLE: 'Delightful voucher',
        DESCRIPTION: 'Get interesting voucher from some brand',
        ICON:
          '/static/assets/boostplay/delightful_voucher/asset-benefit-3-boostplay@2x.png'
      }
    ]
  ],
  BOOSTPLAY_FEATURES: [
    {
      TITLE: 'Featured',
      DESCRIPTION: 'Some features that you can enjoy and play in your device'
    },
    {
      ASSET:
        '/static/assets/boostplay/features/boost-battle/asset-card-boostbattle@3x.png',
      TITLE: 'Boost Battle',
      DESCRIPTION:
        'Game dikotomi yang ditujukan untuk mengklasifikasikan pengguna BoostPlay berdasarkan pilihan atas ketertarikan tertentu'
    },
    {
      ASSET:
        '/static/assets/boostplay/features/boost-battle/asset-card-boostbattle@3x.png',
      TITLE: 'Boot Quiz',
      DESCRIPTION:
        'Konten berbentuk kuis yang berguna untuk mengetahui perilaku pengguna, minat/ketertarikan dan pengetahuan pengguna'
    }
  ],
  BOOST_PENJUAL_MISSION: {
    TITLE: 'Mission',
    MISSION:
      'Mempercepat pertumbuhan usaha supplier dengan menyediakan jaringan yang lebih luas'
  },
  BOOST_PENJUAL_WHY_US: [
    {
      TITLE: '1 x 24 settlement',
      DESCRIPTION: ''
    },
    {
      TITLE: 'Market competitive',
      DESCRIPTION: ''
    },
    {
      TITLE: '24/7 hotline',
      DESCRIPTION: ''
    }
  ],
  // BOOST_PENJUAL_BANNER: {
  //   HEADER: "Digitalize Business",
  //   DESCRIPTION: "Digitalize your business and increasing business volume by connecting to Boost merchant",
  //   BUTTON: "Join Now"
  // },
  KOL_BANNER: {
    HEADER: 'Boost Community Influencer',
    DESCRIPTION:
      'Freedom to organize event suitable with your community needs, and there will always opportunity to hold that event together with Boost',
    BUTTON: 'Sign up now'
  },
  KOL_BENEFITS: [
    'Benefit',
    [
      {
        TITLE: 'Manage Community',
        DESCRIPTION: 'Limitless game and quiz experience',
        ICON: '/static/assets/boost.jpg'
      },
      {
        TITLE: 'Community engagement',
        DESCRIPTION: 'Easily scan to pay at merchant',
        ICON: '/static/assets/boost.jpg'
      },
      {
        TITLE: 'Special Rewards',
        DESCRIPTION: 'Get interesting voucher from some brand',
        ICON: '/static/assets/boost.jpg'
      }
    ]
  ],
  KOL_WHY_US: {
    TITLE: 'Why us?',
    REASON:
      'Have you ever developed a community? Feeling bored with your flat activities? Having difficulties to arrange community meet up? Register your community at Boost, since we provide features that simplify you to manage your community and will help you to support your community activity to make it consistently active, positive, and productive.'
  },
  BOOST_PENJUAL_BANNER: {
    HEADER: 'Grow Your Business With Us',
    DESCRIPTION:
      'Digitalize your business to gain footfall through quest that connects you to your customer',
    LEFT_BUTTON: 'Google Play',
    RIGHT_BUTTON: 'App Store'
  },
  BOOST_PENJUAL_BENEFITS: [
    'Why us?',
    [
      {
        TITLE: 'Additional income',
        DESCRIPTION: 'Limitless game and quiz experience',
        ICON: '/static/assets/boost.jpg'
      },
      {
        TITLE: 'Business growth',
        DESCRIPTION: 'Easily scan to pay at merchant',
        ICON: '/static/assets/boost.jpg'
      },
      {
        TITLE: 'Digital ecosystem',
        DESCRIPTION: 'Get interesting voucher from some brand',
        ICON: '/static/assets/boost.jpg'
      }
    ]
  ],
  BOOST_PENJUAL_SHORT_DESCRIPTION: {
    HEADER: 'Growing business in digital era',
    DESCRIPTION:
      'Have you ever developed a community? Feeling bored with your flat activities? Having difficulties to arrange community meet up? Registere your community at Boost, since we provide features that simplify you to manage your comminity and will help you to support your comminity activity to make it consistently active, positive, and productive.'
  },
  BOOST_PENJUAL_FEATURES: [
    {
      TITLE: 'Featured',
      DESCRIPTION: 'Some features that you can enjoy and play in your device'
    },
    {
      TITLE: 'Boost Proteksi',
      DESCRIPTION:
        'Game dikotomi yang ditujukan untuk mengklasifikasikan pengguna BoostPlay berdasarkan pilihan atas ketertarikan tertentu'
    },
    {
      TITLE: 'Digital Product',
      DESCRIPTION:
        'Konten berbentuk kuis yang berguna untuk mengetahui perilaku pengguna, minat/ketertarikan dan pengetahuan pengguna'
    }
  ],
  FAQ_BOOSTPRENEUR: [
    {
      QUESTION: 'Apa itu Aplikasi BoostPreneur?',
      ANSWER:
        'Aplikasi BoostPreneur adalah aplikasi yang dipergunakan oleh BoostPreneur untuk melakukan akuisisi/ registrasi merchant serta melakukan pengecekan terhadap performance pencapaian kinerja BoostPreneur.'
    },
    {
      QUESTION: 'Ditujukan untuk siapa aplikasi BoostPreneur?',
      ANSWER: 'Para BoostPreneur yang telah terdaftar di BTP'
    },
    {
      QUESTION: 'Apa tujuan penggunaan aplikasi BoostPreneur?',
      ANSWER:
        'Agar mempermudah BoostPreneur dalam melakukan akuisisi serta memantau kinerja mereka dalam melakukan akuisisi merchant dan mempermudah reporting di admin BTP serta management Boost'
    },
    {
      QUESTION:
        'Apakah semua tipe handphone bisa download dan menggunakan aplikasi BoostPreneur?',
      ANSWER:
        'Untuk saat ini hanya bisa untuk smartphone Android saja dengan OS minimal 4.1 sedangkan untuk iOS akan diinformasikan kembali nanti'
    },
    {
      QUESTION: 'Bagaimana cara mendownload aplikasi BoostPreneur?',
      ANSWER: `(1) Buka Playstore,
      (2) Cari BoostPreneur,
      (3) Klik INSTALL,
      (4) Klik OPEN untuk membuka aplikasi BoostPreneur, (5) Pastikan proses instalasi berhasil dan ikon BoostPreneur sudah tersedia.`
    },
    {
      QUESTION:
        'Bagaimana cara melakukan akuisisi merchant dengan apliaksi BoostPreneur?',
      ANSWER: `
      (1) Masukan username dan password,
      (2) Klik ADD NEW BOOSTSPOT,
      (3) Isi data toko/ merchant,
      (4) Isi data pemilik toko,
      (5) Scan QRCode Merchant,
      (6) Klik OK saat mendapat notifikasi,
      (7) Klik REGISTER BOOST SPOT,
      (8) Klik VERIFY MSISDN,
      (9) Masukan OTP lalu klik OK.
      `
    }
  ],
  HOW_TO_ACTIVATE_BOOSTCASH: [
    'How to activate BoostCash',
    [
      {
        ASSET: '',
        TITLE: 'Click Activation',
        DETAIL: 'Step 1'
      },
      {
        ASSET: '',
        TITLE: 'Fill Data',
        DETAIL: 'Step 2'
      },
      {
        ASSET: '',
        TITLE: 'Fill Data',
        DETAIL: 'Step 3'
      },
      {
        ASSET: '',
        TITLE: 'Create PIN',
        DETAIL: ' Step 4'
      },
      {
        ASSET: '',
        TITLE: 'BoostCash is Ready!',
        DETAIL: 'Step 5'
      }
    ]
  ],
  WHATTHEYSAY: [
    {
      TESTIMONIAL: 'Limitless game and quiz experience',
      USER: 'User'
    },
    {
      TESTIMONIAL: 'Limitless game and quiz experience',
      USER: 'User'
    },
    {
      TESTIMONIAL: 'Limitless game and quiz experience',
      USER: 'User'
    },
    {
      TESTIMONIAL: 'Limitless game and quiz experience',
      USER: 'User'
    }
  ],
  SOCIAL_MEDIAS: {
    FACEBOOK: 'https://www.facebook.com/AxiataDigitalServicesIndonesia/',
    WHATSAPP: '',
    INSTAGRAM: 'https://instagram.com/myboost_id/'
  },
  COMING_SOON: {
    TITLE: 'THIS PAGE IS COMING SOON',
    DESCRIPTION:
      'We are preparing something amazing and exciting for you on this page. Keep exploring other menu from homepage to see other information.',
    BUTTON: 'Back to homepage'
  },
  PAGE_NOT_FOUND: {
    TITLE: 'OOPS, SORRY..',
    DESCRIPTION: 'We can’t seem find the page you’re looking for',
    BUTTON: 'Back to homepage'
  }
};
