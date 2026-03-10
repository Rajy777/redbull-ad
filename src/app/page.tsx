"use client";

import CanvasScroller from "@/components/CanvasScroller";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative w-full">
      <CanvasScroller />

      <div className="relative z-10 w-full flex flex-col pt-32 pb-32">
        {/* Section 1: Calm Before Energy */}
        <section
          id="story"
          className="h-[150vh] flex flex-col justify-center items-center text-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white/95 text-shadow mb-2 sm:mb-4">
              Some days…
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white/65">
              you just need energy.
            </p>
          </motion.div>
        </section>

        {/* Section 2: The Can Drop */}
        <section className="h-[150vh] flex flex-col justify-center items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white text-shadow drop-shadow-2xl px-2">
              Then something drops in.
            </h2>
          </motion.div>
        </section>

        {/* Section 3: Opening the Can */}
        <section
          id="energy"
          className="h-[150vh] flex flex-col justify-center items-center text-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, type: "spring" }}
            className="glow-blue px-6 sm:px-10 py-6 rounded-3xl bg-redbull-blue-dark/40 backdrop-blur-md w-full max-w-3xl"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-redbull-blue-electric text-shadow mb-2">
              One sip changes everything.
            </h2>
          </motion.div>
        </section>

        {/* Section 4: Energy Transformation */}
        <section
          id="transformation"
          className="h-[150vh] flex flex-col justify-center items-center text-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-9xl font-black text-redbull-yellow tracking-tighter uppercase drop-shadow-[0_0_35px_rgba(255,210,0,0.8)] px-2">
              Energy unlocked.
            </h2>
          </motion.div>
        </section>

        {/* Section 5: Chaos Mode */}
        <section
          id="chaos"
          className="h-[150vh] flex flex-col justify-center items-center text-center px-4"
        >
          <motion.div
            initial={{ x: -100, opacity: 0, skewX: 10 }}
            whileInView={{ x: 0, opacity: 1, skewX: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <h2 className="text-6xl sm:text-7xl md:text-[10rem] font-black italic text-redbull-red tracking-tight uppercase drop-shadow-[0_0_40px_rgba(255,31,45,0.9)] px-2">
              No limits.
            </h2>
          </motion.div>
        </section>

        {/* Section 6: Ultimate Energy */}
        <section
          id="finale"
          className="h-[150vh] flex flex-col justify-center items-center text-center px-4"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-9xl font-black text-white tracking-tighter uppercase text-shadow mb-4 sm:mb-8 leading-tight sm:leading-none">
              UNLEASH YOUR <br />
              <span className="text-redbull-blue-electric glow-blue">ENERGY</span>
            </h2>
          </motion.div>
        </section>


      </div>
    </main>
  );
}
