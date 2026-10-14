export default function GameCard({ game }) {
  return (
    <article
      className="game-card relative h-[456px] min-w-[330px] flex-[0_0_31%] overflow-hidden rounded-[19px] text-white max-[900px]:min-w-[300px] max-[900px]:flex-[0_0_42%] max-[600px]:h-[430px] max-[600px]:min-w-[270px] max-[600px]:flex-[0_0_82%] max-[600px]:rounded-2xl"
      style={{ "--game-image": `url("${game.image}")` }}
    >
      <div className="absolute inset-x-5 bottom-[17px] right-[18px]">
        <h2 className="font-display mb-6 whitespace-nowrap text-[clamp(22px,2vw,31px)] font-black leading-none tracking-[-.025em] text-brand-yellow max-[600px]:mb-[18px] max-[600px]:text-[25px]">
          {game.name}
        </h2>
        <p className="mb-5 text-lg font-semibold leading-[1.48] [text-shadow:0_1px_4px_var(--color-shadow)] max-[600px]:text-[15px]">
          {game.description}
        </p>
        <a className="pill-button h-[61px] min-w-[213px] text-[19px] max-[600px]:h-[52px] max-[600px]:min-w-[180px] max-[600px]:text-base" href="/event/book-lan-event/">
          Book Event
        </a>
      </div>
    </article>
  );
}
