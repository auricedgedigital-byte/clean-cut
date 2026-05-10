import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Craftsmanship from "@/components/Craftsmanship";
import Atmosphere from "@/components/Atmosphere";
import Testimonials from "@/components/Testimonials";
import Transformation from "@/components/Transformation";
import Masters from "@/components/Masters";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Cinematic Overlays */}
      <div className="cinematic-foundation">
        <div className="grain"></div>
        <div className="vignette"></div>
        <div className="ambient-glow"></div>
      </div>

      <Navbar />
      
      {/* Floating Trimly CTA */}
      <div className="fixed bottom-8 right-8 z-[2000] hidden md:block">
        <a 
          href="https://trimly.ai" 
          target="_blank"
          className="glass-pill px-6 py-3 border-brand-accent/30 hover:border-brand-accent group"
        >
          <span className="label text-[10px] text-brand-accent group-hover:text-brand-text transition-colors">
            Get This Template + Trimly Trial
          </span>
        </a>
      </div>

      <main>
        <Hero />
        <Marquee />
        <div className="px-8 md:px-20">
          <div className="cinematic-divider" />
        </div>
        <Craftsmanship />
        <Atmosphere />
        <div className="px-8 md:px-20">
          <div className="cinematic-divider" />
        </div>
        <Testimonials />
        <Transformation />
        <div className="px-8 md:px-20">
          <div className="cinematic-divider" />
        </div>
        <Masters />
        <Footer />
      </main>
    </div>
  );
}
