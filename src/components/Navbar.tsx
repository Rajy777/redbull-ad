"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 h-[60px] flex items-center justify-between px-8 ${isScrolled ? "bg-redbull-black/75 backdrop-blur-md" : "bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Left: Logo */}
            <div className="text-xl font-bold tracking-tighter text-white cursor-pointer hover:text-redbull-red transition-colors">
                RED BULL
            </div>

            {/* Center: Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-tight text-white/80">
                {["Story", "Energy", "Transformation", "Chaos", "Finale"].map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        className="hover:text-white transition-colors relative group"
                    >
                        {link}
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-redbull-blue-electric group-hover:w-full transition-all duration-300 glow-blue"></span>
                    </a>
                ))}
            </div>

            {/* Right: CTA */}
            <button className="bg-redbull-red hover:bg-redbull-red/90 text-white font-bold text-sm tracking-tight px-6 py-2 rounded-full shadow-[0_0_15px_rgba(255,31,45,0.4)] hover:shadow-[0_0_25px_rgba(255,31,45,0.8)] transition-all transform hover:scale-105">
                Drink the Energy
            </button>
        </motion.nav>
    );
}
