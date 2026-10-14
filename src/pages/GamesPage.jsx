import GamesGallery from "../components/GamesGallery";
import SiteHeader from "../components/SiteHeader";

export default function GamesPage() {
  return <main className="min-h-screen overflow-hidden bg-brand-pink text-brand-ink">
    <SiteHeader />
    <GamesGallery />
  </main>;
}
