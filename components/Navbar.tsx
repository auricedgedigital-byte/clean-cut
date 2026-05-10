"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-[800] px-8 md:px-20 py-10 transition-all duration-700 flex justify-between items-center",
          isScrolled && "py-6 bg-brand-bg/80 backdrop-blur-xl border-b border-white/5"
        )}
      >
        <Link href="/" className="label text-xl tracking-[0.6em] font-bold text-brand-text">
          CLEAN CUT
        </Link>
        
        <div className="hidden md:flex space-x-12">
          <Link href="/about" className="label hover:text-brand-accent transition-colors">
            Legacy
          </Link>
          <Link href="/services" className="label hover:text-brand-accent transition-colors">
            Services
          </Link>
          <Link href="/gallery" className="label hover:text-brand-accent transition-colors">
            Visuals
          </Link>
          <Link href="/book" className="label hover:text-brand-accent transition-colors">
            Reserve
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="label text-sm px-4 py-2 border border-white/10 rounded-full bg-brand-bg/50 backdrop-blur-md"
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-brand-bg z-[1500] flex flex-col items-center justify-center space-y-10 opacity-0 pointer-events-none transition-all duration-700 ease-in-out",
          isMobileMenuOpen && "opacity-100 pointer-events-auto"
        )}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-10 right-8 label text-brand-accent"
        >
          Close
        </button>
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl italic tracking-tighter hover:text-brand-accent transition-colors duration-500">
          Home
        </Link>
        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl italic tracking-tighter hover:text-brand-accent transition-colors duration-500">
          Legacy
        </Link>
        <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl italic tracking-tighter hover:text-brand-accent transition-colors duration-500">
          Services
        </Link>
        <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl italic tracking-tighter hover:text-brand-accent transition-colors duration-500">
          Visuals
        </Link>
        <Link href="/book" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl italic tracking-tighter hover:text-brand-accent transition-colors duration-500">
          Reserve
        </Link>
      </div>
    </>
  );
}
