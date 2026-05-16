"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function BookPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    master: "any"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you would send this to an API
  };

  const calendarUrl = () => {
    const title = encodeURIComponent("Barber Appointment @ Clean Cut");
    const details = encodeURIComponent(`Master: ${formData.master}`);
    const location = encodeURIComponent("743 Bell Road, Suite 3, Phoenix, AZ 85022");
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  const whatsappUrl = () => {
    const message = encodeURIComponent(`Hi, I'd like to confirm my booking at Clean Cut for ${formData.name}. Master: ${formData.master}.`);
    return `https://wa.me/16020000000?text=${message}`;
  };

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
              alt="Reserve Your Session"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-20 text-center px-8 max-w-4xl">
            <span className="label text-brand-accent tracking-[0.6em] uppercase text-xs block mb-6">
              Prioritize Your Appearance
            </span>
            <h1 className="text-[12vw] md:text-[8vw] italic tracking-tighter leading-none mb-10 flex flex-col items-center">
              <span className="uppercase font-bold">Secure Your</span>
              <span className="text-brand-accent uppercase font-bold -mt-2">Seat</span>
            </h1>
            <p className="text-brand-text/60 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              Your image is your currency. Book your appointment at Phoenix&apos;s most requested luxury barbershop. Join the ranks of men who understand that precision is non-negotiable.
            </p>
          </div>
        </section>

        <section className="luxury-section lg:flex gap-32">
          <div className="lg:w-1/2 mb-32 lg:mb-0">
            <h2 className="label text-brand-accent tracking-[0.4em] mb-10">Your Appointment</h2>
            <h3 className="text-6xl italic tracking-tighter leading-none mb-12">
              Secure The Edge.
            </h3>
            <p className="text-xl md:text-2xl font-light opacity-60">
              While walk-ins are always welcomed in our culture, we respect the tight schedules of our brotherhood. Reserve your favorite master below for the definitive North Phoenix grooming experience.
            </p>

            <div className="mt-24 space-y-12">
              <div>
                <h4 className="label text-[10px] text-brand-accent tracking-widest mb-4 uppercase">Location</h4>
                <p className="text-2xl font-light">743 Bell Road, Suite 3<br />Phoenix, AZ 85022</p>
              </div>
              <div className="h-[300px] bg-brand-graphite border border-white/5 relative overflow-hidden group">
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
            </div>
          </div>

          <div className="lg:w-1/2 glass-card p-12 md:p-20">
            {!isSubmitted ? (
              <form className="space-y-12" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="border-b border-brand-muted pb-4">
                    <label className="label text-[10px] opacity-40 mb-4 block uppercase">Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-transparent focus:outline-none placeholder:opacity-20 text-xl font-light"
                      placeholder="Brother Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="border-b border-brand-muted pb-4">
                    <label className="label text-[10px] opacity-40 mb-4 block uppercase">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full bg-transparent focus:outline-none placeholder:opacity-20 text-xl font-light"
                      placeholder="(602) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="border-b border-brand-muted pb-4">
                  <label className="label text-[10px] opacity-40 mb-4 block uppercase">The Master</label>
                  <select 
                    className="w-full bg-transparent focus:outline-none appearance-none text-xl font-light cursor-pointer text-brand-text"
                    value={formData.master}
                    onChange={(e) => setFormData({ ...formData, master: e.target.value })}
                  >
                    <option value="any" className="bg-brand-bg">First Available</option>
                    <option value="jimmy" className="bg-brand-bg">Jimmy (Scissor Master)</option>
                    <option value="alex" className="bg-brand-bg">Alex (Fade Architect)</option>
                    <option value="ayman" className="bg-brand-bg">Ayman (Razor King)</option>
                  </select>
                </div>

                <div className="pt-12">
                  <button type="submit" className="w-full btn-luxury">
                    Confirm Reservation
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center space-y-12 py-20">
                <div className="mb-12">
                  <span className="label text-brand-accent tracking-[0.4em] mb-6 block">Reserved</span>
                  <h3 className="text-5xl italic tracking-tighter mb-8">Welcome to the Brotherhood.</h3>
                  <p className="text-xl font-light opacity-60">
                    Your appointment has been secured. We look forward to seeing you at our North Phoenix grounds.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <a 
                    href={calendarUrl()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full btn-luxury block text-center"
                  >
                    <span className="label">Add to Google Calendar</span>
                  </a>
                  
                  <a 
                    href={whatsappUrl()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full label border border-white/10 py-6 hover:bg-white/5 transition-all block text-center"
                  >
                    Confirm via WhatsApp
                  </a>
                  
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-[10px] label opacity-20 hover:opacity-100 transition-opacity uppercase tracking-widest pt-8"
                  >
                    Make another reservation
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="relative h-[80vh] w-full group overflow-hidden">
          <Link href="/" className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/regenerated_image_1778337789227.jpg"
              alt="Clean Cut Shop"
              fill
              className="object-cover brightness-[0.4] group-hover:scale-110 transition-transform duration-[3s]"
            />
            <div className="relative z-10 text-center">
              <span className="label text-brand-accent tracking-[1em] mb-4 block uppercase text-[10px]">
                Next: Home
              </span>
              <h2 className="text-6xl md:text-[8vw] italic text-brand-text">Clean Cut</h2>
            </div>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
