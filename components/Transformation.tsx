"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Transformation() {
  return (
    <section className="luxury-section bg-brand-graphite relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <span className="label text-brand-accent tracking-[1em] mb-8 block">Confidence</span>
          <h2 className="text-7xl md:text-[8vw] italic leading-[0.8] mb-12">
            Walk In. <br />
            <span className="text-brand-accent">Leave Sharper.</span>
          </h2>
          <p className="text-xl font-light opacity-60 max-w-md">
            Grooming is more than maintenance. It&apos;s a mental reset. We ensure you step back into the world looking and feeling like an icon.
          </p>
        </motion.div>
        
        <div className="relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="zoom-container aspect-square bg-brand-bg p-2 overflow-hidden border border-white/5 relative"
          >
            <Image
              src="/images/regenerated_image_1778325329513.jpg"
              alt="The Transformation"
              fill
              className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2s]"
            />
          </motion.div>
          <div className="absolute -bottom-8 -right-8 glass-card p-10 hidden md:block">
            <span className="label text-[10px] text-brand-accent block mb-2">Result Focused</span>
            <div className="text-3xl italic">The Reset.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
