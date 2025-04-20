import Image from "next/image";

// Section imports
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Stratagey from "@/components/sections/Stratagey";
import Testimonials from "@/components/sections/Testimonials";
import Cta from "@/components/sections/Cta";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>

      <Hero />
      <About />
      <Services />
      <Stratagey />
      <Testimonials />
      <Cta />
      <FinalCta />
      </main>
      <Footer />


    </div>
  );
}
