"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Craftsmanship() {
  return (
    <section className="luxury-section relative overflow-hidden bg-brand-bg">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <span className="label text-brand-accent tracking-[1em] mb-8 block">The Craft</span>
            <h2 className="text-6xl md:text-[6vw] italic leading-[0.9] tracking-tighter max-w-4xl">
              <div>Precision In Every</div>
              <div className="text-brand-accent">Movement.</div>
            </h2>
          </motion.div>
        </div>

        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="zoom-container aspect-[3/4] bg-brand-graphite group relative"
          >
            <Image
              src="/images/regenerated_image_1778325326194.png"
              alt="Razor Detail"
              fill
              className="object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg to-transparent opacity-60"></div>
            <div className="absolute bottom-10 left-10">
              <span className="label text-[9px] opacity-40">01 / Detail Focus</span>
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-7 flex flex-col justify-center space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="max-w-xl"
          >
            <p className="text-2xl md:text-3xl font-light italic leading-relaxed opacity-60 mb-12">
              &quot;The chair is a system. It’s where your week&apos;s fatigue ends and your confidence begins. We don’t just cut hair; we sculpt an identity.&quot;
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="label text-brand-accent mb-4">Elite Tapering</h4>
                <p className="text-sm opacity-40 font-light leading-loose">
                  Seamless transitions, architectural fades, and the sharpest profiles in the valley.
                </p>
              </div>
              <div>
                <h4 className="label text-brand-accent mb-4">Master Shaving</h4>
                <p className="text-sm opacity-40 font-light leading-loose">
                  Traditional hot towel service using the heritage straight razor technique.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
