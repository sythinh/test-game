// components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/About";
import OurGames from "@/components/OurGames";
import OurPartners from "@/components/OurPartners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="absolute z-30 md:z-10 w-full">
        <Header />
      </div>
      <Hero />
      <AboutUs />
      <OurGames />
      <OurPartners />
      <Footer />
    </main>
  );
}
