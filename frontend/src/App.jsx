import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Check,
  Clock3,
  Flame,
  Mail,
  MapPin,
  Menu as MenuIcon,
  Phone,
  Star,
  Truck,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

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

const pizzaGlob = import.meta.glob('./assets/pizza/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })
const foodGlob = import.meta.glob('./assets/food/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })
const placeGlob = import.meta.glob('./assets/ourplace/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })

function buildGalleryItems(glob) {
  return Object.entries(glob)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, src]) => src)
}

const galleryData = {
  pizza: buildGalleryItems(pizzaGlob),
  food: buildGalleryItems(foodGlob),
  place: buildGalleryItems(placeGlob),
}

const GALLERY_PAGE_SIZE = 6
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
    nav: { home: 'Start', menu: 'Speisekarte', order: 'Bestellung', about: 'Über uns', gallery: 'Galerie', contact: 'Kontakt' },
    hero: {
      slides: [
        {
          eyebrow: 'PIZZA, PASSIONE, FAMIGLIA',
          title: 'Neapel auf dem Teller.',
          copy: 'Von Hand gezogener Teig, San-Marzano-Tomaten und ein bisschen Luigi-Magie.',
          cta: 'Jetzt bestellen',
        },
        {
          eyebrow: 'ORDENTLICH SCHARF',
          title: 'Ein bisschen scharf. Sehr unvergesslich.',
          copy: 'Unsere Diavola bringt Feuer mit kalabrischem Chili, Fenchelsalami und knusprigen Rändern.',
          cta: 'Zur Galerie',
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
      cta: 'Unsere Geschichte',
    },
    gallery: {
      eyebrow: 'Erst mit den Augen essen',
      heading1: 'La bella',
      heading2: 'tavola.',
      copy1: 'Große Aromen, bunte Teller und jede Menge Servietten. Markiere deinen Tisch',
      handle: '@dalugui.pizza',
      tabs: { all: 'Alle', food: 'Essen', place: 'Unser Lokal', pizza: 'Pizza' },
      loadMore: 'Mehr laden',
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
    testimonials: {
      eyebrow: 'Die Leute reden',
      heading1: 'Grazie',
      heading2: 'mille.',
      items: [
        {
          quote: 'Die Kruste hat genau das richtige Knuspern und die Sauce schmeckt wie Sommer in Neapel. Wir planen schon unseren nächsten Besuch.',
          name: 'Maya R.',
          role: 'Stammgast samstags',
        },
        {
          quote: 'Wir kamen zu einem Geburtstag und Luigi hat Tiramisu mit einer Kerze geschickt. Das ist unser neuer Familienort.',
          name: 'Tom B.',
          role: 'Geburtstagstisch 7',
        },
        {
          quote: 'Die beste Pizza außerhalb Italiens. Schnell, warm, großzügig und jedes Stück wert.',
          name: 'Jess C.',
          role: 'Lieferservice-Fan',
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
      email: 'ciao@dalugui.pizza',
      hoursLabel: 'Öffnungszeiten',
      hours1: 'Di–So · 11:30–23:00 Uhr',
      hours2: 'Montags geschlossen (auch Luigi ruht sich aus)',
      orderCta: 'Jetzt bestellen',
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
    nav: { home: 'Home', menu: 'Menu', order: 'Order', about: 'About', gallery: 'Gallery', contact: 'Contact' },
    hero: {
      slides: [
        {
          eyebrow: 'PIZZA, PASSIONE, FAMIGLIA',
          title: 'Naples on a plate.',
          copy: 'Hand-stretched dough, San Marzano tomatoes, and a little bit of Luigi magic.',
          cta: 'Order a slice',
        },
        {
          eyebrow: 'TURN UP THE HEAT',
          title: 'A little spicy. Very unforgettable.',
          copy: 'Our Diavola brings the fire with Calabrian chili, fennel salami, and charred edges.',
          cta: 'See the gallery',
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
      cta: 'Our story',
    },
    gallery: {
      eyebrow: 'Eat with your eyes first',
      heading1: 'La bella',
      heading2: 'tavola.',
      copy1: 'Big flavors, bright plates, and plenty of napkins. Tag your table',
      handle: '@dalugui.pizza',
      tabs: { all: 'All', food: 'Food', place: 'Our Place', pizza: 'Pizza' },
      loadMore: 'Load more',
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
    testimonials: {
      eyebrow: 'People are talking',
      heading1: 'Grazie',
      heading2: 'mille.',
      items: [
        {
          quote: "The crust has that perfect crackle and the sauce tastes like summer in Naples. We're already planning our next visit.",
          name: 'Maya R.',
          role: 'Saturday regular',
        },
        {
          quote: 'We came for a birthday and Luigi sent out tiramisu with a candle. This is our new family place.',
          name: 'Tom B.',
          role: 'Birthday table 7',
        },
        {
          quote: "Best pizza I've had outside Italy. Fast, warm, generous, and absolutely worth the extra slice.",
          name: 'Jess C.',
          role: 'Delivery fan',
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
      email: 'ciao@dalugui.pizza',
      hoursLabel: 'Opening hours',
      hours1: 'Tue-Sun · 11:30am-11pm',
      hours2: 'Closed Mondays (even Luigi rests)',
      orderCta: 'Order now',
    },
    footer: {
      tagline: 'Made with love, fire & lots of flour.',
      about: 'Our story',
      contact: 'Contact',
      rights: 'All rights reserved',
    },
  },
}

function LanguageSwitch({ lang, setLang, compact }) {
  return (
    <div className={`flex items-center rounded-full border border-white/30 p-1 text-[11px] font-bold uppercase tracking-widest ${compact ? '' : ''}`}>
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

function App() {
  const [lang, setLangState] = useState(() => localStorage.getItem('luigi-lang') || 'de')
  const [slide, setSlide] = useState(0)
  const [mobileNav, setMobileNav] = useState(false)
  const [galleryTab, setGalleryTab] = useState('all')
  const [galleryVisible, setGalleryVisible] = useState(GALLERY_PAGE_SIZE)

  const setLang = (code) => {
    setLangState(code)
    localStorage.setItem('luigi-lang', code)
  }

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((s) => (s + 1) % heroImages.length), 5200)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    setGalleryVisible(GALLERY_PAGE_SIZE)
  }, [galleryTab])

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
  const visibleGalleryItems = galleryItems.slice(0, galleryVisible)
  const hasMoreGallery = galleryItems.length > galleryVisible
  const categoryCounters = {}

  const navItems = [
    { key: 'home', href: '#home', label: t.nav.home },
    { key: 'menu', href: ORDER_URL, label: t.nav.menu, external: true },
    { key: 'about', href: '#about', label: t.nav.about },
    { key: 'gallery', href: '#gallery', label: t.nav.gallery },
    { key: 'contact', href: '#contact', label: t.nav.contact },
  ]

  return (
    <div className="min-h-[100dvh] overflow-x-hidden bg-[#fbf5e8] text-[#193b27]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <header className="fixed z-50 w-full border-b border-white/20 bg-[#173b28]/95 text-[#fff8e9] backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-5 lg:px-10">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Pizzeria Da Luigi" className="h-12 w-12 rounded-full object-cover ring-2 ring-[#f6c453]" />
            <span className="font-oswald text-xl font-bold uppercase tracking-tight leading-[.85]">
              Pizzeria
              <br />
              <span className="text-[#f6c453]">Da Luigi</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-[11px] font-bold uppercase tracking-[.15em] xl:flex">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                className="transition-colors hover:text-[#f6c453]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3 lg:ml-0">
            <div className="hidden sm:block">
              <LanguageSwitch lang={lang} setLang={setLang} />
            </div>
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-[#d73532] px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-white shadow-[4px_4px_0_#f6c453] transition-transform hover:-translate-y-0.5 sm:block"
            >
              {t.nav.order}
            </a>
            <button aria-label="Open menu" onClick={() => setMobileNav(!mobileNav)} className="xl:hidden">
              {mobileNav ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {mobileNav && (
          <nav className="flex flex-col gap-5 bg-[#173b28] px-6 pb-6 text-sm font-bold uppercase tracking-widest xl:hidden">
            {navItems.map((item) => (
              <a
                key={item.key}
                onClick={() => setMobileNav(false)}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-1 sm:hidden">
              <LanguageSwitch lang={lang} setLang={setLang} />
            </div>
          </nav>
        )}
      </header>

      <main id="home">
        <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-[#173b28] pt-[76px] text-white">
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
          <div className="relative mx-auto w-full max-w-7xl px-5 py-10 lg:px-10 lg:py-14">
            <div className="max-w-3xl">
              <p className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[.28em] text-[#f6c453] sm:mb-5">
                <span className="h-px w-10 bg-[#f6c453]" />
                {activeSlide.eyebrow}
              </p>
              <h1 className="font-oswald text-4xl font-bold uppercase leading-[.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                {activeSlide.title}
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-[#fff8e9]/85 sm:mt-7 sm:text-lg">{activeSlide.copy}</p>
              <a
                href={slide === 0 ? ORDER_URL : '#gallery'}
                target={slide === 0 ? '_blank' : undefined}
                rel={slide === 0 ? 'noreferrer' : undefined}
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#d73532] px-7 py-4 text-sm font-bold uppercase tracking-wider shadow-[5px_5px_0_#f6c453] transition-transform hover:-translate-y-1 sm:mt-8"
              >
                {activeSlide.cta}
                <ArrowRight size={17} />
              </a>
            </div>
            <div className="mt-10 flex items-center gap-3 sm:mt-14">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => setSlide(i)}
                  className={`h-2 transition-all ${i === slide ? 'w-14 bg-[#f6c453]' : 'w-7 bg-white/50'}`}
                />
              ))}
              <div className="ml-auto hidden items-center gap-2 sm:flex">
                <button
                  onClick={() => setSlide((slide + heroImages.length - 1) % heroImages.length)}
                  className="rounded-full border border-white/40 p-3 hover:bg-white/10"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setSlide((slide + 1) % heroImages.length)}
                  className="rounded-full border border-white/40 p-3 hover:bg-white/10"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
          <div className="absolute right-[-25px] top-32 hidden rotate-90 text-[11px] font-bold tracking-[.5em] text-white/60 lg:block">
            {t.hero.sideText}
          </div>
        </section>

        <section id="about" className="bg-[#fbf5e8] px-5 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
            <div className="relative">
              <img
                src={aboutImg}
                alt="Chef at Da Luigi"
                className="h-[480px] w-full rounded-sm object-cover shadow-[16px_16px_0_#d73532] lg:h-[570px]"
              />
              <div className="absolute bottom-5 left-5 bg-[#f6c453] px-5 py-4 font-oswald text-2xl font-bold uppercase text-[#173b28]">
                <span className="block text-xs tracking-widest">{t.about.since}</span> {t.about.sinceYear}
              </div>
            </div>
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[.25em] text-[#d73532]">{t.about.eyebrow}</p>
              <h2 className="font-oswald text-4xl font-bold uppercase leading-[.95] text-[#173b28] sm:text-6xl lg:text-7xl">
                {t.about.heading1}
                <br />
                <span className="text-[#d73532]">{t.about.heading2}</span>
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-[#476252]">{t.about.p1}</p>
              <p className="mt-5 text-lg leading-relaxed text-[#476252]">{t.about.p2}</p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 border-b-2 border-[#d73532] pb-2 text-sm font-bold uppercase tracking-widest text-[#d73532]"
              >
                {t.about.cta} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-[#d73532] px-5 py-24 text-[#fff8e9] lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-[#f6c453]">{t.gallery.eyebrow}</p>
                <h2 className="font-oswald text-4xl font-bold uppercase leading-none sm:text-6xl lg:text-8xl">
                  {t.gallery.heading1}
                  <br />
                  {t.gallery.heading2}
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-white/75">
                {t.gallery.copy1} <b className="text-[#f6c453]">{t.gallery.handle}</b>
              </p>
            </div>

            <div className="mb-8 flex flex-wrap gap-3">
              {['all', 'food', 'place', 'pizza'].map((key) => (
                <button
                  key={key}
                  onClick={() => setGalleryTab(key)}
                  className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors ${
                    galleryTab === key
                      ? 'bg-[#f6c453] text-[#173b28]'
                      : 'border border-white/40 text-white/85 hover:border-[#f6c453] hover:text-[#f6c453]'
                  }`}
                >
                  {t.gallery.tabs[key]}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {visibleGalleryItems.map(({ src, category }, i) => {
                categoryCounters[category] = (categoryCounters[category] || 0) + 1
                const label = `${t.gallery.tabs[category]} ${categoryCounters[category]}`
                return (
                  <div key={src} className={`group relative overflow-hidden ${i % 5 === 1 || i % 5 === 4 ? 'aspect-[.82]' : 'aspect-square'}`}>
                    <img src={src} alt={label} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                )
              })}
            </div>

            {hasMoreGallery && (
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setGalleryVisible((v) => v + GALLERY_PAGE_SIZE)}
                  className="rounded-full border border-white/40 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:border-[#f6c453] hover:text-[#f6c453]"
                >
                  {t.gallery.loadMore}
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="bg-[#f6c453] px-5 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="mb-12 text-center font-oswald text-3xl font-bold uppercase text-[#173b28] sm:text-4xl lg:text-5xl">
              {t.why.heading1} <span className="text-[#d73532]">{t.why.heading2}</span>
            </p>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {t.why.items.map((item, i) => {
                const Icon = whyIcons[i]
                return (
                  <div key={item.title} className="border-t-2 border-[#173b28] pt-5">
                    <Icon className="mb-5 text-[#d73532]" size={30} />
                    <h3 className="font-oswald text-2xl font-bold uppercase">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#36543b]">{item.copy}</p>
                  </div>
                )
              })}
            </div>
            <div className="mt-14 flex justify-center">
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

        <section className="bg-[#fbf5e8] px-5 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-[#d73532]">{t.testimonials.eyebrow}</p>
                <h2 className="font-oswald text-4xl font-bold uppercase leading-none text-[#173b28] sm:text-6xl lg:text-8xl">
                  {t.testimonials.heading1}
                  <br />
                  <span className="text-[#d73532]">{t.testimonials.heading2}</span>
                </h2>
              </div>
              <div className="flex gap-1 text-[#d73532]">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={19} fill="currentColor" />
                ))}
              </div>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {t.testimonials.items.map(({ quote, name, role }) => (
                <blockquote key={name} className="bg-white/70 p-7 shadow-sm">
                  <div className="mb-5 flex gap-1 text-[#d73532]">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed text-[#36543b]">{quote}</p>
                  <footer className="mt-7 border-t border-[#d8dfce] pt-4">
                    <strong className="block text-sm">{name}</strong>
                    <span className="text-xs uppercase tracking-widest text-[#879485]">{role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#d73532] px-5 py-24 text-[#fff8e9] lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-[#f6c453]">{t.contact.eyebrow}</p>
                <h2 className="font-oswald text-4xl font-bold uppercase leading-[.95] sm:text-6xl lg:text-8xl">
                  {t.contact.heading1}
                  <br />
                  {t.contact.heading2}
                </h2>
              </div>
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#f6c453] px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#173b28] shadow-[4px_4px_0_#173b28] transition-transform hover:-translate-y-1"
              >
                {t.contact.orderCta} <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <a
                  href="https://maps.google.com/?q=Landshutterstr+33,+93053+Regensburg"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 bg-white/10 p-6 transition-colors hover:bg-white/15"
                >
                  <MapPin className="mt-1 shrink-0 text-[#f6c453]" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#f6c453]">{t.contact.addressLabel}</p>
                    <p className="mt-2 text-lg">
                      {t.contact.address1}
                      <br />
                      {t.contact.address2}
                    </p>
                  </div>
                </a>
                <a href="tel:+4994156995899" className="flex items-start gap-4 bg-white/10 p-6 transition-colors hover:bg-white/15">
                  <Phone className="mt-1 shrink-0 text-[#f6c453]" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#f6c453]">{t.contact.phoneLabel}</p>
                    <p className="mt-2 text-lg">{t.contact.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${t.contact.email}`} className="flex items-start gap-4 bg-white/10 p-6 transition-colors hover:bg-white/15">
                  <Mail className="mt-1 shrink-0 text-[#f6c453]" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#f6c453]">{t.contact.emailLabel}</p>
                    <p className="mt-2 text-lg">{t.contact.email}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 bg-white/10 p-6">
                  <Clock3 className="mt-1 shrink-0 text-[#f6c453]" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#f6c453]">{t.contact.hoursLabel}</p>
                    <p className="mt-2 text-lg">
                      {t.contact.hours1}
                      <br />
                      {t.contact.hours2}
                    </p>
                  </div>
                </div>
              </div>
              <div className="min-h-[320px] overflow-hidden border border-white/30 lg:min-h-full">
                <iframe
                  title="Pizzeria Da Luigi location"
                  className="h-full w-full"
                  style={{ minHeight: 320 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Landshutterstr%2033%2C%2093053%20Regensburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#173b28] px-5 py-12 text-[#fff8e9] lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <img src={logo} alt="Pizzeria Da Luigi" className="h-12 w-12 rounded-full object-cover" />
              <span className="font-oswald text-xl font-bold uppercase leading-[.85]">
                Pizzeria
                <br />
                <span className="text-[#f6c453]">Da Luigi</span>
              </span>
            </a>
            <p className="mt-5 text-xs text-[#b9cbb9]">{t.footer.tagline}</p>
          </div>
          <div className="text-xs text-[#b9cbb9]">
            <a href="tel:+4994156995899" className="block hover:text-[#f6c453]">{t.contact.phone}</a>
            <a
              href="https://maps.google.com/?q=Landshutterstr+33,+93053+Regensburg"
              target="_blank"
              rel="noreferrer"
              className="mt-2 block hover:text-[#f6c453]"
            >
              {t.contact.address1}, {t.contact.address2}
            </a>
          </div>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-widest">
            <a href="#about" className="hover:text-[#f6c453]">{t.footer.about}</a>
            <a href="#gallery" className="hover:text-[#f6c453]">{t.nav.gallery}</a>
            <a href="#contact" className="hover:text-[#f6c453]">{t.footer.contact}</a>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitch lang={lang} setLang={setLang} />
            <a aria-label="Instagram" href="#home" className="rounded-full border border-white/30 p-3 hover:border-[#f6c453]">
              <InstagramIcon width={17} height={17} />
            </a>
            <a aria-label="Facebook" href="#home" className="rounded-full border border-white/30 p-3 hover:border-[#f6c453]">
              <FacebookIcon width={17} height={17} />
            </a>
            <a aria-label="Email" href="mailto:ciao@dalugui.pizza" className="rounded-full border border-white/30 p-3 hover:border-[#f6c453]">
              <Mail size={17} />
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
          © 2024 Pizzeria Da Luigi · {t.footer.rights}
        </div>
      </footer>
    </div>
  )
}

export default App
