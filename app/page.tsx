
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import PopularFoods from "./components/PopularFods";
import SpecialOffer from "./components/SpecialOffer";
import BestOffer from "./components/BestOffer"
import DownloadAppSection from "./components/DownloadAppSection";
import { Services } from "./components/services";
import Footer from "./components/Footer";
import Newsletter from "./components/NewsLetter";
import Testimonial from "./components/testimonial";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <HomeSection />
      <PopularFoods />
      <SpecialOffer />
      <BestOffer/>
      <Services/>
      <Testimonial/>
      <DownloadAppSection />
      <Newsletter/>
      <Footer />
    </main>
  );
}



