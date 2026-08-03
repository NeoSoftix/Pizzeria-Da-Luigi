
import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Flame,
  Mail,
  MapPin,
  Menu as MenuIcon,
  Phone,
  Star,
  Truck,
  X,
} from 'lucide-react'

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

import logo from './assets/logo.png'
import hero1 from './assets/hero1.png'
import hero2 from './assets/hero2.png'
import aboutImg from './assets/ourplace/image.png'

// Award images - user will place award 1.png and award 2.png in assets folder
const awardGlob = import.meta.glob('./assets/award*.{png,jpg,jpeg,webp,PNG,JPG}', { eager: true, import: 'default' })
const pizzaGlob = import.meta.glob('./assets/pizza/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })
const foodGlob = import.meta.glob('./assets/food/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })
const placeGlob = import.meta.glob('./assets/ourplace/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })

function buildGalleryItems(glob) {
  return Object.entries(glob)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, src]) => src)
}

const awardImages = Object.entries(awardGlob)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src)

const galleryData = {
  pizza: buildGalleryItems(pizzaGlob),
  food: buildGalleryItems(foodGlob),
  place: buildGalleryItems(placeGlob),
}

const ORDER_URL = 'https://order.pizzeriadaluigiregensburg.de/'
const heroImages = [hero1, hero2]
const whyIcons = [Flame, Check, Truck, Star]

const translations = {
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
    },
  },
}

