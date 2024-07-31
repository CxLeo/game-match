"use client";
import { motion } from "framer-motion";
import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  const handleSearch = () => {
    console.log(query);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
        delay:0.2,
      }}
      className=" w-[50%] h-[70px] mx-auto mt-[100px] z-10 relative flex"
    >
      <input
        value={query}
        onChange={handleChange}
        placeholder="find games like..."
        className="w-[77%] h-full rounded-full pl-10 text-xl shadow-[2px_2px_2px_2px_#ffc145]"
      />
      <button
        onClick={handleSearch}
        className="w-[16.1%] ml-auto bg-white rounded-3xl text-[#ffc145] font-semibold text-5xl"
      >
        Go
      </button>
    </motion.div>
  );
}

export default SearchBar;
