import { ArrowRight, ChevronLeft, ChevronRight, Clock3, Mail, MapPin, Phone, Star } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

import aboutImg from '../assets/ourplace/image.png'
import { ORDER_URL, awardImages, galleryData, heroImages, whyIcons } from '../i18n'

/* ─── Trophy SVG (fallback if no award images) ─── */
function TrophySVG() {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 mx-auto drop-shadow-lg">
      <ellipse cx="22" cy="55" rx="10" ry="5" fill="#c9a227" opacity=".7" transform="rotate(-30 22 55)" />
      <ellipse cx="15" cy="45" rx="9" ry="5" fill="#c9a227" opacity=".6" transform="rotate(-50 15 45)" />
      <ellipse cx="14" cy="65" rx="9" ry="5" fill="#c9a227" opacity=".6" transform="rotate(-10 14 65)" />
      <ellipse cx="98" cy="55" rx="10" ry="5" fill="#c9a227" opacity=".7" transform="rotate(30 98 55)" />
      <ellipse cx="105" cy="45" rx="9" ry="5" fill="#c9a227" opacity=".6" transform="rotate(50 105 45)" />
      <ellipse cx="106" cy="65" rx="9" ry="5" fill="#c9a227" opacity=".6" transform="rotate(10 106 65)" />
      <path d="M40 20 h40 v30 a20 20 0 0 1-40 0 Z" fill="url(#tg)" />
      <rect x="52" y="70" width="16" height="14" fill="#c9a227" />
      <rect x="42" y="84" width="36" height="6" rx="3" fill="#b8860b" />
      <path d="M40 28 Q24 28 24 42 Q24 56 40 56" stroke="#c9a227" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M80 28 Q96 28 96 42 Q96 56 80 56" stroke="#c9a227" strokeWidth="5" fill="none" strokeLinecap="round" />
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

export function Home({ t }) {
  const location = useLocation()
  const [slide, setSlide] = useState(0)
  const [galleryTab, setGalleryTab] = useState('all')
  const [testiPage, setTestiPage] = useState(0)
  const [testiPerPage, setTestiPerPage] = useState(3)
  const testiRef = useRef(null)

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
    const totalPages = Math.ceil(t.testimonials.items.length / testiPerPage)
    const timer = window.setInterval(() => setTestiPage((p) => (p + 1) % totalPages), 6000)
    return () => window.clearInterval(timer)
  }, [t, testiPerPage])

  // Scroll to hash section when arriving from another page (e.g. /impressum -> /#about)
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }))
      }
    }
  }, [location.hash])

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

  // Testimonials pagination
  const allTestis = t.testimonials.items
  const totalTestiPages = Math.ceil(allTestis.length / testiPerPage)
  const visibleTestis = allTestis.slice(testiPage * testiPerPage, testiPage * testiPerPage + testiPerPage)

  const prevTesti = () => setTestiPage((p) => (p + totalTestiPages - 1) % totalTestiPages)
  const nextTesti = () => setTestiPage((p) => (p + 1) % totalTestiPages)

  return (
    <main id="home">
      {/* ─── HERO ─── */}
      <section className="relative flex h-[560px] items-center overflow-hidden bg-[#173b28] pb-14 pt-[112px] text-white sm:h-[640px] lg:h-[700px] lg:pb-20 lg:pt-[128px]">
        {heroImages.map((image, i) => (
          <div key={image} className={`absolute inset-0 transition-opacity duration-700 ${i === slide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={image} alt="" className={`h-full w-full object-cover ${i === 0 ? 'object-top' : 'object-center'}`} />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>
        ))}
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl">
            <p className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[.28em] text-[#f6c453]">
              <span className="h-px w-8 bg-[#f6c453]" />
              {activeSlide.eyebrow}
            </p>
            <h1 className="font-oswald text-4xl font-bold uppercase leading-[.95] tracking-tight [text-shadow:0_2px_16px_rgba(0,0,0,0.5)] sm:text-5xl md:text-6xl lg:text-7xl">
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

          <div className="mt-10 hidden items-center gap-3 sm:flex sm:mt-14">
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
        <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#f6c453]/10" />
        <div className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#d73532]/10" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.3em] text-[#d73532]">
              <span className="h-px w-8 bg-[#d73532]" />
              {t.awards.eyebrow}
              <span className="h-px w-8 bg-[#d73532]" />
            </p>
            <h2 className="font-oswald text-4xl font-bold uppercase leading-tight text-[#173b28] sm:text-5xl lg:text-6xl">
              {t.awards.heading1} <span className="text-[#d73532]">{t.awards.heading2}</span>
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="h-px w-12 bg-[#c9a227]" />
              <Star size={16} fill="#c9a227" className="text-[#c9a227]" />
              <span className="h-px w-12 bg-[#c9a227]" />
            </div>
          </div>

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
                ))}
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

          <div ref={testiRef} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleTestis.map((item) => (
              <TestiCard key={item.name} item={item} />
            ))}
          </div>

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
  )
}
