
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import PopularFoods from "./components/PopularFods";
import SpecialOffer from "./components/SpecialOffer";
import DownloadAppSection from "./components/DownloadAppSection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <HomeSection />
      <PopularFoods />
      <SpecialOffer />
      <DownloadAppSection />
      <Footer />
    </main>
  );
}



