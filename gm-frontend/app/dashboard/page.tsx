"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Button } from "@/components/ui/moving-border";

const DashBoard = () => {
    const [hovered, setHovered] = React.useState(false);
    const words=`Good gamer, I am the God of Video Game. I know your preference better than yourself. Click this button to get 10 games that you are meant to play.
    
    ( ͡° ͜ʖ ͡° )`
    return (
        <div className="bg-gray-900 flex flex-col w-screen h-screen"> 
            <TextGenerateEffect className="w-1/2 h-fit mx-auto mt-[200px] text-center z-20 whitespace-pre-line " words={words} />
            <div className="w-fit mx-auto h-fit mt-3">
                <Button
                    borderRadius="2.75rem"
                    className="bg-gray-800  text-white border-purple-600 dark:border-slate-800"
                >
                    <svg version="1.1" width="60" height="60" viewBox="0 0 256 256">
                    <defs>
                    </defs>
                    <g className="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                        <path fill="rgb(147 51 234)" d="M 45 73.264 c -14.869 0 -29.775 -8.864 -44.307 -26.346 c -0.924 -1.112 -0.924 -2.724 0 -3.836 C 15.225 25.601 30.131 16.737 45 16.737 c 14.868 0 29.775 8.864 44.307 26.345 c 0.925 1.112 0.925 2.724 0 3.836 C 74.775 64.399 59.868 73.264 45 73.264 z M 6.934 45 C 19.73 59.776 32.528 67.264 45 67.264 c 12.473 0 25.27 -7.487 38.066 -22.264 C 70.27 30.224 57.473 22.737 45 22.737 C 32.528 22.737 19.73 30.224 6.934 45 z" className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(97,48,130); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                        <path fill="rgb(147 51 234)" d="M 45 62 c -9.374 0 -17 -7.626 -17 -17 s 7.626 -17 17 -17 s 17 7.626 17 17 S 54.374 62 45 62 z M 45 34 c -6.065 0 -11 4.935 -11 11 s 4.935 11 11 11 s 11 -4.935 11 -11 S 51.065 34 45 34 z" className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill:rgb(97,48,130); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                    </g>
                    </svg>
                </Button>
            </div>
            <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex flex-col overflow-hidden items-center justify-center bg-black gap-4 px-8 relative w-1/2 border-purple-800 mx-auto my-auto h-1/3  rounded-md shadow-md border-2"
            >
              {/*content in box */}  
            
     
            <AnimatePresence>
                {hovered && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full w-full absolute inset-0"
                >
                    <CanvasRevealEffect
                    animationSpeed={5}
                    containerClassName="bg-transparent"
                    colors={[
                        [59, 130, 246],
                        [139, 92, 246],
                    ]}
                    opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
                    dotSize={2}
                    />
                </motion.div>
                )}
            </AnimatePresence>
            {/* Radial gradient for the cute fade */}
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </div></div>
    )
}

export default DashBoard;
