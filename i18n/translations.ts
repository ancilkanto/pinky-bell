export type Locale = 'en' | 'ar' | 'fr';

export const locales: Locale[] = ['en', 'ar', 'fr'];
export const defaultLocale: Locale = 'en';

export const translations = {
  en: {
    welcome: 'Welcome to Cake Reels',
    description: 'Create and share amazing cake videos',
    language: 'Language',
    menu: {
      home: 'Home',
      sweetStory: 'Sweet Story',
      brands: 'Brands',
      menu: 'Menu',
      services: 'Services',
      gallery: 'Gallery',
      contact: 'Contact us',
    },
    home: {
      heroSubtitle: 'Every story of joy beholds a cake!',
      heroTitle: 'Discover The World of Hospitality',
      heroDescription: 'We celebrate being a part of your happy moments! To celebrate love and pleasure, there\'s nothing more lovely than cutting a cake. Cake Reels was formed from the love of sharing these moments. We offer delicious desserts and great service for corporate catering, event catering, wedding catering, and general catering in Oman to make your event a little sweeter.',
      discoverMore: 'Discover More',
      intermediateSubtitle: 'What we Provide',
      intermediateTitle: 'Corporate Catering Services and Events Catering Services',
      contactUs: 'Contact Us',
      servicesSubtitle: 'Events we Cater to',
      servicesTitle: 'Events We Serve to Our Customers',
      featured: {
        cakeReels: {
          title: 'Cake Reels',
          description: 'Cakes & Bakes',
        },
        fahrenheit: {
          title: 'Fahrenheit 375 °',
          description: 'International Kitchen',
        },
        baitMajan: {
          title: 'Bait Majan',
          description: 'Middle Eastern Fusion',
        },
      },
      services: [
        {
          title: 'Sunrise Breakfast',
          description: 'Breakfast meetings, Casual Gatherings, Cocktail-style setups, Cultural Celebrations, Family-style Feasts. Sunday to Thursday from 12pm to 4pm. For more information, please call 4409 5285',
        },
        {
          title: 'Corporate Events',
          description: 'Dinner meetings, Casual Gatherings, Cocktail-style setups, Cultural Celebrations, Family-style Feasts. Sunday to Thursday from 12pm to 4pm. For more information, please call 4409 5285',
        },
        {
          title: 'Birthday Parties',
          description: 'Birthday celebrations, Casual Gatherings, Cocktail-style setups, Cultural Celebrations, Family-style Feasts. Sunday to Thursday from 12pm to 4pm. For more information, please call 4409 5285',
        },
        {
          title: 'Private Events',
          description: 'Private gatherings, Casual Gatherings, Cocktail-style setups, Cultural Celebrations, Family-style Feasts. Sunday to Thursday from 12pm to 4pm. For more information, please call 4409 5285',
        },
        {
          title: 'Holiday Celebrations',
          description: 'Holiday festivities, Casual Gatherings, Cocktail-style setups, Cultural Celebrations, Family-style Feasts. Sunday to Thursday from 12pm to 4pm. For more information, please call 4409 5285',
        },
      ],
      brands: {
        cakeReels: {
          subtitle: 'Cakes & Bakes',
          title: 'Cake Reels',
          description: 'We are with you in your moments of joy! What can be more beautiful than cutting a cake to express and celebrate moments of love and happiness! The urge to be amidst you during these wonderful moments is what led to the creation of "Cake Reels."',
          ctaText: 'Discover More',
        },
        fahrenheit: {
          subtitle: 'International Kitchen',
          title: 'Fahrenheit 375 °',
          description: 'Fahrenheit 375° is a brand that specializes in providing catering services for weddings, parties, and other events.',
          ctaText: 'Discover More',
        },
        baitMajan: {
          subtitle: 'Middle Eastern Fusion',
          title: 'Bait Majan',
          description: 'Bait Majan is a brand that specializes in providing catering services for weddings, parties, and other events.',
          ctaText: 'Discover More',
        },
      },
    },
    footer: {
      aboutTitle: 'About Cake Reels',
      aboutText: 'Delicious & Tasty Lunches. Enjoy Good Times',
      quickLinks: {
        title: 'Quick Links',
        links: [
          {
            href: '/sweet-story',
            label: 'Sweet Story',
          },
          {
            href: '/gallery',
            label: 'Gallery',
          },
          {
            href: '/locations',
            label: 'Locations',
          },
          {
            href: '/contact',
            label: 'Contact us',
          },
        ]
        
      },
      ourBrands: {
        title: 'Our Brands',
        links: [
          {
            href: '/',
            label: 'CakeReels (Cakes & Bakes)',
          },
          {
            href: '/',
            label: 'Fahrenheit 375 (International Kitchen)',
          },
          {
            href: '/',
            label: 'Bait Majan (Middle Eastern Fusion)',
          },
        ]
      },
      ourServices: {
        title: 'Our Services',
        links: [
          {
            href: '/',
            label: 'Catering Services',
          },
          {
            href: '/',
            label: 'Event Planning',
          },
          {
            href: '/',
            label: 'Cake Decorating',
          },
          {
            href: '/',
            label: 'Cake Delivery',
          },
        ]
      },
      contactTitle: 'Contact Us',
      companyName: 'Faherenheit 375°',
      address: 'Oman Avenues Mall, Aveneus Junction, Second Floor, Opposite Cinepolis',
      city: 'Muscat, Oman',
      phone: '+1 (234) 567-890',
      email: 'info@cakereels.com',
      followUs: 'Follow Us',
      cta: {
        title: 'We value personal connection and are here to answer any questions or listen to your thoughts.',
        instagramText: 'You\'ll find us on Instagram where we respond to every message personally.',
        phone: '+1 900 246 8999',
        button: 'REQUEST A CALL BACK',
      },
      allRightsReserved: 'All Rights Reserved by Cake Reels',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
    },
  },
  ar: {
    welcome: 'مرحباً بك في كيك ريلز',
    description: 'إنشاء ومشاركة مقاطع فيديو الكعك المذهلة',
    language: 'اللغة',
    menu: {
      home: 'الرئيسية',
      sweetStory: 'قصتنا الحلوة',
      brands: 'العلامات التجارية',
      menu: 'القائمة',
      services: 'الخدمات',
      gallery: 'المعرض',
      contact: 'اتصل بنا',
    },
    home: {
      heroSubtitle: 'كل قصة فرح تحتوي على كعكة!',
      heroTitle: 'اكتشف عالم الضيافة',
      heroDescription: 'نحتفل بكوننا جزءًا من لحظاتك السعيدة! للاحتفال بالحب والمتعة، لا يوجد أجمل من قطع الكعكة. تم تشكيل كيك ريلز من حب مشاركة هذه اللحظات. نقدم حلويات لذيذة وخدمة رائعة لتقديم الطعام للشركات وتقديم الطعام للفعاليات وتقديم الطعام لحفلات الزفاف والتقديم العام في عمان لجعل حدثك أكثر حلاوة.',
      discoverMore: 'اكتشف المزيد',
      intermediateSubtitle: 'ما نقدمه',
      intermediateTitle: 'خدمات تقديم الطعام للشركات والفعاليات',
      contactUs: 'اتصل بنا',
      servicesSubtitle: 'الفعاليات التي نخدمها',
      servicesTitle: 'الفعاليات التي نخدم عملائنا بها',
      featured: {
        cakeReels: {
          title: 'كيك ريلز',
          description: 'كيك وبيك',
        },
        fahrenheit: {
          title: 'فهرنهايت 375 °',
          description: 'مطبخ عالمي',
        },
        baitMajan: {
          title: 'بيت مجان',
          description: 'مزيج شرق أوسطي',
        },
      },
      services: [
        {
          title: 'إفطار الشروق',
          description: 'اجتماعات الإفطار، تجمعات غير رسمية، إعدادات كوكتيل، احتفالات ثقافية، وليمة عائلية. من الأحد إلى الخميس من 12 ظهراً إلى 4 مساءً. لمزيد من المعلومات، يرجى الاتصال على 4409 5285',
        },
        {
          title: 'فعاليات الشركات',
          description: 'اجتماعات العشاء، تجمعات غير رسمية، إعدادات كوكتيل، احتفالات ثقافية، وليمة عائلية. من الأحد إلى الخميس من 12 ظهراً إلى 4 مساءً. لمزيد من المعلومات، يرجى الاتصال على 4409 5285',
        },
        {
          title: 'حفلات أعياد الميلاد',
          description: 'احتفالات أعياد الميلاد، تجمعات غير رسمية، إعدادات كوكتيل، احتفالات ثقافية، وليمة عائلية. من الأحد إلى الخميس من 12 ظهراً إلى 4 مساءً. لمزيد من المعلومات، يرجى الاتصال على 4409 5285',
        },
        {
          title: 'فعاليات خاصة',
          description: 'تجمعات خاصة، تجمعات غير رسمية، إعدادات كوكتيل، احتفالات ثقافية، وليمة عائلية. من الأحد إلى الخميس من 12 ظهراً إلى 4 مساءً. لمزيد من المعلومات، يرجى الاتصال على 4409 5285',
        },
        {
          title: 'احتفالات الأعياد',
          description: 'احتفالات الأعياد، تجمعات غير رسمية، إعدادات كوكتيل، احتفالات ثقافية، وليمة عائلية. من الأحد إلى الخميس من 12 ظهراً إلى 4 مساءً. لمزيد من المعلومات، يرجى الاتصال على 4409 5285',
        },
      ],
      brands: {
        cakeReels: {
          subtitle: 'كيك وبيك',
          title: 'كيك ريلز',
          description: 'نحن معك في لحظات فرحك! ما الذي يمكن أن يكون أجمل من قطع الكعكة للتعبير عن لحظات الحب والسعادة والاحتفال بها! الرغبة في أن نكون وسطكم خلال هذه اللحظات الرائعة هي التي أدت إلى إنشاء "كيك ريلز".',
          ctaText: 'اكتشف المزيد',
        },
        fahrenheit: {
          subtitle: 'مطبخ عالمي',
          title: 'فهرنهايت 375 °',
          description: 'فهرنهايت 375° هي علامة تجارية متخصصة في تقديم خدمات تقديم الطعام لحفلات الزفاف والحفلات والفعاليات الأخرى.',
          ctaText: 'اكتشف المزيد',
        },
        baitMajan: {
          subtitle: 'مزيج شرق أوسطي',
          title: 'بيت مجان',
          description: 'بيت مجان هي علامة تجارية متخصصة في تقديم خدمات تقديم الطعام لحفلات الزفاف والحفلات والفعاليات الأخرى.',
          ctaText: 'اكتشف المزيد',
        },
      },
    },
    footer: {
      aboutTitle: 'عن كيك ريلز',
      aboutText: 'لذيذة و وجبات غداء لذيذة. استمتع بأوقات جيدة',
      quickLinks: {
        title: 'روابط سريعة',
        links: [
          { href: '/sweet-story', label: 'قصتنا الحلوة' },
          { href: '/gallery', label: 'المعرض' },
          { href: '/locations', label: 'المواقع' },
          { href: '/contact', label: 'اتصل بنا' },
        ]
      },
      ourBrands: {
        title: 'علاماتنا التجارية',
        links: [
          { href: '/', label: 'كيك ريلز (كيكات و باستات)' },
          { href: '/', label: 'فهرنهايت 375 (مطعم جنوبي)' },
          { href: '/', label: 'بايت مجان (مطعم جنوبي)' },
        ]
      },
      ourServices: {
        title: 'خدماتنا',
        links: [
          {
            href: '/',
            label: 'خدمات الشرابيط',
          },
          {
            href: '/',
            label: 'تنظيم الفعاليات',
          },
          {
            href: '/',
            label: 'تزيين الكعكات',
          },
          {
            href: '/',
            label: 'تسليم الكعكات',
          },
        ]
      },
      contactTitle: 'اتصل بنا',
      companyName: 'Faherenheit 375°',
      address: 'Oman Avenues Mall, Aveneus Junction, Second Floor, Opposite Cinepolis',
      city: 'Muscat, Oman',
      phone: '+1 (234) 567-890',
      email: 'info@cakereels.com',
      followUs: 'تابعنا',
      cta: {
        title: 'نحن نقدر الإتصال الشخصي ونحن هنا للإجابة على أي أسئلة أو الاستماع إلى أفكارك.',
        instagramText: 'ستجدنا على Instagram حيث نستجيب لكل رسالة بشكل شخصي.',
        phone: '+1 900 246 8999',
        button: 'طلب إتصال مرتب',
      },
      allRightsReserved: 'جميع الحقوق محفوظة.',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfService: 'شروط الخدمة',
    },
  },
  fr: {
    welcome: 'Bienvenue sur Cake Reels',
    description: 'Créez et partagez des vidéos de gâteaux incroyables',
    language: 'Langue',
    menu: {
      home: 'Accueil',
      sweetStory: 'Notre Histoire',
      brands: 'Marques',
      menu: 'Menu',
      services: 'Services',
      gallery: 'Galerie',
      contact: 'Contactez-nous',
    },
    home: {
      heroSubtitle: 'Chaque histoire de joie contient un gâteau!',
      heroTitle: 'Découvrez le Monde de l\'Hospitalité',
      heroDescription: 'Nous célébrons le fait de faire partie de vos moments heureux! Pour célébrer l\'amour et le plaisir, rien n\'est plus beau que de couper un gâteau. Cake Reels a été formé par l\'amour de partager ces moments. Nous offrons de délicieux desserts et un excellent service pour la restauration d\'entreprise, la restauration d\'événements, la restauration de mariage et la restauration générale à Oman pour rendre votre événement un peu plus sucré.',
      discoverMore: 'Découvrir Plus',
      intermediateSubtitle: 'Ce que nous fournissons',
      intermediateTitle: 'Services de Restauration d\'Entreprise et d\'Événements',
      contactUs: 'Contactez-nous',
      servicesSubtitle: 'Événements que nous servons',
      servicesTitle: 'Événements que nous servons à nos clients',
      featured: {
        cakeReels: {
          title: 'Cake Reels',
          description: 'Gâteaux et Pâtisseries',
        },
        fahrenheit: {
          title: 'Fahrenheit 375 °',
          description: 'Cuisine Internationale',
        },
        baitMajan: {
          title: 'Bait Majan',
          description: 'Fusion Moyen-Orient',
        },
      },
      services: [
        {
          title: 'Petit-déjeuner Sunrise',
          description: 'Réunions petit-déjeuner, Rassemblements décontractés, Configurations cocktail, Célébrations culturelles, Festins familiaux. Dimanche à jeudi de 12h à 16h. Pour plus d\'informations, veuillez appeler le 4409 5285',
        },
        {
          title: 'Événements d\'Entreprise',
          description: 'Réunions dîner, Rassemblements décontractés, Configurations cocktail, Célébrations culturelles, Festins familiaux. Dimanche à jeudi de 12h à 16h. Pour plus d\'informations, veuillez appeler le 4409 5285',
        },
        {
          title: 'Fêtes d\'Anniversaire',
          description: 'Célébrations d\'anniversaire, Rassemblements décontractés, Configurations cocktail, Célébrations culturelles, Festins familiaux. Dimanche à jeudi de 12h à 16h. Pour plus d\'informations, veuillez appeler le 4409 5285',
        },
        {
          title: 'Événements Privés',
          description: 'Rassemblements privés, Rassemblements décontractés, Configurations cocktail, Célébrations culturelles, Festins familiaux. Dimanche à jeudi de 12h à 16h. Pour plus d\'informations, veuillez appeler le 4409 5285',
        },
        {
          title: 'Célébrations de Vacances',
          description: 'Festivités de vacances, Rassemblements décontractés, Configurations cocktail, Célébrations culturelles, Festins familiaux. Dimanche à jeudi de 12h à 16h. Pour plus d\'informations, veuillez appeler le 4409 5285',
        },
      ],
      brands: {
        cakeReels: {
          subtitle: 'Gâteaux et Pâtisseries',
          title: 'Cake Reels',
          description: 'Nous sommes avec vous dans vos moments de joie! Qu\'est-ce qui peut être plus beau que de couper un gâteau pour exprimer et célébrer des moments d\'amour et de bonheur! L\'envie d\'être parmi vous pendant ces moments merveilleux est ce qui a conduit à la création de "Cake Reels".',
          ctaText: 'Découvrir Plus',
        },
        fahrenheit: {
          subtitle: 'Cuisine Internationale',
          title: 'Fahrenheit 375 °',
          description: 'Fahrenheit 375° est une marque spécialisée dans la fourniture de services de restauration pour les mariages, les fêtes et autres événements.',
          ctaText: 'Découvrir Plus',
        },
        baitMajan: {
          subtitle: 'Fusion Moyen-Orient',
          title: 'Bait Majan',
          description: 'Bait Majan est une marque spécialisée dans la fourniture de services de restauration pour les mariages, les fêtes et autres événements.',
          ctaText: 'Découvrir Plus',
        },
      },
    },
    footer: {
      aboutTitle: 'À propos de Cake Reels',
      aboutText: 'Délicieux & Déjeuners savoureux. Profitez de bons moments',
      quickLinks: {
        title: 'Liens Rapides',
        links: [
          { href: '/sweet-story', label: 'Notre Histoire' },
          { href: '/locations', label: 'Locations' },
          { href: '/gallery', label: 'Galerie' },
          { href: '/contact', label: 'Contactez-nous' },
        ]
      },
      ourBrands: {
        title: 'Nos Marques',
        links: [
          { href: '/', label: 'CakeReels (Gâteaux & Pâtisseries)' },
          { href: '/', label: 'Fahrenheit 375 (Cuisine Internationale)' },
          { href: '/', label: 'Bait Majan (Fusion Moyen-Orient)' },
        ]
      },
      ourServices: {
        title: 'Nos Services',
        links: [
          { href: '/', label: 'Services de Traiteur' },
          { href: '/', label: 'Planification d\'Événements' },
          { href: '/', label: 'Décoration de Gâteaux' },
          { href: '/', label: 'Livraison de Gâteaux' },
        ]
      },
      contactTitle: 'Contactez-nous',
      companyName: 'Faherenheit 375°',
      address: 'Oman Avenues Mall, Aveneus Junction, Second Floor, Opposite Cinepolis',
      city: 'Muscat, Oman',
      phone: '+1 (234) 567-890',
      email: 'info@cakereels.com',
      followUs: 'Suivez-nous',
      cta: {
        title: 'Nous valorisons la connexion personnelle et nous sommes là pour répondre à toutes vos questions ou écouter vos pensées.',
        instagramText: 'Vous nous trouverez sur Instagram où nous répondons à chaque message personnellement.',
        phone: '+1 900 246 8999',
        button: 'DEMANDER UN RAPPEL',
      },
      allRightsReserved: 'Tous droits réservés.',
      privacyPolicy: 'Politique de Confidentialité',
      termsOfService: 'Conditions d\'Utilisation',
    },
  },
};

export const languageNames = {
  en: 'EN',
  ar: 'AR',
  fr: 'FR',
};

