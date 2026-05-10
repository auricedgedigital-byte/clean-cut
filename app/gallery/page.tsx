import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const galleryItems = [
  { src: "/images/regenerated_image_1778326581030.jpg", alt: "Master Cut", colSpan: "md:col-span-8", aspect: "aspect-video" },
  { src: "/images/regenerated_image_1778326581814.jpg", alt: "Skin Fade", colSpan: "md:col-span-4", aspect: "aspect-[3/4]" },
  { src: "/images/regenerated_image_1778326583697.jpg", alt: "Beard Sculpt", colSpan: "md:col-span-4", aspect: "aspect-square" },
  { src: "/images/regenerated_image_1778326583079.jpg", alt: "Kids Styling", colSpan: "md:col-span-8", aspect: "aspect-[2/1]" },
];

export default function GalleryPage() {
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
              alt="Barbering Portfolio"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-20 text-center px-8 max-w-4xl">
            <span className="label text-brand-accent tracking-[0.6em] uppercase text-xs block mb-6">
              Visualizing Grooming Mastery
            </span>
            <h1 className="text-[12vw] md:text-[8vw] italic tracking-tighter leading-none mb-10 flex flex-col items-center">
              <span className="uppercase font-bold">Precision</span>
              <span className="text-brand-accent uppercase font-bold -mt-2">In Focus</span>
            </h1>
            <p className="text-brand-text/60 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              Browse our gallery of elite hair transformations. From classic tapers to contemporary textured styles, see why Clean Cut is synonymous with the best haircut results in the Valley.
            </p>
          </div>
        </section>

        <section className="luxury-section container mx-auto">
          <div className="max-w-4xl mb-32">
            <h2 className="label text-brand-accent tracking-widest mb-6">Captured Precision</h2>
            <p className="text-2xl font-light italic opacity-60">
              Real work. Real brothers. Handcrafted profiles from our Bell Road location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {galleryItems.map((item, i) => (
              <div key={i} className={`${item.colSpan} zoom-container relative ${item.aspect} bg-brand-graphite`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover grayscale brightness-75 transition-all duration-1000 hover:grayscale-0 hover:brightness-100"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="relative h-[80vh] w-full group overflow-hidden">
          <Link href="/book" className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/regenerated_image_1778326584680.jpg"
              alt="Next Page"
              fill
              className="object-cover brightness-[0.4] group-hover:scale-110 transition-transform duration-[3s]"
            />
            <div className="relative z-10 text-center">
              <span className="label text-brand-accent tracking-[1em] mb-8 block opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-1000 uppercase text-[10px]">
                Next: Reserve
              </span>
              <h2 className="text-[8vw] italic text-brand-text">The Encounter</h2>
            </div>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
