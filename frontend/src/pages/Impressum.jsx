import { ArrowRight, Building2, FileCheck2, Mail, Phone, Scale } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Impressum({ t }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const im = t.impressum
  const c = t.contact

  return (
    <main className="bg-[#fbf5e8]">
      {/* ─── PAGE HERO ─── */}
      <section className="relative overflow-hidden bg-[#173b28] px-4 pb-14 pt-[130px] text-center text-white sm:px-6 lg:pt-[150px]">
        <div className="pointer-events-none absolute -left-10 top-1/2 hidden -translate-y-1/2 opacity-20 lg:block">
          <Building2 size={220} strokeWidth={0.6} />
        </div>
        <div className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 opacity-20 lg:block">
          <Building2 size={220} strokeWidth={0.6} />
        </div>

        <div className="relative mx-auto max-w-2xl">
          <Scale className="mx-auto mb-4 text-[#f6c453]" size={40} strokeWidth={1.5} />
          <h1 className="font-oswald text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-6xl">{im.title}</h1>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#f6c453]/60" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#f6c453]" />
            <span className="h-px w-10 bg-[#f6c453]/60" />
          </div>
          <p className="mt-4 text-[#fff8e9]/80">{im.subtitle}</p>
          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#fff8e9]/70">
            <Link to="/" className="hover:text-[#f6c453]">
              {im.breadcrumbHome}
            </Link>{' '}
            <span className="mx-1">›</span> <span className="text-[#d73532]">{im.breadcrumbSelf}</span>
          </p>
        </div>
      </section>

      {/* ─── INFO CARDS ─── */}
      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {/* Provider identification */}
          <div className="rounded-2xl border border-[#e8dfc8] bg-white p-7 shadow-sm">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f6c453]/20">
              <Building2 className="text-[#c9922f]" size={26} />
            </div>
            <h2 className="font-oswald text-lg font-bold uppercase tracking-wide text-[#d73532]">{im.section1Title}</h2>
            <p className="mt-4 font-bold text-[#173b28]">{im.businessName}</p>
            <p className="mt-1 text-sm text-[#476252]">
              {c.address1}
              <br />
              {c.address2}, Deutschland
            </p>
            <div className="mt-4 space-y-3 border-t border-[#e8dfc8] pt-4 text-sm">
              <a href="tel:+4994156995899" className="flex items-center gap-3 text-[#173b28] hover:text-[#d73532]">
                <Phone size={16} className="text-[#c9922f]" /> {c.phone}
              </a>
              <a href={`mailto:${c.email}`} className="flex items-center gap-3 break-all text-[#173b28] hover:text-[#d73532]">
                <Mail size={16} className="shrink-0 text-[#c9922f]" /> {c.email}
              </a>
              <p className="flex items-start gap-3 text-[#476252]">
                <FileCheck2 size={16} className="mt-0.5 shrink-0 text-[#c9922f]" /> {im.registerNote}
              </p>
            </div>
          </div>

          {/* ODR */}
          <div className="rounded-2xl border border-[#e8dfc8] bg-white p-7 shadow-sm">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f6c453]/20">
              <Scale className="text-[#c9922f]" size={26} />
            </div>
            <h2 className="font-oswald text-lg font-bold uppercase tracking-wide text-[#d73532]">{im.section2Title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#476252]">{im.section2Copy}</p>
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#173b28] px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition-transform hover:-translate-y-0.5"
            >
              {im.odrButton} <ArrowRight size={14} />
            </a>
            <p className="mt-5 text-sm leading-relaxed text-[#476252]">{im.section2Copy2}</p>
          </div>

          {/* Legal notice */}
          <div className="rounded-2xl border border-[#e8dfc8] bg-white p-7 shadow-sm">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#f6c453]/20">
              <FileCheck2 className="text-[#c9922f]" size={26} />
            </div>
            <h2 className="font-oswald text-lg font-bold uppercase tracking-wide text-[#d73532]">{im.section3Title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#476252]">{im.section3Copy1}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#476252]">{im.section3Copy2}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#476252]">{im.section3Copy3}</p>
          </div>
        </div>

        {/* Commitment banner */}
        <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center gap-6 rounded-2xl border border-[#f6c453] bg-[#fff8e9] p-7 sm:flex-row sm:p-8">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-[#f6c453] bg-white">
            <Scale className="text-[#d73532]" size={30} />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-oswald text-xl font-bold uppercase text-[#173b28]">{im.commitmentTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#476252]">{im.commitmentCopy}</p>
          </div>
          <Link
            to="/#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#d73532] px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-[3px_3px_0_#173b28] transition-transform hover:-translate-y-0.5"
          >
            {im.commitmentCta} <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ─── CTA STRIP ─── */}
      <section className="bg-[#173b28] px-4 py-10 text-white sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.25em] text-[#f6c453]">{im.ctaEyebrow}</p>
            <h3 className="mt-1 font-oswald text-2xl font-bold sm:text-3xl">{im.ctaTitle}</h3>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="tel:+4994156995899" className="flex items-center gap-2 hover:text-[#f6c453]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30">
                <Phone size={15} />
              </span>
              {c.phone}
            </a>
            <a href={`mailto:${c.email}`} className="flex items-center gap-2 hover:text-[#f6c453]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30">
                <Mail size={15} />
              </span>
              <span className="hidden sm:inline">{c.email}</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
