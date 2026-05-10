"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    text: "Jimmy and the crew have created something different here. It’s not just a shop, it’s a culture. The sharpest fade in Phoenix, hands down.",
    author: "Mark T. / Member Since 2018"
  },
  {
    text: "Ayman’s attention to detail during the razor shave is unmatched. It’s the reset I look forward to every two weeks.",
    author: "David L. / Loyalty Member"
  },
  {
    text: "I drive 30 minutes just to have Alex shape my beard. Precision, atmosphere, and professional standard. Worth every second.",
    author: "Chris R. / Professional Stylist"
  }
];

export default function Testimonials() {
  return (
    <section className="luxury-section bg-brand-bg relative overflow-hidden">
      <div className="ambient-glow-amber absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] opacity-5"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label text-brand-accent tracking-[1em] mb-8 block"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl italic"
          >
            The Brotherhood.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card group"
            >
              <div className="flex items-center gap-1 mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s}>★</span>
                ))}
              </div>
              <p className="text-xl font-light italic mb-10 opacity-70 group-hover:opacity-100 transition-opacity">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-brand-accent opacity-30"></div>
                <span className="label text-[9px] opacity-40">{review.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
