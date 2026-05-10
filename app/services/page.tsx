import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const services = [
  { id: "01", name: "Standard Cut", desc: "Precision Shear + Machine Work", price: "$45" },
  { id: "02", name: "Skin Fade", desc: "Master-level Gradients", price: "$50" },
  { id: "03", name: "Hot Towel Shave", desc: "Straight Razor + Steam Oils", price: "$40" },
  { id: "04", name: "Beard Sculpt", desc: "Definition & Architecture", price: "$30" },
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen">
      <div className="cinematic-foundation">
        <div className="grain"></div>
        <div className="vignette"></div>
        <div className="ambient-glow"></div>
      </div>

      <Navbar />

      <main>
        <section className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/regenerated_image_1778337789227.jpg"
              alt="Master Barbering Services"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-20 text-center px-8 max-w-4xl">
            <span className="label text-brand-accent tracking-[0.6em] uppercase text-xs block mb-6">
              Phoenix&apos;s Elite Grooming Menu
            </span>
            <h1 className="text-[12vw] md:text-[8vw] italic tracking-tighter leading-none mb-10 flex flex-col items-center">
              <span className="uppercase font-bold">Crafted</span>
              <span className="text-brand-accent uppercase font-bold -mt-2">Excellence</span>
            </h1>
            <p className="text-brand-text/60 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed mb-12">
              From sharp skin fades and beard detailed sculpting to luxury hot towel straight-razor shaves, our curated services are designed for the high-end gentleman. Experience the best barbering standards in North Phoenix.
            </p>
            <Link href="/book" className="btn-luxury inline-block text-sm">
              Schedule Your Transformation
            </Link>
          </div>
        </section>

        <section className="luxury-section container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="mb-32">
              <h2 className="label text-brand-accent tracking-widest mb-6">Signature Services</h2>
              <p className="text-2xl font-light italic opacity-60">
                Tailored profiles, precision fades, and traditional straight razor finishes from the best barbers in Phoenix.
              </p>
            </div>

            <div className="border-t border-brand-muted">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group py-12 border-b border-brand-muted flex flex-col md:flex-row md:items-center justify-between transition-all duration-500 hover:bg-brand-muted px-4"
                >
                  <div className="flex items-center space-x-12">
                    <span className="label text-xs opacity-20 group-hover:opacity-100 transition-opacity">
                      {service.id}
                    </span>
                    <div>
                      <h3 className="text-4xl md:text-6xl italic transition-transform duration-500 group-hover:translate-x-4">
                        {service.name}
                      </h3>
                      <p className="label text-[10px] opacity-40 mt-2">{service.desc}</p>
                    </div>
                  </div>
                  <div className="text-right mt-6 md:mt-0">
                    <span className="text-4xl italic text-brand-accent">{service.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative h-[80vh] w-full group overflow-hidden">
          <Link href="/gallery" className="absolute inset-0 flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=2000"
              alt="Next Page"
              fill
              className="object-cover brightness-[0.4] group-hover:scale-110 transition-transform duration-[3s]"
            />
            <div className="relative z-10 text-center">
              <span className="label text-brand-accent tracking-[1em] mb-8 block opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-1000 uppercase text-[10px]">
                Next: The Gallery
              </span>
              <h2 className="text-[8vw] italic text-brand-text">Visuals</h2>
            </div>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
