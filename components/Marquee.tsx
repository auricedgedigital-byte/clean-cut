"use client";

export default function Marquee() {
  return (
    <section className="relative z-30 py-8 border-y border-white/5 overflow-hidden bg-brand-bg/20 backdrop-blur-sm">
      <div className="flex animate-marquee whitespace-nowrap">
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center gap-16 md:gap-32 px-8 md:px-16">
            <div className="flex items-center gap-3">
              <span className="text-brand-accent text-xs">★</span>
              <span className="label text-[10px] tracking-[0.4em]">4.6 Google Rating</span>
            </div>
            <span className="label text-[10px] tracking-[0.4em]">326+ Reviews</span>
            <span className="label text-[10px] tracking-[0.4em] opacity-50">Trusted Across Phoenix</span>
            <span className="label text-[10px] tracking-[0.4em] text-brand-accent">Open 7 Days</span>
            
            <div className="flex items-center gap-3">
              <span className="text-brand-accent text-xs">★</span>
              <span className="label text-[10px] tracking-[0.4em]">4.6 Google Rating</span>
            </div>
            <span className="label text-[10px] tracking-[0.4em]">326+ Reviews</span>
            <span className="label text-[10px] tracking-[0.4em] opacity-50">Trusted Across Phoenix</span>
            <span className="label text-[10px] tracking-[0.4em] text-brand-accent">Open 7 Days</span>
          </div>
        ))}
      </div>
    </section>
  );
}
