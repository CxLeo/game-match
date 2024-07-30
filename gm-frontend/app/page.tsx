import Image from "next/image";
import Link from "next/link";
import HeroText from "@/components/home/HeroText";
import HeroBackground from "@/components/home/HeroBackground";
import SearchBar from "@/components/home/SearchBar";
import Overlay from "@/components/home/Overlay";

export default function Home() {
  return (
    <main className=" w-screen h-screen bg-gradient-to-br from-[#2446BE] to-[#D99C98] relative overflow-hidden">
        <Overlay/>
        <h1 className="relative max-w-[43%] h-fit mx-auto 2xl:text-[96px] lg:text-[64px] font-semibold text-white pt-[10%] z-10" >
          Find <span className="text-[#E4AC3E]">games</span> to play
        </h1>

        <HeroText/>
        <SearchBar/>
        <HeroBackground/>
        
        
      
    </main>
  );
}