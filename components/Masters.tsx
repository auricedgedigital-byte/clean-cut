"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const barbers = [
  {
    name: "Jimmy",
    role: "Owner / Scissor Master",
    desc: "15+ years of craft. Architect of the Clean Cut legacy and detail perfectionist.",
    image: "/images/regenerated_image_1778325331665.jpg"
  },
  {
    name: "Alex",
    role: "Fade Architect",
    desc: "Skin fade specialist. Known for transition precision and modern street styling.",
    image: "/images/regenerated_image_1778325330970.jpg"
  },
  {
    name: "Ayman",
    role: "Razor King",
    desc: "Traditional straight razor specialist. Expert in beard sculpting and luxury therapy.",
    image: "/images/regenerated_image_1778325330289.jpg"
  }
];

export default function Masters() {
  return (
    <section className="luxury-section bg-brand-bg container mx-auto">
      <div className="text-center mb-32">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="label text-brand-accent tracking-[1em] mb-8 block"
        >
          The Masters
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl italic"
        >
          Meet The Collective.
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {barbers.map((barber, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group"
          >
            <div className="zoom-container aspect-[3/4] bg-brand-graphite mb-10 overflow-hidden relative">
              <Image
                src={barber.image}
                alt={barber.name}
                fill
                className="object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-1000"
              />
            </div>
            <div>
              <h4 className="text-3xl italic mb-2">{barber.name}</h4>
              <span className="label text-brand-accent text-[10px] tracking-widest block mb-4">
                {barber.role}
              </span>
              <p className="text-sm opacity-40 font-light max-w-xs">
                {barber.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
