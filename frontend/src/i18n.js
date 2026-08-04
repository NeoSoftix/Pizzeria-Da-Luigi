import { Check, Flame, Star, Truck } from 'lucide-react'

import hero1 from './assets/hero1.png'
import hero2 from './assets/hero2.png'

const awardGlob = import.meta.glob('./assets/award*.{png,jpg,jpeg,webp,PNG,JPG}', { eager: true, import: 'default' })
const pizzaGlob = import.meta.glob('./assets/pizza/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })
const foodGlob = import.meta.glob('./assets/food/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })
const placeGlob = import.meta.glob('./assets/ourplace/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })

function buildGalleryItems(glob) {
  return Object.entries(glob)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, src]) => src)
}

export const awardImages = Object.entries(awardGlob)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src)

export const galleryData = {
  pizza: buildGalleryItems(pizzaGlob),
  food: buildGalleryItems(foodGlob),
  place: buildGalleryItems(placeGlob),
}

export const ORDER_URL = 'https://order.pizzeriadaluigiregensburg.de/'
export const SITE_URL = 'https://www.pizzeriadaluigiregensburg.de/'
export const heroImages = [hero1, hero2]
export const whyIcons = [Flame, Check, Truck, Star]

export const translations = {
  de: {
    langLabel: 'DE',
    seo: {
      title: 'Pizzeria Da Luigi Regensburg – Original italienische Pizza & Pasta',
      description:
        'Handgemachte Pizza aus dem 480°-Holzofen, frische Pasta und italienische Klassiker in Regensburg. Landshutterstr 33, 93053 Regensburg. Jetzt online bestellen!',
    },
    nav: { home: 'Start', menu: 'Speisekarte', about: 'Über uns', gallery: 'Galerie', contact: 'Kontakt' },
    hero: {
      slides: [
        {
          eyebrow: 'PIZZA, PASSIONE, FAMIGLIA',
          title: 'Steinofen Pizza.',
          copy: 'Von Hand gezogener Teig, San-Marzano-Tomaten und ein bisschen Luigi-Magie.',
        },
        {
          eyebrow: 'ORDENTLICH SCHARF',
          title: 'Ein bisschen scharf. Sehr unvergesslich.',
          copy: 'Unsere Diavola bringt Feuer mit kalabrischem Chili, Fenchelsalami und knusprigen Rändern.',
        },
      ],
      sideText: 'BENVENUTI A TAVOLA',
    },
    about: {
      eyebrow: 'Ein Stück Heimat',
      heading1: 'Gutes Essen.',
      heading2: 'Gute Leute.',
      since: 'Seit',
      sinceYear: '1987',
      p1: 'Luigi brachte den Nudelholz seiner Großmutter, die Rezepte seines Vaters und eine sehr ernste Meinung zu Tomaten mit aus Napoli. Drei Jahrzehnte später formen wir noch immer jeden Teigling von Hand und jeder Tisch fühlt sich an wie Familie.',
      p2: 'Keine Abkürzungen. Nichts aus der Tiefkühltruhe. Einfach der alte Weg, mit Freude gemacht.',
    },
    gallery: {
      eyebrow: 'Erst mit den Augen essen',
      heading1: 'La bella',
      heading2: 'tavola.',
      copy1: 'Große Aromen, bunte Teller und jede Menge Servietten. Markiere deinen Tisch',
      handle: '@dalugui.pizza',
      tabs: { all: 'Alle', food: 'Essen', place: 'Unser Lokal', pizza: 'Pizza' },
    },
    why: {
      heading1: 'Warum Luigi?',
      heading2: 'Ganz einfach.',
      items: [
        { title: '480° Holzofen', copy: 'Schnelle, kräftige Hitze für die perfekte Kruste mit Leopardenmuster.' },
        { title: 'Marktfrisch', copy: 'Echte Zutaten, jeden Morgen ausgewählt von Menschen, die wir kennen.' },
        { title: 'Noch heiß', copy: 'Lokale Lieferung, die deine Pizza wie ein Meisterwerk behandelt.' },
        { title: 'Familienrezept', copy: 'Die Sauce ist von Nonna. Das Geheimnis? Verraten wir nicht.' },
      ],
    },
    awards: {
      eyebrow: 'AUSGEZEICHNETE QUALITÄT',
      heading1: 'UNSERE',
      heading2: 'AUSZEICHNUNGEN',
      copy: 'Wir sind stolz darauf, für unsere Qualität, unseren Service und unsere Leidenschaft ausgezeichnet zu werden.',
      items: [
        { year: '2024', title: 'BESTE PIZZERIA', subtitle: 'REGENSBURG', copy: 'Ausgezeichnet für hervorragende Qualität, authentischen Geschmack und exzellenten Service.' },
        { year: '2025', title: 'KUNDENLIEBLING', subtitle: 'REGENSBURG', copy: 'Von unseren Kunden gewählt – danke für Ihr Vertrauen und Ihre Unterstützung!' },
      ],
    },
    testimonials: {
      eyebrow: 'Die Leute reden',
      heading1: 'Grazie',
      heading2: 'mille.',
      items: [
        {
          quote: 'Ich habe eine köstliche Pizza und vegetarische Kartoffeln bei Pizzeria Da Luigi bestellt. Die Pizza war perfekt gebacken und hat hervorragend geschmeckt. Auch die vegetarischen Kartoffeln waren sehr gut. Der Service war freundlich und aufmerksam.',
          name: 'Kaderimsensin',
          role: 'Local Guide · 52 Bewertungen',
        },
        {
          quote: 'Ich bin seit über zwei Jahren Kunde, und es wird Zeit für eine Bewertung. Die Lieferung war bisher immer sehr schnell und zuverlässig! Ob Pizza oder Pasta – das Essen kommt immer heiß und lecker an.',
          name: 'Nikolas Lustig',
          role: 'Local Guide · 14 Bewertungen',
        },
        {
          quote: 'Sehr leckeres Essen und immer freundliche Lieferfahrer.',
          name: 'R J',
          role: 'Local Guide · 160 Bewertungen',
        },
        {
          quote: 'Tolles Essen, die besten Pizzen, Lieferung in 30 statt der angegebenen 60 Minuten. Immer wieder gerne! 👍',
          name: 'Christina Aulig',
          role: 'Local Guide · 20 Bewertungen',
        },
        {
          quote: 'Das Personal hier ist absolut liebenswürdig, und die Pizza ist wirklich lecker und sehr preiswert. Der Service ist unschlagbar!',
          name: 'Larissa Andresen',
          role: '11 Bewertungen',
        },
        {
          quote: 'Bestell hier schon seit Jahren immer wieder mal. Eine der besten Pizzen der Stadt und das sehr konstant. Immer wieder gerne, ich bleib euch treu 😊',
          name: 'Chris M.',
          role: '3 Bewertungen',
        },
      ],
    },
    contact: {
      eyebrow: 'Sag einfach ciao',
      heading1: 'Setz dich',
      heading2: 'zu uns.',
      addressLabel: 'Adresse',
      address1: 'Landshutterstr 33',
      address2: '93053 Regensburg',
      phoneLabel: 'Telefon',
      phone: '0941 56995899',
      emailLabel: 'E-Mail',
      email: 'pizzeriadaluigiregensburg@gmail.com',
      hoursLabel: 'Öffnungszeiten',
      hours1: 'Di–So · 11:30–23:00 Uhr',
      hours2: 'Montags geschlossen (auch Luigi ruht sich aus)',
      orderCta: 'Bestellung',
    },
    footer: {
      tagline: 'Mit Liebe, Feuer & jeder Menge Mehl gemacht.',
      about: 'Unsere Geschichte',
      contact: 'Kontakt',
      rights: 'Alle Rechte vorbehalten',
      impressum: 'Impressum',
      datenschutz: 'Datenschutzerklärung',
    },
    impressum: {
      title: 'Impressum',
      subtitle: 'Rechtliche Informationen',
      breadcrumbHome: 'Start',
      breadcrumbSelf: 'Impressum',
      section1Title: 'Angaben gemäß § 5 TMG',
      businessName: 'Pizzeria Da Luigi',
      registerNote: 'Umsatzsteuer-ID und Handelsregisternummer werden auf Anfrage ergänzt.',
      section2Title: 'Streitschlichtung',
      section2Copy:
        'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die unter folgendem Link erreichbar ist:',
      odrButton: 'ODR-PLATTFORM BESUCHEN',
      section2Copy2:
        'Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
      section3Title: 'Haftungshinweis zur Website',
      section3Copy1:
        'Alle Texte, Bilder und sonstigen auf dieser Website veröffentlichten Informationen unterliegen dem Urheberrecht des Betreibers, sofern keine Rechte Dritter bestehen.',
      section3Copy2:
        'Eine Vervielfältigung, Verbreitung oder öffentliche Wiedergabe ist nur mit ausdrücklicher Zustimmung des Betreibers gestattet.',
      section3Copy3:
        'Für Inhalte externer, verlinkter Seiten übernehmen wir keine Verantwortung, da diese nicht unserem Einflussbereich unterliegen. Zum Zeitpunkt der Verlinkung waren keine rechtswidrigen Inhalte erkennbar. Bei Bekanntwerden entsprechender Rechtsverletzungen werden betroffene Links umgehend entfernt.',
      commitmentTitle: 'Unser Versprechen',
      commitmentCopy:
        'Uns ist Transparenz und rechtliche Klarheit wichtig. Bei Fragen zu diesen Angaben kontaktieren Sie uns gerne jederzeit.',
      commitmentCta: 'Kontakt aufnehmen',
      ctaEyebrow: 'Noch Fragen?',
      ctaTitle: 'Wir helfen gerne weiter!',
    },
    datenschutz: {
      title: 'Datenschutzerklärung',
      subtitle: 'Ihr Datenschutz ist uns wichtig',
      breadcrumbHome: 'Start',
      breadcrumbSelf: 'Datenschutzerklärung',
      intro:
        'Der Schutz Ihrer personenbezogenen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der geltenden gesetzlichen Bestimmungen, insbesondere der Datenschutz-Grundverordnung (DSGVO). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.',
      section1Title: 'Verantwortliche Stelle',
      section1Copy:
        'Verantwortlich für die Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten im Sinne der DSGVO ist:',
      section2Title: 'Zugriffsdaten / Server-Logfiles',
      section2Copy:
        'Bei jedem Zugriff auf unsere Website werden durch den Internetbrowser automatisch Informationen an den Server übermittelt und in sogenannten Server-Logfiles gespeichert.',
      section2List: [
        'Name der abgerufenen Seite',
        'IP-Adresse',
        'Browsertyp und Browserversion',
        'Datum und Uhrzeit des Zugriffs',
        'Verwendetes Betriebssystem',
        'u.v.m.',
      ],
      section2Copy2:
        'Diese Daten dienen ausschließlich der Sicherstellung eines störungsfreien Betriebs der Website und der Verbesserung unseres Angebots.',
      section3Title: 'Kontaktformular',
      section3Copy:
        'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben (Name, E-Mail-Adresse, Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.',
      section3Copy2:
        'Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Sie können diese Einwilligung jederzeit widerrufen.',
      section4Title: 'Bestellungen & Reservierungen',
      section4Copy:
        'Bei Bestellungen oder Tischreservierungen verarbeiten wir personenbezogene Daten (z. B. Name, Telefonnummer, E-Mail-Adresse, Bestelldaten) ausschließlich zur Abwicklung Ihrer Anfrage.',
      section4Copy2:
        'Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO zur Vertragserfüllung. Eine Weitergabe an Dritte erfolgt nur, sofern dies zur Abwicklung erforderlich ist (z. B. Lieferdienste).',
      section5Title: 'Verwendung der E-Mail-Adresse für Werbung',
      section5Copy:
        'Sofern Sie ausdrücklich eingewilligt haben, verwenden wir Ihre E-Mail-Adresse für den Versand von Informationen, Angeboten oder Newslettern.',
      section5Copy2:
        'Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre Einwilligung jederzeit widerrufen, z. B. über den Abmeldelink im Newsletter oder durch direkte Kontaktaufnahme.',
      section6Title: 'Cookies',
      section6Copy:
        'Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die eine Analyse der Benutzung der Website ermöglichen.',
      section6Copy2:
        'Wir verwenden Cookies, um die Benutzerfreundlichkeit zu verbessern, Funktionen bereitzustellen und statistische Auswertungen vorzunehmen. Sie können Cookies jederzeit über die Einstellungen Ihres Browsers deaktivieren oder löschen.',
      section7Title: 'Ihre Rechte',
      section7Copy: 'Sie haben gemäß DSGVO folgende Rechte in Bezug auf Ihre personenbezogenen Daten:',
      section7List: [
        'Recht auf Auskunft',
        'Recht auf Berichtigung',
        'Recht auf Löschung',
        'Recht auf Einschränkung der Verarbeitung',
        'Recht auf Widerspruch',
        'Recht auf Datenübertragbarkeit',
      ],
      section7Copy2:
        'Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die oben genannte verantwortliche Stelle.',
      section8Title: 'Beschwerde Recht',
      section8Copy:
        'Sie haben gemäß Art. 77 DSGVO das Recht, sich bei einer Datenschutzbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten nicht rechtmäßig erfolgt.',
      section8Authority: 'Zuständige Aufsichtsbehörde:',
      section8AuthorityName:
        'Der Hessische Beauftragte für Datenschutz und Informationsfreiheit\nPostfach 3163, 65021 Wiesbaden',
      ctaEyebrow: 'Haben Sie Fragen zum Datenschutz?',
      ctaTitle: 'Wir sind für Sie da!',
      ctaCopy:
        'Kontaktieren Sie uns jederzeit – wir helfen Ihnen gerne weiter.',
      ctaButton: 'Kontakt aufnehmen',
    },
  },
  en: {
    langLabel: 'EN',
    seo: {
      title: 'Pizzeria Da Luigi Regensburg – Authentic Italian Pizza & Pasta',
      description:
        'Handmade pizza from the 480° wood-fired oven, fresh pasta, and Italian classics in Regensburg. Landshutterstr 33, 93053 Regensburg. Order online now!',
    },
    nav: { home: 'Home', menu: 'Menu', about: 'About', gallery: 'Gallery', contact: 'Contact' },
    hero: {
      slides: [
        {
          eyebrow: 'PIZZA, PASSIONE, FAMIGLIA',
          title: 'Stone Oven Pizza.',
          copy: 'Hand-stretched dough, San Marzano tomatoes, and a little bit of Luigi magic.',
        },
        {
          eyebrow: 'TURN UP THE HEAT',
          title: 'A little spicy. Very unforgettable.',
          copy: 'Our Diavola brings the fire with Calabrian chili, fennel salami, and charred edges.',
        },
      ],
      sideText: 'BENVENUTI A TAVOLA',
    },
    about: {
      eyebrow: 'A little taste of home',
      heading1: 'Good food.',
      heading2: 'Good people.',
      since: 'Since',
      sinceYear: '1987',
      p1: "Luigi brought his grandmother's rolling pin, his father's recipes, and a very serious opinion about tomatoes all the way from Napoli. Three decades later, we still make every dough ball by hand and every table feel like family.",
      p2: 'No shortcuts. No frozen anything. Just the old way, done with joy.',
    },
    gallery: {
      eyebrow: 'Eat with your eyes first',
      heading1: 'La bella',
      heading2: 'tavola.',
      copy1: 'Big flavors, bright plates, and plenty of napkins. Tag your table',
      handle: '@dalugui.pizza',
      tabs: { all: 'All', food: 'Food', place: 'Our Place', pizza: 'Pizza' },
    },
    why: {
      heading1: 'Why Luigi?',
      heading2: 'Easy.',
      items: [
        { title: '480° wood fire', copy: 'Fast, fierce heat for that perfect leopard-spotted crust.' },
        { title: 'Market fresh', copy: 'Real ingredients, chosen every morning from people we know.' },
        { title: 'Still hot', copy: 'Local delivery that treats your pizza like the masterpiece it is.' },
        { title: 'Family recipe', copy: "The sauce is Nonna's. The secret? We're not telling." },
      ],
    },
    awards: {
      eyebrow: 'OUTSTANDING QUALITY',
      heading1: 'OUR',
      heading2: 'AWARDS',
      copy: 'We are proud to be recognized for our quality, our service, and our passion for authentic Italian cuisine.',
      items: [
        { year: '2024', title: 'BEST PIZZERIA', subtitle: 'REGENSBURG', copy: 'Awarded for outstanding quality, authentic taste, and excellent service.' },
        { year: '2025', title: 'CUSTOMER FAVOURITE', subtitle: 'REGENSBURG', copy: 'Chosen by our customers – thank you for your trust and support!' },
      ],
    },
    testimonials: {
      eyebrow: 'People are talking',
      heading1: 'Grazie',
      heading2: 'mille.',
      items: [
        {
          quote: 'I ordered a delicious pizza and vegetarian potatoes from Pizzeria Da Luigi. The pizza was perfectly baked and tasted great. The vegetarian potatoes were also very good. The service was friendly and attentive.',
          name: 'Kaderimsensin',
          role: 'Local Guide · 52 reviews',
        },
        {
          quote: "I've been a customer for over two years now, and it's about time I left a review. So far, deliveries have always been very quick and reliable! The food, whether pizza or pasta, always arrives hot and delicious.",
          name: 'Nikolas Lustig',
          role: 'Local Guide · 14 reviews',
        },
        {
          quote: 'Very tasty food and always friendly delivery drivers.',
          name: 'R J',
          role: 'Local Guide · 160 reviews',
        },
        {
          quote: 'Amazing food, the best pizzas, delivery within 30 minutes instead of the stated 60. Always a pleasure! 👍',
          name: 'Christina Aulig',
          role: 'Local Guide · 20 reviews',
        },
        {
          quote: 'The staff here are absolutely lovely, and the pizza is really delicious and very reasonably priced. The service is unbeatable!',
          name: 'Larissa Andresen',
          role: '11 reviews',
        },
        {
          quote: "One of the best pizzas in the city, and very consistently so. I've been ordering here for years and keep coming back happily.",
          name: 'Chris M.',
          role: '3 reviews',
        },
      ],
    },
    contact: {
      eyebrow: 'Come say ciao',
      heading1: 'Pull up',
      heading2: 'a chair.',
      addressLabel: 'Address',
      address1: 'Landshutterstr 33',
      address2: '93053 Regensburg',
      phoneLabel: 'Phone',
      phone: '0941 56995899',
      emailLabel: 'Email',
      email: 'pizzeriadaluigiregensburg@gmail.com',
      hoursLabel: 'Opening hours',
      hours1: 'Tue-Sun · 11:30am-11pm',
      hours2: 'Closed Mondays (even Luigi rests)',
      orderCta: 'Order',
    },
    footer: {
      tagline: 'Made with love, fire & lots of flour.',
      about: 'Our story',
      contact: 'Contact',
      rights: 'All rights reserved',
      impressum: 'Legal Notice',
      datenschutz: 'Privacy Policy',
    },
    impressum: {
      title: 'Legal Notice',
      subtitle: 'Legal Information',
      breadcrumbHome: 'Home',
      breadcrumbSelf: 'Legal Notice',
      section1Title: 'Provider Identification (§ 5 TMG)',
      businessName: 'Pizzeria Da Luigi',
      registerNote: 'VAT ID and commercial register number will be added upon request.',
      section2Title: 'Alternative Dispute Resolution',
      section2Copy:
        'The European Commission provides a platform for online dispute resolution (ODR), which can be accessed at:',
      odrButton: 'VISIT ODR PLATFORM',
      section2Copy2: 'We are not obliged or willing to participate in dispute resolution proceedings before a consumer arbitration board.',
      section3Title: 'Legal Notice Regarding the Website',
      section3Copy1:
        'All texts, images, and other information published here are subject to the copyright of the provider, unless third-party copyrights exist.',
      section3Copy2:
        'Reproduction, distribution, or public display is only permitted with the express consent of the provider.',
      section3Copy3:
        'We assume no responsibility for the content of external linked pages, as this is not within our control. At the time of linking, no unlawful content was identifiable. Upon notification of a legal violation, the corresponding link will be removed immediately.',
      commitmentTitle: 'Our Commitment',
      commitmentCopy:
        'Transparency and legal clarity matter to us. If you have any questions regarding this information, feel free to contact us at any time.',
      commitmentCta: 'Contact us',
      ctaEyebrow: 'Have questions?',
      ctaTitle: "We're here to help!",
    },
    datenschutz: {
      title: 'Privacy Policy',
      subtitle: 'Your privacy matters to us',
      breadcrumbHome: 'Home',
      breadcrumbSelf: 'Privacy Policy',
      intro:
        'Protecting your personal data is of particular concern to us. We therefore process your data exclusively on the basis of applicable legal provisions, in particular the General Data Protection Regulation (GDPR). In this privacy policy, we inform you about the most important aspects of data processing within the scope of our website.',
      section1Title: 'Data Controller',
      section1Copy:
        'Responsible for the collection, processing, and use of your personal data within the meaning of the GDPR is:',
      section2Title: 'Access Data / Server Log Files',
      section2Copy:
        'Every time our website is accessed, information is automatically transmitted to the server by the internet browser and stored in so-called server log files.',
      section2List: [
        'Name of the retrieved page',
        'IP address',
        'Browser type and version',
        'Date and time of access',
        'Operating system used',
        'and more.',
      ],
      section2Copy2:
        'This data is used exclusively to ensure the smooth operation of the website and to improve our services.',
      section3Title: 'Contact Form',
      section3Copy:
        'If you send us inquiries via our contact form, your details (name, email address, message) will be stored for the purpose of processing the inquiry and in case of follow-up questions.',
      section3Copy2:
        'Processing is based on Art. 6(1)(a) GDPR (consent). You can withdraw this consent at any time.',
      section4Title: 'Orders & Reservations',
      section4Copy:
        'For orders or table reservations, we process personal data (e.g. name, phone number, email address, order details) exclusively to fulfil your request.',
      section4Copy2:
        'Processing is carried out pursuant to Art. 6(1)(b) GDPR for the performance of a contract. Data is only passed on to third parties where necessary for processing (e.g. delivery services).',
      section5Title: 'Use of Email Address for Marketing',
      section5Copy:
        'If you have expressly consented, we use your email address to send you information, offers, or newsletters.',
      section5Copy2:
        'The legal basis is Art. 6(1)(a) GDPR. You can withdraw your consent at any time, e.g. via the unsubscribe link in the newsletter or by contacting us directly.',
      section6Title: 'Cookies',
      section6Copy:
        'Our website uses cookies. Cookies are small text files stored on your device that enable analysis of website usage.',
      section6Copy2:
        'We use cookies to improve usability, provide functionality, and carry out statistical analyses. You can disable or delete cookies at any time via your browser settings.',
      section7Title: 'Your Rights',
      section7Copy: 'Under the GDPR, you have the following rights regarding your personal data:',
      section7List: [
        'Right of access',
        'Right to rectification',
        'Right to erasure',
        'Right to restriction of processing',
        'Right to object',
        'Right to data portability',
      ],
      section7Copy2:
        'To exercise your rights, please contact the data controller listed above.',
      section8Title: 'Right to Complain',
      section8Copy:
        'Pursuant to Art. 77 GDPR, you have the right to lodge a complaint with a supervisory authority if you believe that the processing of your personal data is not lawful.',
      section8Authority: 'Competent supervisory authority:',
      section8AuthorityName:
        'The Hessian Commissioner for Data Protection and Freedom of Information\nP.O. Box 3163, 65021 Wiesbaden',
      ctaEyebrow: 'Questions about data protection?',
      ctaTitle: "We're here for you!",
      ctaCopy:
        'Contact us anytime – we are happy to help.',
      ctaButton: 'Get in touch',
    },
  },
}
