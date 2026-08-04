import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Cookie,
  FileText,
  Mail,
  Phone,
  Scale,
  Server,
  ShieldCheck,
  ShoppingCart,
  UserCog,
} from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { SITE_URL } from '../i18n'

export function Datenschutz({ t }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const ds = t.datenschutz
  const c = t.contact

  return (
    <main className="bg-[#fbf5e8]">
      {/* ─── PAGE HERO ─── */}
      <section className="relative overflow-hidden bg-[#173b28] px-4 pb-14 pt-[130px] text-center text-white sm:px-6 lg:pt-[150px]">
        <div className="pointer-events-none absolute -left-10 top-1/2 hidden -translate-y-1/2 opacity-20 lg:block">
          <ShieldCheck size={220} strokeWidth={0.6} />
        </div>
        <div className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 opacity-20 lg:block">
          <ShieldCheck size={220} strokeWidth={0.6} />
        </div>

        <div className="relative mx-auto max-w-2xl">
          <ShieldCheck className="mx-auto mb-4 text-[#f6c453]" size={40} strokeWidth={1.5} />
          <h1 className="font-oswald text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-6xl">
            {ds.title}
          </h1>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#f6c453]/60" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#f6c453]" />
            <span className="h-px w-10 bg-[#f6c453]/60" />
          </div>
          <p className="mt-4 text-[#fff8e9]/80">{ds.subtitle}</p>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#fff8e9]/70">
            <Link to="/" className="hover:text-[#f6c453]">
              {ds.breadcrumbHome}
            </Link>{' '}
            <span className="mx-1">›</span>{' '}
            <span className="text-[#d73532]">{ds.breadcrumbSelf}</span>
          </p>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="px-4 pb-0 pt-14 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#e8dfc8] bg-white p-7 shadow-sm">
          <p className="text-sm leading-relaxed text-[#476252]">{ds.intro}</p>
        </div>
      </section>

      {/* ─── GRID CARDS ─── */}
      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">

          {/* 1 – Verantwortliche Stelle */}
          <div className="rounded-2xl border border-[#e8dfc8] bg-white p-7 shadow-sm">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f6c453]/20">
              <Building2 className="text-[#c9922f]" size={26} />
            </div>
            <h2 className="font-oswald text-lg font-bold uppercase tracking-wide text-[#d73532]">
              {ds.section1Title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#476252]">{ds.section1Copy}</p>
            <div className="mt-4 space-y-2 border-t border-[#e8dfc8] pt-4">
              <p className="font-bold text-[#173b28]">Pizzeria Da Luigi</p>
              <p className="text-sm text-[#476252]">
                {c.address1}
                <br />
                {c.address2}, Deutschland
              </p>
              <a
                href="tel:+4994156995899"
                className="flex items-center gap-2 text-sm text-[#173b28] hover:text-[#d73532]"
              >
                <Phone size={15} className="text-[#c9922f]" /> {c.phone}
              </a>
              <a
                href={`mailto:${c.email}`}
                className="flex items-center gap-2 break-all text-sm text-[#173b28] hover:text-[#d73532]"
              >
                <Mail size={15} className="shrink-0 text-[#c9922f]" /> {c.email}
              </a>
              <a
                href={SITE_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-[#173b28] hover:text-[#d73532]"
              >
                <FileText size={15} className="text-[#c9922f]" /> pizzeriadaluigiregensburg.de
              </a>
            </div>
          </div>

          {/* 2 – Server-Logfiles */}
          <div className="rounded-2xl border border-[#e8dfc8] bg-white p-7 shadow-sm">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f6c453]/20">
              <Server className="text-[#c9922f]" size={26} />
            </div>
            <h2 className="font-oswald text-lg font-bold uppercase tracking-wide text-[#d73532]">
              {ds.section2Title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#476252]">{ds.section2Copy}</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1">
              {ds.section2List.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-[#476252]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#d73532]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-[#476252]">{ds.section2Copy2}</p>
          </div>

          {/* 3 – Kontaktformular */}
          <div className="rounded-2xl border border-[#e8dfc8] bg-white p-7 shadow-sm">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f6c453]/20">
              <Mail className="text-[#c9922f]" size={26} />
            </div>
            <h2 className="font-oswald text-lg font-bold uppercase tracking-wide text-[#d73532]">
              {ds.section3Title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#476252]">{ds.section3Copy}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#476252]">{ds.section3Copy2}</p>
          </div>

          {/* 4 – Bestellungen */}
          <div className="rounded-2xl border border-[#e8dfc8] bg-white p-7 shadow-sm">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f6c453]/20">
              <ShoppingCart className="text-[#c9922f]" size={26} />
            </div>
            <h2 className="font-oswald text-lg font-bold uppercase tracking-wide text-[#d73532]">
              {ds.section4Title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#476252]">{ds.section4Copy}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#476252]">{ds.section4Copy2}</p>
          </div>

          {/* 5 – E-Mail für Werbung */}
          <div className="rounded-2xl border border-[#e8dfc8] bg-white p-7 shadow-sm">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f6c453]/20">
              <ArrowRight className="text-[#c9922f]" size={26} />
            </div>
            <h2 className="font-oswald text-lg font-bold uppercase tracking-wide text-[#d73532]">
              {ds.section5Title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#476252]">{ds.section5Copy}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#476252]">{ds.section5Copy2}</p>
          </div>

          {/* 6 – Cookies */}
          <div className="rounded-2xl border border-[#e8dfc8] bg-white p-7 shadow-sm">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f6c453]/20">
              <Cookie className="text-[#c9922f]" size={26} />
            </div>
            <h2 className="font-oswald text-lg font-bold uppercase tracking-wide text-[#d73532]">
              {ds.section6Title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#476252]">{ds.section6Copy}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#476252]">{ds.section6Copy2}</p>
          </div>

          {/* 7 – Ihre Rechte */}
          <div className="rounded-2xl border border-[#e8dfc8] bg-white p-7 shadow-sm">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f6c453]/20">
              <CheckCircle2 className="text-[#c9922f]" size={26} />
            </div>
            <h2 className="font-oswald text-lg font-bold uppercase tracking-wide text-[#d73532]">
              {ds.section7Title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#476252]">{ds.section7Copy}</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1">
              {ds.section7List.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-[#476252]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#d73532]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-[#476252]">{ds.section7Copy2}</p>
          </div>

          {/* 8 – Beschwerderecht */}
          <div className="rounded-2xl border border-[#e8dfc8] bg-white p-7 shadow-sm">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f6c453]/20">
              <Scale className="text-[#c9922f]" size={26} />
            </div>
            <h2 className="font-oswald text-lg font-bold uppercase tracking-wide text-[#d73532]">
              {ds.section8Title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#476252]">{ds.section8Copy}</p>
            <div className="mt-3 rounded-xl bg-[#f8f1e0] p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#173b28]">
                {ds.section8Authority}
              </p>
              <p className="mt-1 whitespace-pre-line text-sm text-[#476252]">
                {ds.section8AuthorityName}
              </p>
            </div>
          </div>
        </div>

        {/* ─── CTA BANNER ─── */}
        <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-2xl bg-[#173b28] text-white">
          <div className="flex flex-col items-center gap-6 p-8 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-[#f6c453] bg-white/10">
              <UserCog className="text-[#f6c453]" size={32} />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#f6c453]">
                {ds.ctaEyebrow}
              </p>
              <h3 className="mt-1 font-oswald text-2xl font-bold">{ds.ctaTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#fff8e9]/80">{ds.ctaCopy}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3">
              <a
                href="tel:+4994156995899"
                className="flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm hover:border-[#f6c453] hover:text-[#f6c453] transition-colors"
              >
                <Phone size={16} /> {c.phone}
              </a>
              <a
                href={`mailto:${c.email}`}
                className="flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm break-all hover:border-[#f6c453] hover:text-[#f6c453] transition-colors"
              >
                <Mail size={16} /> {c.email}
              </a>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d73532] px-6 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-[3px_3px_0_#f6c453] transition-transform hover:-translate-y-0.5"
              >
                {ds.ctaButton} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
