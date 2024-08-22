import { motion, useMotionValue, useTransform, useAnimate } from "framer-motion";
import Card from "./card";

function Swiper() {

  return (
    <section className="w-screen h-screen overflow-hidden absolute z-5 top-1/4">
        <Card/>
    </section>
  )
}

export default Swiper;