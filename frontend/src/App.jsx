import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { translations } from './i18n'
import { Datenschutz } from './pages/Datenschutz'
import { Home } from './pages/Home'
import { Impressum } from './pages/Impressum'

function App() {
  const [lang, setLangState] = useState(() => localStorage.getItem('luigi-lang') || 'de')
  const [mobileNav, setMobileNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const setLang = (code) => {
    setLangState(code)
    localStorage.setItem('luigi-lang', code)
  }

  // Header goes solid once the user scrolls past the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  return (
    <div className="min-h-[100dvh] overflow-x-hidden bg-[#fbf5e8] text-[#193b27]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <Header lang={lang} setLang={setLang} t={t} mobileNav={mobileNav} setMobileNav={setMobileNav} scrolled={scrolled} />

      <Routes>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/impressum" element={<Impressum t={t} />} />
        <Route path="/datenschutz" element={<Datenschutz t={t} />} />
      </Routes>

      <Footer lang={lang} setLang={setLang} t={t} />
    </div>
  )
}

export default App
