"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: "beach-breeze",
    name: "Red Bull Summer Edition",
    tagline: "Beach Breeze",
    image: "/images/960516123-ECOM_nobg.png",
    link: "https://www.amazon.co.uk/s?k=Red+Bull+Beach+Breeze",
    color: "from-[#00BFFF] to-[#1E90FF]",
    glowColor: "rgba(0, 191, 255, 0.15)",
    buttonColor: "bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500",
  },
  {
    id: "lilac",
    name: "Red Bull Lilac Edition",
    tagline: "Woodruff / Pink Grapefruit",
    image: "/images/RedBullLilacPinkGrapefruit_Woodruff250ml_nobg.png",
    link: "https://www.amazon.co.uk/s?k=Red+Bull+Woodruff",
    color: "from-[#DDA0DD] to-[#BA55D3]",
    glowColor: "rgba(221, 160, 221, 0.15)",
    buttonColor: "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500",
  },
  {
    id: "peach",
    name: "Red Bull Peach Edition",
    tagline: "Peach-Nectarine",
    image: "/images/images (1)_nobg.png",
    link: "https://www.amazon.co.uk/s?k=Red+Bull+Peach+Edition",
    color: "from-[#FFA07A] to-[#FF7F50]",
    glowColor: "rgba(255, 160, 122, 0.15)",
    buttonColor: "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500",
  },
  {
    id: "tropical",
    name: "Red Bull Yellow Edition",
    tagline: "Tropical Taste",
    image: "/images/download (1)_nobg.png",
    link: "https://www.amazon.co.uk/s?k=Red+Bull+Tropical",
    color: "from-[#FFD200] to-[#b39500]",
    glowColor: "rgba(255, 210, 0, 0.15)",
    buttonColor: "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-300 hover:to-yellow-400",
  },
  {
    id: "cactus-fruit",
    name: "Red Bull Green Edition",
    tagline: "Cactus Fruit",
    image: "/images/images_nobg.png",
    link: "https://www.amazon.co.uk/s?k=Red+Bull+Cactus+Fruit",
    color: "from-[#00FA9A] to-[#2E8B57]",
    glowColor: "rgba(0, 250, 154, 0.15)",
    buttonColor: "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500",
  }
];

export default function ProductShowcase() {
  return (
    <section id="shopping" className="relative z-10 w-full min-h-screen bg-redbull-black py-24 sm:py-32 overflow-hidden flex flex-col justify-center">
      {/* Background Gradient Continuation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-redbull-black/80 to-redbull-black pointer-events-none" />

      <div className="relative z-20 w-full max-w-screen-2xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24 px-4"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Choose Your Energy
          </h2>
          <p className="text-xl sm:text-2xl text-white/50 font-medium">
            Find the perfect companion for your day.
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="w-full relative px-4 sm:px-8 xl:px-16 w-full max-w-[100vw]">
          <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 sm:gap-12 pb-16 pt-8 px-4 sm:px-16 lg:px-32 relative">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="relative snap-center shrink-0 w-[280px] sm:w-[360px] md:w-[400px] flex flex-col items-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Product Card Glow Background */}
                <div
                  className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[60%] sm:h-[80%] rounded-[100%] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                  style={{ background: product.glowColor }}
                />

                <div className="relative w-full aspect-[2/3] sm:aspect-[3/4] mb-8 flex justify-center items-center">
                  <motion.div 
                    className="relative w-[140px] h-[350px] sm:w-[180px] sm:h-[450px] drop-shadow-2xl z-10"
                    whileHover={{ rotate: [0, -2, 2, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                        sizes="(max-width: 768px) 140px, 180px"
                        unoptimized
                      />
                  </motion.div>
                </div>

                <div className="text-center z-20 w-full flex flex-col items-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-lg text-white/60 mb-8 min-h-[56px] flex items-center justify-center">
                    {product.tagline}
                  </p>

                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-8 py-3 rounded-full font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${product.buttonColor}`}
                    style={{
                      boxShadow: `0 4px 20px ${product.glowColor}`
                    }}
                  >
                    Buy Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Fading edges to indicate scroll */}
          <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-24 bg-gradient-to-r from-redbull-black to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-24 bg-gradient-to-l from-redbull-black to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
