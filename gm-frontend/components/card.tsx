"use client"
import { motion, PanInfo, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';


function Card({index}:{
    index:number
}) {
    const controls = useAnimation();
    const [dragging, setDragging] = useState(false);
    const [width,setWidth] = useState(1440);

    useEffect(()=>{
        setWidth(window.innerWidth);
    },[]);

    const handleDrag = (event: MouseEvent | TouchEvent, info: PanInfo) => {
        setDragging(true);
        controls.set({ x: info.offset.x, y: info.offset.y });
    };

    const handleDragEnd = (event: MouseEvent | TouchEvent, info: PanInfo) => {
        setDragging(false);
        const threshold = width / 3;

        if (info.offset.x > threshold) {
            controls.start({ x: width, opacity: 0 });
          } else if (info.offset.x < -threshold) {
            controls.start({ x: -width, opacity: 0 });
          } else {
            controls.start({ x: 0, y: 0});
          }
    };

  return (
    <motion.div
        drag="x"
        dragConstraints={{ left: -width, right: width }}
        dragElastic={0.1}
        animate={controls}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}

    
        className= {` translate-x-${index} max-w-[1120px] border-2 border-gray-500 absolute w-[77.7%]  h-[533px] bg-white rounded-lg text-center shadow-[5px_15px_4px_5px_#77215426]`} >
        card info
    </motion.div>
  )
}

export default Card;