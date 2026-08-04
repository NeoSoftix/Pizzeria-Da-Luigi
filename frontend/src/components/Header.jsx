import { Menu as MenuIcon, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import logo from '../assets/logo.png'
import { ORDER_URL } from '../i18n'
import { LanguageSwitch } from './LanguageSwitch'

export function Header({ lang, setLang, t, mobileNav, setMobileNav, scrolled }) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const navItems = [
    { key: 'home', href: '#home', label: t.nav.home },
    { key: 'menu', href: ORDER_URL, label: t.nav.menu, external: true },
    { key: 'about', href: '#about', label: t.nav.about },
    { key: 'gallery', href: '#gallery', label: t.nav.gallery },
    { key: 'contact', href: '#contact', label: t.nav.contact },
  ]

  const renderNavLink = (item, className, onClick) => {
    if (item.external) {
      return (
        <a key={item.key} href={item.href} target="_blank" rel="noreferrer" className={className} onClick={onClick}>
          {item.label}
        </a>
      )
    }
    if (isHome) {
      return (
        <a key={item.key} href={item.href} className={className} onClick={onClick}>
          {item.label}
        </a>
      )
    }
    return (
      <Link key={item.key} to={`/${item.href}`} className={className} onClick={onClick}>
        {item.label}
      </Link>
    )
  }

  const LogoLink = isHome ? 'a' : Link
  const logoLinkProps = isHome ? { href: '#home' } : { to: '/' }

  return (
    <header
      className={`fixed z-50 w-full transition-colors duration-300 ${
        scrolled
          ? 'border-b border-white/20 bg-[#173b28]/95 text-[#fff8e9] backdrop-blur-md'
          : 'border-b border-transparent bg-transparent text-[#fff8e9]'
      }`}
    >
      <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <LogoLink {...logoLinkProps} className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Pizzeria Da Luigi" className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover ring-2 ring-[#f6c453] shadow-lg" />
          <span className="font-oswald text-lg sm:text-xl font-bold uppercase tracking-tight leading-[.85]">
            Pizzeria
            <br />
            <span className="text-[#f6c453]">Da Luigi</span>
          </span>
        </LogoLink>

        <nav className="hidden items-center gap-5 text-[11px] font-bold uppercase tracking-[.15em] xl:flex">
          {navItems.map((item) => renderNavLink(item, 'transition-colors hover:text-[#f6c453] whitespace-nowrap'))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <div className="hidden sm:block">
            <LanguageSwitch lang={lang} setLang={setLang} />
          </div>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noreferrer"
            className="block rounded-full bg-[#d73532] px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white shadow-[3px_3px_0_#f6c453] transition-transform hover:-translate-y-0.5"
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
          {navItems.map((item) =>
            renderNavLink(item, 'border-b border-white/10 pb-3 text-[#fff8e9] hover:text-[#f6c453] transition-colors', () => setMobileNav(false))
          )}
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
  )
}
