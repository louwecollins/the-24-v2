import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DualImage from "@/components/DualImage";
import Welcome from "@/components/Welcome";
import WhyTwentyFour from "@/components/WhyTwentyFour";
import AmenitiesGrid from "@/components/AmenitiesGrid";
import Neighborhood from "@/components/Neighborhood";
import Community from "@/components/Community";
import Marquee from "@/components/Marquee";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-paper text-ink">
      <Header />
      <Hero />
      <DualImage />
      <Welcome />
      <WhyTwentyFour />
      <AmenitiesGrid />
      <Neighborhood />
      <Community />
      <Marquee />
      <FinalCTA />
      <Footer />
    </main>
  );
}
