import React from 'react';
import { motion } from 'framer-motion';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Marquee from "../components/Marquee";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Landing() {
  return (
    <motion.div
      className="overflow-x-hidden absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5, staggerChildren: 0.2 }}
    >
      <motion.div variants={variants}>
        <Navbar />
      </motion.div>
      <motion.div variants={variants}>
        <Hero />
      </motion.div>
      <motion.div className="w-full h-[1px] mt-5 bg-slate-600" variants={variants}></motion.div>
      {/* <motion.div variants={variants}> */}
        <Marquee />
      {/* </motion.div> */}
      <motion.div className="w-full h-[1px] mt-1 bg-slate-600" variants={variants}></motion.div>
      <Features/>
    </motion.div>
  );
}