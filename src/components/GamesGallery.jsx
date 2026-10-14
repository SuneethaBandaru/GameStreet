import { games } from "../data/games";
import GameCard from "./GameCard";

function GamesHeading() {
  return (
    <div className="mb-[39px] flex items-start justify-between gap-7 max-[900px]:gap-5 max-[600px]:mb-6 max-[600px]:block">
      <div className="min-w-[340px] max-[900px]:min-w-[270px] max-[600px]:min-w-0">
        <span className="title-pill title-pill--fuel">Fuel</span>
        <span className="title-pill title-pill--ideas">Big Ideas</span>
        <h1 className="font-display mt-[17px] text-[clamp(46px,4vw,61px)] font-black uppercase leading-none tracking-[.005em] text-brand-violet max-[600px]:mt-3 max-[600px]:text-[46px]">
          The Games
        </h1>
      </div>
      <p className="games-intro ml-auto mt-4 max-w-[560px] border-t-2 border-brand-indigo pt-5 text-right text-xl leading-[1.8] max-[900px]:text-[17px] max-[600px]:mt-6 max-[600px]:text-left max-[600px]:text-sm max-[600px]:leading-[1.6] max-[600px]:pt-[13px]">
        A mix of fast-paced, competitive, and social games — easy to jump into,
        <br className="max-[600px]:hidden" /> hard to stop playing.
      </p>
    </div>
  );
}

export default function GamesGallery() {
  return (
    <section className="bg-brand-pink px-[7.4vw] pb-[70px] text-brand-ink max-[900px]:px-[5vw] max-[600px]:px-[5vw] max-[600px]:pb-[35px]" id="games">
      <GamesHeading />
      <div className="game-gallery flex gap-[42px] overflow-x-auto pb-2 max-[900px]:gap-6 max-[600px]:mr-[-5vw] max-[600px]:gap-4 max-[600px]:pr-[5vw]">
        {games.map((game) => <GameCard key={game.name} game={game} />)}
      </div>
    </section>
  );
}
