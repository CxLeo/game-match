'use client'
import getGamesCover from "@/api/getGamesCover";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from 'react';

interface Img{
    name:string,
    url:string
}

export default function HeroBackground() {
    
    const images1:Img[]=[
        {url:"/nightmares-3.webp",name:"Nightmares 3"},
        {url:"/mhw.webp",name:"Monster Hunter: World"},
        {url:"/bloodborne.webp",name:"Bloodborne"},
        {url:"/blackmyth.webp",name:"Black Myth: Wukong"},
        {url:"/codevein.webp",name:"Code Vein"},
    ];
    const images2:Img[]=[
        {url:"/nightmares-3.webp",name:"Nightmares 3"},
        {url:"/mhw.webp",name:"Monster Hunter: World"},
        {url:"/bloodborne.webp",name:"Bloodborne"},
        {url:"/blackmyth.webp",name:"Black Myth: Wukong"},
        {url:"/codevein.webp",name:"Code Vein"},
    ];
    const images3:Img[]=[
        {url:"/nightmares-3.webp",name:"Nightmares 3"},
        {url:"/mhw.webp",name:"Monster Hunter: World"},
        {url:"/bloodborne.webp",name:"Bloodborne"},
        {url:"/blackmyth.webp",name:"Black Myth: Wukong"},
        {url:"/codevein.webp",name:"Code Vein"},
    ];


    return (
        <motion.div 
        initial={{rotate:-30}}
         className="grid grid-cols-3 grid-rows-1 gap-x-4 -right-[700px] -top-[500px] bg-green-30 overflow-hidden absolute z-0">
            <div className="absolute w-full h-full z-">
                <div className=" bg-gradient-to-b from-[#2446BE] to-[#00000000]" />
            </div>
             <motion.div 
             initial={{ y:"0%" }}
             animate={{ y: ["0%", -1840] }}
             transition={{
               duration: 40, // Adjust the duration as needed
               ease: "linear",
               repeat: Infinity,
               repeatType:'loop',
               repeatDelay:0,
             }}
              className="grid grid-cols-1 grid-rows-10 gap-y-4 w-[264px] h-[3664px]">
                {[...images1, ...images1].map((img,idx) =>(
                    <div  key={idx*3/2-1} className="max-w-[264px] max-h-[352px] bg-gray-500 rounded-[12px] relative">
                        <Image src={img.url} fill alt={img.name} className="rounded-[12px]"  priority/>
                    </div>
                ))}
            </motion.div>
            <motion.div 
             initial={{ y:-200 }}
             animate={{ y: [-200,  -2040] }}
             transition={{
               duration: 45, // Adjust the duration as needed
               ease: "linear",
               repeat: Infinity,
               repeatType:'loop',
               repeatDelay:0,
             }}
              className="grid grid-cols-1 grid-rows-10 gap-y-4 w-[264px] h-[3664px]">
                {[...images2, ...images2].map((img,idx) =>(
                    <div  key={idx*3/2-1} className="max-w-[264px] max-h-[352px] bg-gray-500 rounded-[12px] relative">
                       <Image src={img.url} fill alt={img.name} className="rounded-[12px]"  priority/>
                    </div>
                ))}
            </motion.div>
            <motion.div 
             initial={{ y:-500 }}
             animate={{ y: [-500,  -2340] }}
             transition={{
               duration: 50, // Adjust the duration as needed
               ease: "linear",
               repeat: Infinity,
               repeatType:'loop',
               repeatDelay:0,
             }}
              className="grid grid-cols-1 grid-rows-10 gap-y-4 w-[264px] h-[3664px]">
                {[...images3, ...images3].map((img,idx) =>(
                    <div  key={idx*3/2-1} className="max-w-[264px] max-h-[352px] bg-gray-500 rounded-[12px] relative">
                        <Image src={img.url} fill alt={img.name} className="rounded-[12px]"  priority/>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    )
}
