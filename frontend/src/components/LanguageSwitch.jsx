export function LanguageSwitch({ lang, setLang }) {
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
