"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      {/* Final Cinematic Booking CTA */}
      <section className="h-screen relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/regenerated_image_1778325332033.jpg"
            alt="Take Your Seat"
            fill
            className="object-cover brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-brand-bg opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <span className="label text-brand-accent tracking-[1.5em] mb-12 block">The Encounter</span>
            <h2 className="text-6xl md:text-[10vw] italic tracking-tighter mb-16">Take Your Seat.</h2>
            <div>
              <Link href="/book" className="btn-luxury inline-block group">
                <span className="label text-lg">Reserve Your Appointment</span>
                <div className="btn-glow"></div>
              </Link>
            </div>
            <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-12 opacity-40">
              <span className="label text-[9px]">Open 7 Days</span>
              <span className="label text-[9px]">Walk-ins Welcome</span>
              <span className="label text-[9px]">Established 2015</span>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="pt-48 pb-12 bg-brand-bg px-8 md:px-20 border-t border-brand-muted">
        <div className="container mx-auto">
          {/* Shop Location Map */}
          <section className="max-w-7xl mx-auto px-8 md:px-20 mb-32">
            <div className="mb-12 text-center md:text-left">
              <span className="label text-brand-accent tracking-[1em] mb-4 block">Our Grounds</span>
              <h2 className="text-4xl md:text-6xl italic tracking-tighter">North Phoenix.</h2>
            </div>
            <div className="h-[400px] md:h-[600px] w-full bg-brand-graphite border border-white/5 relative group overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.695749604126!2d-112.063637!3d33.63913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b6e3dbbe35483%3A0xa2e19f18ba4e3000!2s743%20Bell%20Rd%20%233%2C%20Phoenix%2C%20AZ%2085022!5e0!3m2!1sen!2sus!4v1778928813063!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border border-white/10 z-10"></div>
              <div className="absolute inset-0 bg-brand-accent/5 pointer-events-none mix-blend-overlay"></div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="md:col-span-2">
              <h5 className="label text-2xl mb-8 tracking-[0.4em]">CLEAN CUT</h5>
              <p className="text-xl font-light opacity-40 leading-relaxed max-w-sm italic">
                Precision grooming and elite brotherhood. Phoenix&apos;s premier barber collective since 2015.
              </p>
            </div>
            <div>
              <h6 className="label text-xs text-brand-accent mb-8 uppercase tracking-widest">Location</h6>
              <p className="text-sm leading-loose opacity-60">
                743 Bell Road, Suite 3<br />
                Phoenix, AZ 85022
              </p>
            </div>
            <div>
              <h6 className="label text-xs text-brand-accent mb-8 uppercase tracking-widest">Hours</h6>
              <ul className="text-sm leading-loose opacity-60">
                <li>Mon–Sat / 09:00 – 19:00</li>
                <li>Sun / 10:00 – 17:00</li>
              </ul>
            </div>
          </div>
          <div className="mt-32 pt-8 border-t border-brand-muted flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-8 opacity-20">
              <span className="label text-[10px]">© 2025 CLEAN CUT</span>
              <span className="label text-[10px]">DESIGNED FOR THE MODERN ICON</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="label text-[10px] text-brand-accent italic">Claim your template</span>
              <Link href="https://trimly.ai" target="_blank" className="glass-pill text-[9px] label hover:text-brand-accent transition-colors">
                Start Trimly Trial
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
