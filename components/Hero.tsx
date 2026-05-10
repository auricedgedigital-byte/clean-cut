"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-bg">
      {/* Animated Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2000"
          alt="Clean Cut Premium"
          fill
          className="animate-ken-burns object-cover brightness-[0.4]"
          priority
        />
      </div>

      {/* Layered Atmosphere */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="vignette-heavy absolute inset-0"></div>
        <div className="ambient-glow-amber absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw]"></div>
        <div className="ambient-glow-amber absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] opacity-5"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 text-center px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <div className="overflow-hidden mb-8">
            <motion.span
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }}
              className="label text-brand-accent tracking-[1em] text-[10px] md:text-xs block"
            >
              Establishment of Identity
            </motion.span>
          </div>

          <h1 className="text-[14vw] md:text-[10vw] mb-12 italic leading-[0.8] tracking-tighter">
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "120%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                className="block"
              >
                More Than
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "120%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
                className="block"
              >
                A Haircut.
              </motion.span>
            </div>
          </h1>

          <div className="overflow-hidden mb-12">
            <motion.h2
              initial={{ y: "120%", opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
              className="text-2xl md:text-4xl font-light tracking-tight"
            >
              A System For <span className="text-brand-accent italic">Confidence.</span>
            </motion.h2>
          </div>

          <div className="overflow-hidden max-w-2xl mx-auto mb-16">
            <motion.p
              initial={{ y: "120%", opacity: 0 }}
              animate={{ y: 0, opacity: 0.4 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
              className="text-base md:text-xl font-light leading-relaxed"
            >
              Premium fades, beard sculpting, atmosphere, and effortless booking — built for modern men who want to look sharp without wasting time.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex flex-col md:flex-row items-center justify-center gap-10"
          >
            <Link href="/book" className="btn-luxury group">
              <span className="label">Book Your Cut</span>
              <div className="btn-glow"></div>
            </Link>
            <Link
              href="/services"
              className="label border-b border-white/10 pb-2 hover:border-brand-accent hover:text-brand-accent transition-all duration-500"
            >
              Explore The Craft
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20 hover:opacity-100 transition-all duration-1000 group">
        <span className="label text-[8px] tracking-[0.5em] group-hover:tracking-[0.8em] transition-all">Scroll To Discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent animate-pulse-slow"></div>
      </div>
    </section>
  );
}
