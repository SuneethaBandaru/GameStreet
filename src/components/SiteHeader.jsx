export default function SiteHeader() {
  return (
    <header className="flex h-[139px] items-start justify-between bg-brand-pink px-[1.3vw] max-[600px]:h-[125px] max-[600px]:px-[4vw]">
      <a
        className="brand-seal mt-[15px] grid size-[115px] place-items-center rounded-full max-[600px]:mt-[13px] max-[600px]:size-[90px]"
        href="/"
        aria-label="GameStreet home"
      >
        <span className="brand-seal__ring">✳ EAT · DRINK · PLAY ✳</span>
        <b className="font-display text-[36px] max-[600px]:text-[29px]">GS1</b>
      </a>
      <div className="mt-[31px] mr-[1.6vw] flex items-center gap-5 max-[600px]:mt-6 max-[600px]:mr-0 max-[600px]:gap-3">
        <a className="pill-button min-w-[240px] px-12 text-xl max-[600px]:h-[52px] max-[600px]:min-w-[140px] max-[600px]:px-[18px] max-[600px]:text-[15px]" href="/event/book-lan-event/">
          Book Event
        </a>
        <button className="menu-button flex items-center gap-[13px] border-0 bg-transparent text-xl font-bold text-white max-[600px]:gap-1.5 max-[600px]:text-[15px]">
          Menu <span>●</span>
        </button>
      </div>
    </header>
  );
}
