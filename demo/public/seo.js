(function () {
  var BASE_URL = 'https://booking-jharkhand.vercel.app';
  var BRAND = 'Booking Jharkhand';
  var TAGLINE = 'Premium Travel Marketplace';
  var PHONE = '+91-9972934937';
  var EMAIL = 'hello@bookingjharkhand.com';

  var DISTRICTS = ['Ranchi','Deoghar','Netarhat (Latehar)','Jamshedpur (East Singhbhum)','Dhanbad','Bokaro','Hazaribagh','Ramgarh','Giridih','Koderma','Chatra','Gumla','Lohardaga','Simdega','West Singhbhum','Saraikela-Kharsawan','Pakur','Sahebganj','Godda','Dumka','Jamtara','Latehar','Garhwa','Palamu'];

  var COORDS = {
    netarhat: { lat: 23.4755, lng: 84.2653 },
    deoghar: { lat: 24.4800, lng: 86.7000 },
    ranchi: { lat: 23.3441, lng: 85.3096 },
    jamshedpur: { lat: 22.8046, lng: 86.2029 },
    betla: { lat: 23.8877, lng: 84.1900 },
    patratu: { lat: 23.6500, lng: 85.2800 },
    parasnath: { lat: 23.9633, lng: 86.1250 },
    rajrappa: { lat: 23.6167, lng: 85.7167 }
  };

  var orgSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'TravelAgency', 'LocalBusiness'],
    '@id': BASE_URL + '/#organization',
    name: BRAND,
    alternateName: 'Booking Jharkhand - Book Hotels, Cabs & Tourism Packages',
    description: 'Book verified hotels, local cabs, restaurants and curated travel experiences across Jharkhand waterfalls, forests, temples and hill destinations.',
    url: BASE_URL,
    logo: BASE_URL + '/logo.png',
    image: BASE_URL + '/og-image.jpg',
    foundingDate: '2025',
    founder: { '@type': 'Person', name: 'Prabhakar Kumar' },
    slogan: 'Explore the Heart of India — Jharkhand',
    brand: { '@type': 'Brand', name: BRAND },
    parentOrganization: { '@type': 'Organization', name: 'Chiti Technologies', url: 'https://www.chiti.tech/en' },
    sameAs: [
      'https://www.instagram.com/bookingjharkhand',
      'https://www.facebook.com/bookingjharkhand',
      'https://wa.me/919972934937',
      'https://x.com/bookingjharkhand',
      'https://www.linkedin.com/company/bookingjharkhand',
      'https://en.wikipedia.org/wiki/Jharkhand',
      'https://www.wikidata.org/wiki/Q1188',
      'https://www.jharkhandtourism.gov.in'
    ],
    knowsLanguage: ['en', 'hi'],
    areaServed: DISTRICTS.map(function (d) { return { '@type': 'City', name: d }; }).concat({ '@type': 'State', name: 'Jharkhand' }),
    address: { '@type': 'PostalAddress', addressLocality: 'Ranchi', addressRegion: 'Jharkhand', addressCountry: 'IN' },
    contactPoint: [
      { '@type': 'ContactPoint', telephone: PHONE, contactType: 'customer service', availableLanguage: ['English', 'Hindi'], hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '08:00', closes: '22:00' } },
      { '@type': 'ContactPoint', telephone: PHONE, contactType: 'sales', contactOption: 'WhatsApp', availableLanguage: ['English', 'Hindi'] },
      { '@type': 'ContactPoint', email: EMAIL, contactType: 'support', availableLanguage: ['English', 'Hindi'] }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Jharkhand Travel Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hotel Booking', description: 'Verified hotels, resorts, homestays across Jharkhand' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cab Booking', description: 'Local and outstation taxi services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Restaurant Reservation', description: 'Dining across Jharkhand' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Travel Packages', description: 'Curated Jharkhand tour packages' } }
      ]
    },
    makesOffer: [
      { '@type': 'Offer', '@id': BASE_URL + '/#offer-hotels', itemOffered: { '@type': 'Service', name: 'Hotel Booking', url: BASE_URL + '/hotels.html' } },
      { '@type': 'Offer', '@id': BASE_URL + '/#offer-cabs', itemOffered: { '@type': 'Service', name: 'Cab Booking', url: BASE_URL + '/cab-booking.html' } },
      { '@type': 'Offer', '@id': BASE_URL + '/#offer-restaurants', itemOffered: { '@type': 'Service', name: 'Restaurants', url: BASE_URL + '/restaurants.html' } },
      { '@type': 'Offer', '@id': BASE_URL + '/#offer-packages', itemOffered: { '@type': 'Service', name: 'Travel Packages', url: BASE_URL + '/packages.html' } }
    ],
    potentialAction: [
      { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: BASE_URL + '/?q={search_term_string}' }, 'query-input': 'required name=search_term_string' },
      { '@type': 'OrderAction', target: { '@type': 'EntryPoint', urlTemplate: BASE_URL + '/vendor-onboarding.html', actionApplication: { '@type': 'SoftwareApplication', name: 'Vendor Registration Portal' } } }
    ],
    interactionStatistic: [
      { '@type': 'InteractionCounter', interactionType: 'https://schema.org/BookAction', userInteractionCount: '500+' },
      { '@type': 'InteractionCounter', interactionType: 'https://schema.org/RegisterAction', userInteractionCount: '600+' }
    ]
  };

  var PAGES = {
    index: {
      title: BRAND + ' — ' + TAGLINE,
      desc: 'Book verified hotels, local cabs, restaurants and curated travel packages across Jharkhand. Explore Netarhat, Deoghar, Ranchi, Betla and more.',
      keywords: 'Jharkhand tourism, book hotels Jharkhand, cab booking Ranchi, Netarhat resorts, Deoghar temples, Jharkhand travel packages, Betla safari',
      type: 'website',
      image: BASE_URL + '/og-image.jpg',
      schema: function () {
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': BASE_URL + '/#website',
          url: BASE_URL + '/',
          name: BRAND,
          description: this.desc,
          inLanguage: ['en', 'hi'],
          potentialAction: {
            '@type': 'SearchAction',
            target: { '@type': 'EntryPoint', urlTemplate: BASE_URL + '/?q={search_term_string}' },
            'query-input': 'required name=search_term_string'
          },
          speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.hero-title', '.page-heading'] }
        };
      }
    },
    destinations: {
      title: 'Explore Jharkhand — Top Destinations | ' + BRAND,
      desc: 'Discover 24 districts of Jharkhand — Netarhat, Deoghar, Ranchi, Betla, Patratu, Parasnath, Rajrappa and more. Plan your perfect trip.',
      keywords: 'Jharkhand destinations, Netarhat hill station, Deoghar temples, Ranchi waterfalls, Betla National Park, Patratu Lake, Parasnath Jain pilgrimage',
      type: 'website',
      schema: function () {
        return {
          '@context': 'https://schema.org',
          '@type': ['CollectionPage', 'ItemList'],
          '@id': BASE_URL + '/destinations#page',
          name: 'Explore Jharkhand — Top Destinations',
          description: this.desc,
          numberOfItems: 24,
          itemListElement: [
            { '@type': 'ListItem', position: 1, item: { '@type': 'TouristDestination', name: 'Netarhat', url: BASE_URL + '/netarhat.html' } },
            { '@type': 'ListItem', position: 2, item: { '@type': 'TouristDestination', name: 'Deoghar' } },
            { '@type': 'ListItem', position: 3, item: { '@type': 'TouristDestination', name: 'Ranchi' } },
            { '@type': 'ListItem', position: 4, item: { '@type': 'TouristDestination', name: 'Betla' } },
            { '@type': 'ListItem', position: 5, item: { '@type': 'TouristDestination', name: 'Patratu' } }
          ]
        };
      }
    },
    hotels: {
      title: 'Verified Hotels & Stays in Jharkhand | ' + BRAND,
      desc: 'Book verified hotels, resorts, homestays and eco-lodges across Jharkhand. Netarhat Forest Retreat, Saranda Eco Resort, Deoghar hotels and more.',
      keywords: 'hotels in Jharkhand, Netarhat resorts, Ranchi hotels, Deoghar accommodation, Betla jungle lodge, Jamshedpur hotels, Jharkhand homestays',
      type: 'website',
      schema: function () {
        return {
          '@context': 'https://schema.org',
          '@type': ['CollectionPage', 'ItemList'],
          '@id': BASE_URL + '/hotels#page',
          name: 'Verified Hotels & Stays in Jharkhand',
          description: this.desc,
          mainEntity: { '@type': 'ItemList', itemListElement: [
            { '@type': 'ListItem', position: 1, item: { '@type': 'Hotel', name: 'Netarhat Forest Retreat', url: BASE_URL + '/hotel-netarhat.html' } }
          ]}
        };
      }
    },
    'cab-booking': {
      title: 'Book Cabs in Jharkhand — Ranchi, Deoghar, Netarhat | ' + BRAND,
      desc: 'Book local and outstation cabs across Jharkhand. Sedan, SUV, Tempo Traveller. Airport transfers, temple tours, wildlife safaris.',
      keywords: 'cab booking Jharkhand, taxi service Ranchi, cab to Deoghar, Netarhat taxi, Jamshedpur cab, Ranchi airport taxi, Jharkhand car rental',
      type: 'website',
      schema: function () {
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': BASE_URL + '/cab-booking#service',
          name: 'Cab Booking in Jharkhand',
          serviceType: 'Taxi Service',
          provider: { '@id': BASE_URL + '/#organization' },
          areaServed: DISTRICTS.map(function (d) { return { '@type': 'City', name: d }; }),
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Cab Types',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sedan', description: 'Up to 4 passengers' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SUV', description: 'Up to 7 passengers' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tempo Traveller', description: 'Up to 12 passengers' } }
            ]
          }
        };
      }
    },
    restaurants: {
      title: 'Best Restaurants in Jharkhand — Local Food Guide | ' + BRAND,
      desc: 'Discover top-rated restaurants, dhabas, and cafes across Jharkhand. Tribal cuisine, forest cafes, lakeview dining and more.',
      keywords: 'restaurants Jharkhand, Ranchi restaurants, Netarhat cafes, Jamshedpur dining, Jharkhand street food, tribal cuisine, dhabas',
      type: 'website',
      schema: function () {
        return {
          '@context': 'https://schema.org',
          '@type': ['CollectionPage', 'ItemList'],
          '@id': BASE_URL + '/restaurants#page',
          name: 'Best Restaurants in Jharkhand',
          description: this.desc,
          mainEntity: { '@type': 'FoodService', name: 'Jharkhand Dining Guide' }
        };
      }
    },
    packages: {
      title: 'Curated Jharkhand Travel Packages | ' + BRAND,
      desc: 'Handpicked Jharkhand tour packages — Netarhat weekend, Deoghar pilgrimage, Betla safari, Patratu day trip, Tribal culture tour.',
      keywords: 'Jharkhand tour packages, Netarhat weekend trip, Deoghar pilgrimage package, Betla wildlife safari, Patratu trip, Jharkhand travel deals',
      type: 'website',
      schema: function () {
        return {
          '@context': 'https://schema.org',
          '@type': ['CollectionPage', 'ItemList'],
          '@id': BASE_URL + '/packages#page',
          name: 'Curated Jharkhand Travel Packages',
          description: this.desc,
          mainEntity: { '@type': 'ItemList', itemListElement: [
            { '@type': 'Product', name: 'Netarhat Weekend Package', category: 'Travel Package' },
            { '@type': 'Product', name: 'Deoghar Pilgrimage Package', category: 'Travel Package' },
            { '@type': 'Product', name: 'Betla Wildlife Safari', category: 'Travel Package' }
          ]}
        };
      }
    },
    blog: {
      title: 'Jharkhand Travel Guides & Stories | ' + BRAND,
      desc: 'Travel guides, destination articles, and stories about Jharkhand — waterfalls, temples, forests, hills, culture, food, and travel tips.',
      keywords: 'Jharkhand travel guide, Netarhat blog, Deoghar temple guide, Ranchi waterfalls article, Jharkhand tribal culture, travel tips',
      type: 'website'
    },
    netarhat: {
      title: 'Netarhat — Queen of Chotanagpur | ' + BRAND,
      desc: 'Complete guide to Netarhat — sunrise at Magnolia Point, pine forests, Lower Ghaghri Falls, Netarhat Dam, and the best resorts and homestays.',
      keywords: 'Netarhat, Netarhat sunrise, Magnolia Point, Netarhat resorts, Netarhat homestay, Lower Ghaghri Falls, Netarhat Dam, Queen of Chotanagpur',
      type: 'website',
      schema: function () {
        return {
          '@context': 'https://schema.org',
          '@type': ['TouristDestination', 'Place'],
          '@id': BASE_URL + '/netarhat#destination',
          name: 'Netarhat',
          alternateName: 'Queen of Chotanagpur',
          description: 'Queen of Chotanagpur — a serene hill station in Latehar district, Jharkhand known for sunrise views, pine forests, and waterfalls.',
          url: BASE_URL + '/netarhat.html',
          image: BASE_URL + '/parasnath.jpeg',
          location: { '@type': 'Place', '@id': 'https://en.wikipedia.org/wiki/Netarhat', name: 'Netarhat', geo: { '@type': 'GeoCoordinates', latitude: COORDS.netarhat.lat, longitude: COORDS.netarhat.lng }, address: { '@type': 'PostalAddress', addressLocality: 'Netarhat', addressRegion: 'Jharkhand', addressCountry: 'IN' } },
          touristType: { '@type': 'Audience', name: 'Nature lovers, weekend travellers, photographers, honeymooners' },
          touristAttraction: [
            { '@type': 'TouristAttraction', name: 'Magnolia Point', description: 'Famous sunrise viewpoint in Netarhat' },
            { '@type': 'TouristAttraction', name: 'Lower Ghaghri Falls', description: 'Scenic waterfall near Netarhat' },
            { '@type': 'TouristAttraction', name: 'Netarhat Dam', description: 'Reservoir and picnic spot surrounded by forests' },
            { '@type': 'TouristAttraction', name: 'Pine Forests', description: 'Dense pine forest cover along Netarhat roads' }
          ],
          containsPlace: { '@type': 'City', name: 'Netarhat', sameAs: 'https://en.wikipedia.org/wiki/Netarhat' },
          geo: { '@type': 'GeoCoordinates', latitude: COORDS.netarhat.lat, longitude: COORDS.netarhat.lng }
        };
      }
    },
    'hotel-netarhat': {
      title: 'Netarhat Forest Retreat — Best Resort in Netarhat | ' + BRAND,
      desc: 'Book Netarhat Forest Retreat — premium cottages, pine forest views, in-house dining. The highest-rated resort in Netarhat.',
      keywords: 'Netarhat Forest Retreat, Netarhat resort booking, Netarhat cottage, stay in Netarhat, Netarhat accommodation',
      type: 'website',
      schema: function () {
        return {
          '@context': 'https://schema.org',
          '@type': ['Hotel', 'LodgingBusiness'],
          '@id': BASE_URL + '/hotel-netarhat#hotel',
          name: 'Netarhat Forest Retreat',
          description: 'Premium resort in Netarhat with deluxe cottages, pine forest views, and in-house dining.',
          url: BASE_URL + '/hotel-netarhat.html',
          image: BASE_URL + '/baidyanath-temple.jpg',
          location: { '@type': 'Place', geo: { '@type': 'GeoCoordinates', latitude: COORDS.netarhat.lat, longitude: COORDS.netarhat.lng }, address: { '@type': 'PostalAddress', addressLocality: 'Netarhat', addressRegion: 'Jharkhand', addressCountry: 'IN' } },
          priceRange: '₹2500 - ₹8000',
          aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.5', bestRating: '5', ratingCount: '23' },
          amenityFeature: [
            { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'In-house dining', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
            { '@type': 'LocationFeatureSpecification', name: 'Bonfire', value: true }
          ],
          containsPlace: { '@type': 'Accommodation', name: 'Deluxe Cottage', bed: { '@type': 'BedDetails', numberOfBeds: 1 } },
          checkinTime: '14:00',
          checkoutTime: '11:00',
          petsAllowed: false,
          telephone: PHONE
        };
      }
    },
    faq: {
      title: 'Help & FAQs — ' + BRAND,
      desc: 'Frequently asked questions about booking hotels, cabs, and packages in Jharkhand. Cancellation policy, payment options, travel tips.',
      keywords: 'Jharkhand travel FAQs, booking help, cancellation policy, payment options, Jharkhand travel tips',
      type: 'website',
      schema: function () {
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          '@id': BASE_URL + '/faq#faq',
          mainEntity: [
            { '@type': 'Question', name: 'How do I book a hotel in Netarhat?', acceptedAnswer: { '@type': 'Answer', text: 'You can browse hotels on our Netarhat page, select your dates, and submit an enquiry. Our team will confirm availability within 2 hours.' } },
            { '@type': 'Question', name: 'Can I cancel my booking?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, cancellations are accepted up to 48 hours before check-in for a full refund. Partial refunds apply for later cancellations.' } },
            { '@type': 'Question', name: 'How do I pay for my booking?', acceptedAnswer: { '@type': 'Answer', text: 'We accept UPI, credit/debit cards, and net banking. Payment links are sent via WhatsApp after enquiry confirmation.' } },
            { '@type': 'Question', name: 'Are the hotels verified?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, all listed properties are verified by our team for quality, pricing accuracy, and service standards.' } },
            { '@type': 'Question', name: 'Can I book a cab from Ranchi to Netarhat?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer sedan, SUV, and tempo traveller options for Ranchi to Netarhat. The drive takes approximately 4 hours.' } },
            { '@type': 'Question', name: 'What are the best places to visit in Jharkhand?', acceptedAnswer: { '@type': 'Answer', text: 'Top destinations include Netarhat (hill station), Deoghar (Baidyanath Temple), Ranchi (waterfalls), Betla National Park, Patratu Lake, Parasnath (Jain pilgrimage), and Rajrappa Temple.' } },
            { '@type': 'Question', name: 'Do you offer travel packages?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer curated packages for Netarhat weekends, Deoghar pilgrimages, Betla safaris, Patratu day trips, and tribal culture tours.' } }
          ],
          inLanguage: ['en', 'hi'],
          speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.faq-question', '.faq-answer'] }
        };
      }
    },
    contact: {
      title: 'Contact Us — ' + BRAND,
      desc: 'Get in touch with the Booking Jharkhand team. Call, WhatsApp, or email us for travel enquiries, partnership opportunities, or support.',
      keywords: 'contact Booking Jharkhand, Jharkhand tourism support, travel enquiry Jharkhand',
      type: 'website',
      schema: function () {
        return {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          '@id': BASE_URL + '/contact#page',
          name: 'Contact Booking Jharkhand',
          description: this.desc,
          mainEntity: { '@id': BASE_URL + '/#organization' }
        };
      }
    },
    about: {
      title: 'About Us — ' + BRAND,
      desc: 'Booking Jharkhand is a Govt. Recognized Tourism Partner connecting travellers with verified local experiences across Jharkhand since 2025.',
      keywords: 'about Booking Jharkhand, Jharkhand tourism marketplace, Chiti Technologies, travel platform India',
      type: 'website',
      schema: function () {
        return {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          '@id': BASE_URL + '/about#page',
          name: 'About Booking Jharkhand',
          description: this.desc,
          mainEntity: { '@id': BASE_URL + '/#organization' }
        };
      }
    },
    'ai-planner': {
      title: 'AI Travel Planner — Plan Your Jharkhand Trip | ' + BRAND,
      desc: 'Use our AI trip planner to create a personalized Jharkhand itinerary. Get recommendations for hotels, cabs, restaurants, and attractions.',
      keywords: 'AI trip planner Jharkhand, Jharkhand itinerary planner, personalized travel plan, AI travel assistant',
      type: 'website'
    },
    'vendor-onboarding': {
      title: 'Partner with Booking Jharkhand — Vendor Registration',
      desc: 'List your hotel, homestay, cab service, or restaurant on Booking Jharkhand. Join 600+ tourism partners across 24 districts.',
      keywords: 'Jharkhand tourism vendor registration, list property Jharkhand, hotel partner Jharkhand, cab operator partnership',
      type: 'website',
      schema: function () {
        return {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': BASE_URL + '/vendor-onboarding#page',
          name: 'Vendor Registration - Booking Jharkhand',
          description: this.desc,
          potentialAction: { '@type': 'RegisterAction', target: { '@type': 'EntryPoint', urlTemplate: BASE_URL + '/vendor-onboarding.html', actionApplication: { '@type': 'SoftwareApplication', name: 'Vendor Registration Form' } } }
        };
      }
    },
    admin: { title: 'Admin Dashboard — ' + BRAND, desc: 'Booking Jharkhand operations dashboard.', keywords: '', type: 'website', noindex: true },
    'cab-dashboard': { title: 'Cab Operator Dashboard — ' + BRAND, desc: 'Manage your cab fleet.', keywords: '', type: 'website', noindex: true },
    'hotel-dashboard': { title: 'Hotel Dashboard — ' + BRAND, desc: 'Manage your hotel listings.', keywords: '', type: 'website', noindex: true },
    'restaurant-portal': { title: 'Restaurant Partner Portal — ' + BRAND, desc: 'Manage your restaurant.', keywords: '', type: 'website', noindex: true }
  };

  function getPageKey() {
    var path = window.location.pathname.replace(/\/+$/, '') || '/';
    var name = path.split('/').pop().replace('.html', '') || 'index';
    return PAGES[name] ? name : 'index';
  }

  function injectSchema(data) {
    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data, null, 2);
    document.head.appendChild(script);
  }

  var key = getPageKey();
  var page = PAGES[key];

  injectSchema(orgSchema);

  if (key === 'index' || (PAGES.index && PAGES.index.schema)) {
    injectSchema(PAGES.index.schema());
  }

  if (page.schema) injectSchema(page.schema());

  injectSchema({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': BASE_URL + '/#breadcrumb',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL + '/' },
      { '@type': 'ListItem', position: 2, name: page.title.replace(BRAND, '').replace(' — ', '').replace(' | ' + BRAND, '').trim() || 'Home', item: BASE_URL + '/' + (key !== 'index' ? key + '.html' : '') }
    ]
  });

  if (['index', 'netarhat', 'destinations', 'hotel-netarhat'].includes(key)) {
    injectSchema({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': BASE_URL + '/#business',
      name: BRAND,
      description: page.desc,
      url: BASE_URL,
      telephone: PHONE,
      areaServed: 'Jharkhand',
      priceRange: '₹500 - ₹15000',
      image: BASE_URL + '/og-image.jpg',
      sameAs: orgSchema.sameAs,
      geo: key === 'netarhat' ? { '@type': 'GeoCoordinates', latitude: COORDS.netarhat.lat, longitude: COORDS.netarhat.lng } : undefined
    });
  }

  var sitelinksSearch = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': BASE_URL + '/#sitelinks',
    url: BASE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: BASE_URL + '/?q={search_term_string}' },
      'query-input': 'required name=search_term_string'
    }
  };

  injectSchema(sitelinksSearch);

  window.__SEO = { page: page, key: key };

})();
