'use client'
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";


function HeroText() {
  return (
    <motion.h4
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 0.65,
          y: [20, -5 , 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
          className="text-[32px] relative px-4 text-center text-white h-fit max-w-[37%] mx-auto mt-[60px] z-10"
        >
         {`Discovered through the things you already love  `}
          <Highlight className="text-white">
          with the power of <span className="text-[#ffc145]">AI</span>
          </Highlight>
        </motion.h4>

  )
}



export default HeroText
