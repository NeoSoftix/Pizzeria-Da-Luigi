import { Mail } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import logo from '../assets/logo.png'
import { ORDER_URL } from '../i18n'
import { FacebookIcon } from './icons'
import { LanguageSwitch } from './LanguageSwitch'

export function Footer({ lang, setLang, t }) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const sectionLink = (href, label) =>
    isHome ? (
      <a href={href} className="hover:text-[#f6c453] transition-colors">
        {label}
      </a>
    ) : (
      <Link to={`/${href}`} className="hover:text-[#f6c453] transition-colors">
        {label}
      </Link>
    )

  return (
    <footer className="bg-[#173b28] px-4 py-12 text-[#fff8e9] sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:flex-wrap sm:items-end">
        <div>
          {isHome ? (
            <a href="#home" className="flex items-center gap-3">
              <img src={logo} alt="Pizzeria Da Luigi" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-oswald text-xl font-bold uppercase leading-[.85]">
                Pizzeria
                <br />
                <span className="text-[#f6c453]">Da Luigi</span>
              </span>
            </a>
          ) : (
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Pizzeria Da Luigi" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-oswald text-xl font-bold uppercase leading-[.85]">
                Pizzeria
                <br />
                <span className="text-[#f6c453]">Da Luigi</span>
              </span>
            </Link>
          )}
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
          {sectionLink('#about', t.footer.about)}
          {sectionLink('#gallery', t.nav.gallery)}
          {sectionLink('#contact', t.footer.contact)}
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

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-5 text-[10px] uppercase tracking-widest text-[#8ea18e] sm:flex-row sm:items-center sm:justify-between">
        <span>
          © 2026 Developed by{' '}
          <a
            href="https://www.neosoftix.com/"
            target="_blank"
            rel="noreferrer"
            className="text-[#f6c453] hover:text-white transition-colors"
          >
            NeoSoftix.com
          </a>
          {' '}· {t.footer.rights}
        </span>
        <div className="flex items-center gap-4">
          <Link to="/impressum" className="hover:text-[#f6c453] transition-colors">
            {t.footer.impressum}
          </Link>
          <span className="text-white/20">·</span>
          <Link to="/datenschutz" className="hover:text-[#f6c453] transition-colors">
            {t.footer.datenschutz}
          </Link>
        </div>
      </div>
    </footer>
  )
}