/* ─── Trophy SVG (fallback if no award images) ─── */
function TrophySVG() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 mx-auto drop-shadow-lg">
      {/* Laurel left */}
      <ellipse cx="22" cy="55" rx="10" ry="5" fill="#c9a227" opacity=".7" transform="rotate(-30 22 55)" />
      <ellipse cx="15" cy="45" rx="9" ry="5" fill="#c9a227" opacity=".6" transform="rotate(-50 15 45)" />
      <ellipse cx="14" cy="65" rx="9" ry="5" fill="#c9a227" opacity=".6" transform="rotate(-10 14 65)" />
      {/* Laurel right */}
      <ellipse cx="98" cy="55" rx="10" ry="5" fill="#c9a227" opacity=".7" transform="rotate(30 98 55)" />
      <ellipse cx="105" cy="45" rx="9" ry="5" fill="#c9a227" opacity=".6" transform="rotate(50 105 45)" />
      <ellipse cx="106" cy="65" rx="9" ry="5" fill="#c9a227" opacity=".6" transform="rotate(10 106 65)" />
      {/* Cup */}
      <path d="M40 20 h40 v30 a20 20 0 0 1-40 0 Z" fill="url(#tg)" />
      <rect x="52" y="70" width="16" height="14" fill="#c9a227" />
      <rect x="42" y="84" width="36" height="6" rx="3" fill="#b8860b" />
      {/* Handles */}
      <path d="M40 28 Q24 28 24 42 Q24 56 40 56" stroke="#c9a227" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M80 28 Q96 28 96 42 Q96 56 80 56" stroke="#c9a227" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Star */}
      <polygon points="60,25 63,34 72,34 65,40 68,49 60,43 52,49 55,40 48,34 57,34" fill="#fff8e9" opacity=".9" />
      <defs>
        <linearGradient id="tg" x1="40" y1="20" x2="80" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f6c453" />
          <stop offset="100%" stopColor="#c9a227" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function LanguageSwitch({ lang, setLang }) {
  return (
    <div className="flex items-center rounded-full border border-white/30 p-1 text-[11px] font-bold uppercase tracking-widest">
      {['de', 'en'].map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`rounded-full px-3 py-1.5 transition-colors ${
            lang === code ? 'bg-[#f6c453] text-[#173b28]' : 'text-white/70 hover:text-[#f6c453]'
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

/* ─── Testimonial Card ─── */
function TestiCard({ item }) {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-md p-6 h-full border border-[#e8dfc8]">
      <div className="flex gap-1 text-[#d73532] mb-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} size={14} fill="currentColor" />
        ))}
      </div>
      <p className="text-[#36543b] leading-relaxed text-sm flex-1">"{item.quote}"</p>
      <footer className="mt-5 pt-4 border-t border-[#d8dfce]">
        <strong className="block text-sm text-[#173b28]">{item.name}</strong>
        <span className="text-xs uppercase tracking-widest text-[#879485]">{item.role}</span>
      </footer>
    </div>
  )
}

function App() {
  const [lang, setLangState] = useState(() => localStorage.getItem('luigi-lang') || 'de')
  const [slide, setSlide] = useState(0)
  const [mobileNav, setMobileNav] = useState(false)
  const [galleryTab, setGalleryTab] = useState('all')
  // Testimonials: page index (each page = 3 cards on desktop, 1 on mobile)
  const [testiPage, setTestiPage] = useState(0)
  const [testiPerPage, setTestiPerPage] = useState(3)
  const testiRef = useRef(null)

  const setLang = (code) => {
    setLangState(code)
    localStorage.setItem('luigi-lang', code)
  }

  // Detect how many testimonials to show per page based on screen size
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setTestiPerPage(1)
      else if (window.innerWidth < 1024) setTestiPerPage(2)
      else setTestiPerPage(3)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((s) => (s + 1) % heroImages.length), 5200)
    return () => window.clearInterval(timer)
  }, [])

  // Auto-advance testimonials
  useEffect(() => {
    const t = translations[lang]
    const totalPages = Math.ceil(t.testimonials.items.length / testiPerPage)
    const timer = window.setInterval(() => setTestiPage((p) => (p + 1) % totalPages), 6000)
    return () => window.clearInterval(timer)
  }, [lang, testiPerPage])

  useEffect(() => {
    const seo = translations[lang].seo
    document.documentElement.lang = lang
    document.title = seo.title
    const setMeta = (selector, content) => {
      const el = document.querySelector(selector)
      if (el) el.setAttribute('content', content)
    }
    setMeta('meta[name="description"]', seo.description)
    setMeta('meta[property="og:title"]', seo.title)
    setMeta('meta[property="og:description"]', seo.description)
    setMeta('meta[property="og:locale"]', lang === 'de' ? 'de_DE' : 'en_US')
    setMeta('meta[property="og:locale:alternate"]', lang === 'de' ? 'en_US' : 'de_DE')
    setMeta('meta[name="twitter:title"]', seo.title)
    setMeta('meta[name="twitter:description"]', seo.description)
  }, [lang])

  const t = translations[lang]
  const activeSlide = t.hero.slides[slide]

  const galleryItems =
    galleryTab === 'all'
      ? [
          ...galleryData.food.map((src) => ({ src, category: 'food' })),
          ...galleryData.place.map((src) => ({ src, category: 'place' })),
          ...galleryData.pizza.map((src) => ({ src, category: 'pizza' })),
        ]
      : galleryData[galleryTab].map((src) => ({ src, category: galleryTab }))
  const categoryCounters = {}

  const navItems = [
    { key: 'home', href: '#home', label: t.nav.home },
    { key: 'menu', href: ORDER_URL, label: t.nav.menu, external: true },
    { key: 'about', href: '#about', label: t.nav.about },
    { key: 'gallery', href: '#gallery', label: t.nav.gallery },
    { key: 'contact', href: '#contact', label: t.nav.contact },
  ]

  // Testimonials pagination
  const allTestis = t.testimonials.items
  const totalTestiPages = Math.ceil(allTestis.length / testiPerPage)
  const visibleTestis = allTestis.slice(testiPage * testiPerPage, testiPage * testiPerPage + testiPerPage)

  const prevTesti = () => setTestiPage((p) => (p + totalTestiPages - 1) % totalTestiPages)
  const nextTesti = () => setTestiPage((p) => (p + 1) % totalTestiPages)

  return (
    <div className="min-h-[100dvh] overflow-x-hidden bg-[#fbf5e8] text-[#193b27]" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ─── HEADER ─── */}
      <header className="fixed z-50 w-full border-b border-white/20 bg-[#173b28]/95 text-[#fff8e9] backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="Pizzeria Da Luigi" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-[#f6c453]" />
            <span className="font-oswald text-lg sm:text-xl font-bold uppercase tracking-tight leading-[.85]">
              Pizzeria
              <br />
              <span className="text-[#f6c453]">Da Luigi</span>
            </span>
          </a>

          <nav className="hidden items-center gap-5 text-[11px] font-bold uppercase tracking-[.15em] xl:flex">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                className="transition-colors hover:text-[#f6c453] whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <div className="hidden sm:block">
              <LanguageSwitch lang={lang} setLang={setLang} />
            </div>
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-[#d73532] px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white shadow-[3px_3px_0_#f6c453] transition-transform hover:-translate-y-0.5 sm:block"
            >
              {t.contact.orderCta}
            </a>
            <button aria-label="Open menu" onClick={() => setMobileNav(!mobileNav)} className="xl:hidden p-1 text-white">
              {mobileNav ? <X size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>

        {mobileNav && (
          <nav className="flex flex-col gap-4 bg-[#173b28] px-6 pb-6 pt-2 text-sm font-bold uppercase tracking-widest xl:hidden">
            {navItems.map((item) => (
              <a
                key={item.key}
                onClick={() => setMobileNav(false)}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                className="border-b border-white/10 pb-3 text-[#fff8e9] hover:text-[#f6c453] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-1">
              <LanguageSwitch lang={lang} setLang={setLang} />
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#d73532] px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white"
              >
                {t.contact.orderCta}
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="home">

        {/* ─── HERO ─── */}
        <section className="relative flex items-center overflow-hidden bg-[#173b28] pb-14 pt-[96px] text-white min-h-[520px] sm:min-h-[600px] lg:pb-20 lg:pt-[110px]">
          {heroImages.map((image, i) => (
            <div key={image} className={`absolute inset-0 transition-opacity duration-700 ${i === slide ? 'opacity-100' : 'opacity-0'}`}>
              <img
                src={image}
                alt=""
                className={`h-full w-full object-cover opacity-75 ${i === 0 ? 'object-top' : 'object-center'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#102d1d]/90 via-[#173b28]/40 to-transparent" />
            </div>
          ))}
          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl">
              <p className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[.28em] text-[#f6c453]">
                <span className="h-px w-8 bg-[#f6c453]" />
                {activeSlide.eyebrow}
              </p>
              <h1 className="font-oswald text-4xl font-bold uppercase leading-[.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {activeSlide.title}
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-[#fff8e9]/85 sm:text-lg">{activeSlide.copy}</p>
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#d73532] px-6 py-3.5 text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0_#f6c453] transition-transform hover:-translate-y-1 sm:px-8 sm:py-4"
              >
                {t.contact.orderCta}
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3 sm:mt-14">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setSlide(i)}
                  className={`h-2 transition-all rounded-full ${i === slide ? 'w-12 bg-[#f6c453]' : 'w-6 bg-white/50'}`}
                />
              ))}
              <div className="ml-auto flex items-center gap-2">
                <button
                  onClick={() => setSlide((slide + heroImages.length - 1) % heroImages.length)}
                  className="rounded-full border border-white/40 p-2.5 hover:bg-white/10"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => setSlide((slide + 1) % heroImages.length)}
                  className="rounded-full border border-white/40 p-2.5 hover:bg-white/10"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-[-28px] top-1/3 hidden rotate-90 text-[10px] font-bold tracking-[.5em] text-white/50 xl:block">
            {t.hero.sideText}
          </div>
        </section>

        {/* ─── ABOUT ─── */}
        <section id="about" className="bg-[#fbf5e8] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
            <div className="relative">
              <img
                src={aboutImg}
                alt="Chef at Da Luigi"
                className="h-[340px] w-full rounded-sm object-cover shadow-[12px_12px_0_#d73532] sm:h-[420px] lg:h-[520px]"
              />
              <div className="absolute bottom-5 left-5 bg-[#f6c453] px-4 py-3 font-oswald text-xl font-bold uppercase text-[#173b28] sm:text-2xl">
                <span className="block text-xs tracking-widest">{t.about.since}</span> {t.about.sinceYear}
              </div>
            </div>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-[#d73532]">{t.about.eyebrow}</p>
              <h2 className="font-oswald text-3xl font-bold uppercase leading-[.95] text-[#173b28] sm:text-4xl lg:text-5xl">
                {t.about.heading1}
                <br />
                <span className="text-[#d73532]">{t.about.heading2}</span>
              </h2>
              <p className="mt-7 text-base leading-relaxed text-[#476252] sm:text-lg">{t.about.p1}</p>
              <p className="mt-4 text-base leading-relaxed text-[#476252] sm:text-lg">{t.about.p2}</p>
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#d73532] px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-[4px_4px_0_#f6c453] transition-transform hover:-translate-y-1"
              >
                {t.contact.orderCta} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ─── AWARDS SECTION ─── */}
        <section id="awards" className="relative overflow-hidden bg-[#fdf8ee] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
          {/* Decorative background circles */}
          <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#f6c453]/10" />
          <div className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#d73532]/10" />

          <div className="relative mx-auto max-w-5xl">
            {/* Section header */}
            <div className="mb-12 text-center">
              <p className="mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.3em] text-[#d73532]">
                <span className="h-px w-8 bg-[#d73532]" />
                {t.awards.eyebrow}
                <span className="h-px w-8 bg-[#d73532]" />
              </p>
              <h2 className="font-oswald text-4xl font-bold uppercase leading-tight text-[#173b28] sm:text-5xl lg:text-6xl">
                {t.awards.heading1}{' '}
                <span className="text-[#d73532]">{t.awards.heading2}</span>
              </h2>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="h-px w-12 bg-[#c9a227]" />
                <Star size={16} fill="#c9a227" className="text-[#c9a227]" />
                <span className="h-px w-12 bg-[#c9a227]" />
              </div>
            </div>

            {/* Award images only — no text below */}
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-10">
              {awardImages.length > 0
                ? awardImages.map((src, i) => (
                    <div
                      key={i}
                      className="group flex items-center justify-center rounded-2xl border border-[#e8dfc8] bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10"
                    >
                      <img
                        src={src}
                        alt={`Award ${i + 1}`}
                        className="w-full max-w-xs object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105 sm:max-w-sm"
                      />
                    </div>
                  ))
                : t.awards.items.map((award, i) => (
                    <div
                      key={i}
                      className="group flex items-center justify-center rounded-2xl border border-[#e8dfc8] bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                      <TrophySVG />
                    </div>
                  ))
              }
            </div>
          </div>
        </section>

        {/* ─── GALLERY ─── */}
        <section id="gallery" className="bg-[#d73532] px-4 py-16 text-[#fff8e9] sm:px-6 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[.25em] text-[#f6c453]">{t.gallery.eyebrow}</p>
                <h2 className="font-oswald text-3xl font-bold uppercase leading-none sm:text-4xl lg:text-6xl">
                  {t.gallery.heading1}
                  <br />
                  {t.gallery.heading2}
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-white/75">
                {t.gallery.copy1} <b className="text-[#f6c453]">{t.gallery.handle}</b>
              </p>
            </div>

            <div className="mb-7 flex flex-wrap gap-2">
              {['all', 'food', 'place', 'pizza'].map((key) => (
                <button
                  key={key}
                  onClick={() => setGalleryTab(key)}
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                    galleryTab === key
                      ? 'bg-[#f6c453] text-[#173b28]'
                      : 'border border-white/40 text-white/85 hover:border-[#f6c453] hover:text-[#f6c453]'
                  }`}
                >
                  {t.gallery.tabs[key]}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 sm:gap-3">
              {galleryItems.map(({ src, category }) => {
                categoryCounters[category] = (categoryCounters[category] || 0) + 1
                const label = `${t.gallery.tabs[category]} ${categoryCounters[category]}`
                return (
                  <div key={src} className="group relative aspect-square overflow-hidden">
                    <img src={src} alt={label} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                )
              })}
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#f6c453] px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#173b28] shadow-[4px_4px_0_#173b28] transition-transform hover:-translate-y-1"
              >
                {t.contact.orderCta} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ─── WHY LUIGI ─── */}
        <section className="bg-[#f6c453] px-4 py-14 sm:px-6 lg:px-10 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <p className="mb-8 text-center font-oswald text-2xl font-bold uppercase text-[#173b28] sm:text-3xl lg:text-4xl">
              {t.why.heading1} <span className="text-[#d73532]">{t.why.heading2}</span>
            </p>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {t.why.items.map((item, i) => {
                const Icon = whyIcons[i]
                return (
                  <div key={item.title} className="border-t-2 border-[#173b28] pt-5">
                    <Icon className="mb-4 text-[#d73532]" size={28} />
                    <h3 className="font-oswald text-xl font-bold uppercase sm:text-2xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#36543b]">{item.copy}</p>
                  </div>
                )
              })}
            </div>
            <div className="mt-10 flex justify-center">
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#d73532] px-7 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[4px_4px_0_#173b28] transition-transform hover:-translate-y-1"
              >
                {t.contact.orderCta} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>



        {/* ─── TESTIMONIALS ─── */}
        <section className="bg-[#fbf5e8] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            {/* Header */}
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end mb-10">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[.25em] text-[#d73532]">{t.testimonials.eyebrow}</p>
                <h2 className="font-oswald text-3xl font-bold uppercase leading-none text-[#173b28] sm:text-4xl lg:text-6xl">
                  {t.testimonials.heading1}
                  <br />
                  <span className="text-[#d73532]">{t.testimonials.heading2}</span>
                </h2>
              </div>
              <div className="flex gap-1 text-[#d73532]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
            </div>

            {/* Cards grid */}
            <div ref={testiRef} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleTestis.map((item) => (
                <TestiCard key={item.name} item={item} />
              ))}
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                aria-label="Previous reviews"
                onClick={prevTesti}
                className="rounded-full border border-[#173b28]/20 p-3 text-[#173b28] hover:bg-[#173b28]/5 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: totalTestiPages }).map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Review page ${i + 1}`}
                    onClick={() => setTestiPage(i)}
                    className={`h-2 rounded-full transition-all ${i === testiPage ? 'w-8 bg-[#d73532]' : 'w-2 bg-[#173b28]/20'}`}
                  />
                ))}
              </div>
              <button
                aria-label="Next reviews"
                onClick={nextTesti}
                className="rounded-full border border-[#173b28]/20 p-3 text-[#173b28] hover:bg-[#173b28]/5 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" className="bg-[#d73532] px-4 py-16 text-[#fff8e9] sm:px-6 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-[#f6c453]">{t.contact.eyebrow}</p>
                <h2 className="font-oswald text-3xl font-bold uppercase leading-[.95] sm:text-4xl lg:text-6xl">
                  {t.contact.heading1}
                  <br />
                  {t.contact.heading2}
                </h2>
              </div>
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer"
                className="self-start sm:self-auto inline-flex items-center gap-3 rounded-full bg-[#f6c453] px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-[#173b28] shadow-[4px_4px_0_#173b28] transition-transform hover:-translate-y-1"
              >
                {t.contact.orderCta} <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[.8fr_1.2fr]">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <a
                  href="https://maps.google.com/?q=Landshutterstr+33,+93053+Regensburg"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 bg-white/10 p-5 transition-colors hover:bg-white/15"
                >
                  <MapPin className="mt-1 shrink-0 text-[#f6c453]" size={20} />
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#f6c453]">{t.contact.addressLabel}</p>
                    <p className="mt-2 text-base sm:text-lg">
                      {t.contact.address1}
                      <br />
                      {t.contact.address2}
                    </p>
                  </div>
                </a>
                <a href="tel:+4994156995899" className="flex items-start gap-4 bg-white/10 p-5 transition-colors hover:bg-white/15">
                  <Phone className="mt-1 shrink-0 text-[#f6c453]" size={20} />
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#f6c453]">{t.contact.phoneLabel}</p>
                    <p className="mt-2 text-base sm:text-lg">{t.contact.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${t.contact.email}`} className="flex items-start gap-4 bg-white/10 p-5 transition-colors hover:bg-white/15">
                  <Mail className="mt-1 shrink-0 text-[#f6c453]" size={20} />
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#f6c453]">{t.contact.emailLabel}</p>
                    <p className="mt-2 break-all text-base sm:text-lg">{t.contact.email}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 bg-white/10 p-5">
                  <Clock3 className="mt-1 shrink-0 text-[#f6c453]" size={20} />
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#f6c453]">{t.contact.hoursLabel}</p>
                    <p className="mt-2 text-base sm:text-lg">
                      {t.contact.hours1}
                      <br />
                      {t.contact.hours2}
                    </p>
                  </div>
                </div>
              </div>
              <div className="min-h-[280px] w-full min-w-0 overflow-hidden border border-white/30 sm:min-h-[360px] lg:min-h-full">
                <iframe
                  title="Pizzeria Da Luigi location"
                  className="h-full w-full"
                  style={{ minHeight: 280, width: '100%' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Landshutterstr%2033%2C%2093053%20Regensburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#173b28] px-4 py-12 text-[#fff8e9] sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:flex-wrap sm:items-end">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <img src={logo} alt="Pizzeria Da Luigi" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-oswald text-xl font-bold uppercase leading-[.85]">
                Pizzeria
                <br />
                <span className="text-[#f6c453]">Da Luigi</span>
              </span>
            </a>
            <p className="mt-4 text-xs text-[#b9cbb9]">{t.footer.tagline}</p>
          </div>

          <div className="text-xs text-[#b9cbb9]">
            <a href="tel:+4994156995899" className="block hover:text-[#f6c453] transition-colors">{t.contact.phone}</a>
            <a href={`mailto:${t.contact.email}`} className="mt-2 block break-all hover:text-[#f6c453] transition-colors">{t.contact.email}</a>
            <a
              href="https://maps.google.com/?q=Landshutterstr+33,+93053+Regensburg"
              target="_blank"
              rel="noreferrer"
              className="mt-2 block hover:text-[#f6c453] transition-colors"
            >
              {t.contact.address1}, {t.contact.address2}
            </a>
          </div>

          <div className="flex gap-5 text-xs font-bold uppercase tracking-widest">
            <a href="#about" className="hover:text-[#f6c453] transition-colors">{t.footer.about}</a>
            <a href="#gallery" className="hover:text-[#f6c453] transition-colors">{t.nav.gallery}</a>
            <a href="#contact" className="hover:text-[#f6c453] transition-colors">{t.footer.contact}</a>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <LanguageSwitch lang={lang} setLang={setLang} />
            <a
              aria-label="Facebook"
              href="https://www.facebook.com/pizzeriadaluigiregensburg/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/30 p-3 hover:border-[#f6c453] transition-colors"
            >
              <FacebookIcon width={16} height={16} />
            </a>
            <a aria-label="Email" href={`mailto:${t.contact.email}`} className="rounded-full border border-white/30 p-3 hover:border-[#f6c453] transition-colors">
              <Mail size={16} />
            </a>
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#d73532] px-5 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-[3px_3px_0_#f6c453] transition-transform hover:-translate-y-0.5"
            >
              {t.contact.orderCta}
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/15 pt-5 text-[10px] uppercase tracking-widest text-[#8ea18e]">
          © 2026 Developed by{' '}
          <a
            href="https://www.neosoftix.com/"
            target="_blank"
            rel="noreferrer"
            className="text-[#f6c453] hover:text-white transition-colors"
          >
            NeoSoftix.com
          </a>
          {' '}· All rights reserved
        </div>
      </footer>
    </div>
  )
}

export default App
