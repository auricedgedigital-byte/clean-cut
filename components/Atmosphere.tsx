"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Atmosphere() {
  return (
    <section className="h-[80vh] relative overflow-hidden group">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=2000"
          alt="Shop Vibe"
          fill
          className="object-cover brightness-[0.3] group-hover:scale-105 transition-transform duration-[5s]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-transparent to-brand-bg"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <span className="label text-brand-accent tracking-[1em] mb-12 block">Atmosphere</span>
          <h3 className="text-5xl md:text-[8vw] italic leading-none tracking-tighter mb-12 opacity-80">
            The Standard.
          </h3>
          <p className="max-w-2xl text-xl font-light opacity-60">
            Warm lighting, tailored playlists, and the brothers waiting at the station. This is where modern men find their rhythm.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
