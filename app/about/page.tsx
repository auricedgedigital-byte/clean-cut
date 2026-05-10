import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <div className="cinematic-foundation">
        <div className="grain"></div>
        <div className="vignette"></div>
        <div className="ambient-glow"></div>
      </div>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/regenerated_image_1778337789227.jpg"
              alt="Elite Barbering"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative z-20 text-center px-8 max-w-4xl">
            <span className="label text-brand-accent tracking-[0.6em] uppercase text-xs block mb-6">
              Our Heritage & Craft
            </span>
            <h1 className="text-[12vw] md:text-[8vw] italic tracking-tighter leading-none mb-10 flex flex-col items-center">
              <span className="uppercase font-bold">Legacy of</span>
              <span className="text-brand-accent uppercase font-bold -mt-2">Precision</span>
            </h1>
            <p className="text-brand-text/60 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed mb-12">
              Clean Cut isn&apos;t just a barbershop; it&apos;s a Phoenix institution founded on the timeless principles of brotherhood and precision. Since our inception, we&apos;ve dedicated ourselves to the mastery of the blade and the elevation of the modern gentleman&apos;s spirit.
            </p>
            <Link href="/services" className="btn-luxury inline-block text-sm">
              Explore Our Mastering Tradition
            </Link>
          </div>
        </section>

        <section className="luxury-section">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div className="space-y-12 py-10 lg:order-1">
                <h2 className="label text-brand-accent tracking-widest">The Brothers</h2>
                <p className="text-3xl font-light italic leading-relaxed">
                  Barbering is more than a service—it&apos;s an inheritance. Jimmy, Alex, and Ayman grew up watching the transformative power of a sharp cut.
                </p>
                <p className="text-lg font-light opacity-60 leading-relaxed">
                  When Clean Cut opened on Bell Road in 2015, the mission was simple: bring high-fashion editorial grooming to North Phoenix. We don&apos;t just cut hair; we sculpt confidence. Every visit to our shop is a masterclass in precision and a celebration of community.
                </p>
                
                <div className="pt-12 border-t border-brand-muted mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div>
                    <h4 className="label text-sm mb-4 italic text-brand-accent">Jimmy</h4>
                    <p className="text-[10px] uppercase tracking-widest opacity-40">The Strategist. Scissor Work Master.</p>
                  </div>
                  <div>
                    <h4 className="label text-sm mb-4 italic text-brand-accent">Alex</h4>
                    <p className="text-[10px] uppercase tracking-widest opacity-40">The Architect. Fade Specialist.</p>
                  </div>
                  <div>
                    <h4 className="label text-sm mb-4 italic text-brand-accent">Ayman</h4>
                    <p className="text-[10px] uppercase tracking-widest opacity-40">The Artist. Beard & Razor King.</p>
                  </div>
                </div>
              </div>

              <div className="aspect-[3/4] zoom-container bg-brand-graphite lg:order-2 relative">
                <Image
                  src="/images/regenerated_image_1778325621379.jpg"
                  alt="Phoenix Barbershop Interior"
                  fill
                  className="object-cover grayscale brightness-75"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Typographic Statement */}
        <section className="luxury-section bg-brand-graphite/30 text-center relative overflow-hidden">
          <div className="mb-10 text-center">
            <span className="label text-brand-accent tracking-[0.6em]">The DNA</span>
          </div>
          <h3 className="text-[15vw] italic mix-blend-soft-light opacity-20 select-none">CULTURE.</h3>
        </section>

        {/* Next Page Teaser */}
        <section className="relative h-[80vh] w-full group overflow-hidden">
          <Link href="/services" className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/regenerated_image_1778325622047.jpg"
              alt="Next Page"
              fill
              className="object-cover brightness-[0.4] group-hover:scale-110 transition-transform duration-[3s]"
            />
            <div className="relative z-10 text-center">
              <span className="label text-brand-accent tracking-[1em] mb-8 block opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-1000 uppercase text-[10px]">
                Next: The Craft
              </span>
              <h2 className="text-[8vw] italic text-brand-text">Services</h2>
            </div>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
