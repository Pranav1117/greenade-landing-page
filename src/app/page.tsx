"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { InstaIcon, TwitterIcon, HamburgerIcon } from "../app/components/Icons";

export default function Home() {
  const [animateProp, setAnimateProp] = useState({
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: [-50, 20, -10, 5, 0] },
    transition: { duration: 1, ease: "easeOut" },
  });
  useEffect(() => {
    if (window.innerWidth < 768) {
      setAnimateProp({
        initial: { opacity: 0, x: 0 },
        animate: { opacity: 1, x: [0, 0, "25%"] },
        transition: { duration: 1, ease: "easeInOut" },
      });
    }
  }, []);
  return (
    <main className=" overflow-hidden flex flex-col md:flex-row bg-gradient-to-r from-[#72A233] to-[#336E31] min-h-screen min-w-screen md:w-[100vw]">
      {/* content */}
      <section className="md:w-[95%]">
        {/* logo and main navbar */}
        <nav className="flex items-center py-4 px-4 justify-between md:px-10">
          <motion.div
            className="font-bold text-md md:text-2xl md:w-[20%] cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 1 }}
          >
            ART
            <span className="font-extralight text-md md:text-2xl">iChoke</span>
          </motion.div>

          <motion.div
            className="md:mx-auto text-sm md:text-lg flex gap-4 md:gap-10 md:w-[80%] justify-end md:justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 1 }}
          >
            <Link href={"/"} className="cursor-pointer">
              Home
            </Link>
            <Link href={"/"} className="cursor-pointer">
              About Us
            </Link>
            <Link href={"/"} className="cursor-pointer">
              Contact
            </Link>
          </motion.div>
        </nav>
        {/* center content */}
        <div className="flex gap-10 md:gap-0 flex-row mt-30 md:mt-0">
          <div className="space-y-5 justify-end md:space-y-8 w-[75%] md:w-[40%] p-2 md:pl-20 md:pr-4 md:py-20 ">
            <motion.div
              className="flex px-4 md:px-0 items-end w-[100%] justify-end text-md md:text-2xl font-bold"
              initial={{ opacity: 0, clipPath: "inset(0% 0% 0% 100%)" }}
              animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
            >
              01 <span className="text-xs self-end font-light">/ 05</span>
              <div className="ml-2 h-0.5 w-[150px] md:w-[300px] bg-white"></div>
            </motion.div>

            <motion.div
              className="text-2xl md:text-6xl font-bold"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: [50, 0] }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 1 }}
              exit={{ y: 0 }}
            >
              A HEALTHY EXPLOSION
            </motion.div>
            <motion.div
              className="text-sm md:text-lg text-justify md:text-start"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: [50, 0] }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
              exit={{ y: 0 }}
            >
              This ARTichoke is adelicious nutrient-packed GREENADE and gives
              you all of the energy daily nutrients and health you need
            </motion.div>
            <motion.button
              className="border-1 border-white w-[130px] md:w-[200px] p-2 cursor-pointer"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: [50, 0] }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 1 }}
              exit={{ y: 0 }}
            >
              READ MORE
            </motion.button>
          </div>

          <div className="w-[20%] md:w-[60%] flex flex-col items-center md:items-start">
            <motion.div
              initial={animateProp.initial}
              animate={animateProp.animate}
              transition={animateProp.transition}
              className="relative h-[400px] w-[300px] md:h-[550px] md:w-[500px] z-100"
            >
              <Image
                src={"/greenade.png"}
                fill={true}
                priority={true}
                alt="preview"
                className="relative drop-shadow-[40px_50px_25px_#112801] z-30 object-contain"
              />
            </motion.div>

            <motion.div
              className="z-1 relative right-[200%] md:bottom-[15%] md:right-[30%] text-center text-[3.5rem] md:text-[10rem] font-bold drop-shadow-[40px_50px_25px_#112801]"
              initial={{ opacity: 0, filter: "blur(5px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 2.5, duration: 0.3 }}
            >
              GREENADE!
            </motion.div>
          </div>
        </div>
      </section>

      {/* Side navbar */}
      <aside className="hidden md:flex md:w-[5%] h-screen bg-gradient-to-t from-[#5B9235] to-transparent p-4 flex-col items-center">
        <div className="h-[10%] cursor-pointer">
          <HamburgerIcon />
        </div>

        <div className="space-y-4 h-[90%]">
          <div className="w-0.5 h-[30%] rounded-2xl bg-white mx-auto"></div>
          <div className="border-b border h-10 w-10 rounded-full flex justify-center items-center p-2 cursor-pointer text-xl">
            f
          </div>
          <div className="border-b border h-10 w-10 rounded-full flex justify-center items-center p-2 cursor-pointer">
            <InstaIcon />
          </div>
          <div className="border-b border h-10 w-10 rounded-full flex justify-center items-center p-2 cursor-pointer">
            <TwitterIcon />
          </div>
          <div className="w-0.5 h-[30%] rounded-2xl bg-white mx-auto"></div>
        </div>
      </aside>
    </main>
  );
}
