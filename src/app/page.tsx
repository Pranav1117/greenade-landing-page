"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { InstaIcon, TwitterIcon, HamburgerIcon } from "../app/components/Icons";

export default function Home() {
  return (
    <main className="flex bg-gradient-to-r from-[#72A233] to-[#336E31] min-h-screen h-[100vh] w-[100vw]">
      {/* content */}
      <section className="w-[95%]">
        {/* logo and main navbar */}
        <nav className="flex items-center py-4 px-10">
          <motion.div
            className="font-bold text-2xl w-[20%] cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 1 }}
           >
            ART <span className="font-extralight text-2xl">iChoke</span>
          </motion.div>
          <motion.div
            className="mx-auto flex gap-10 w-[80%] justify-center"
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
        <div className="flex ">
          <div className="space-y-8 w-[40%] pl-20 pr-4 py-20 ">
            <motion.div
              className="flex items-end justify-end text-2xl font-bold overflow-hidden"
              initial={{ opacity: 0, clipPath: "inset(0% 0% 0% 100%)" }}
              animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
            >
              01 <span className="text-sm self-end font-light">/ 05</span>
              <div className="ml-2 h-0.5 w-[300px] bg-white"></div>
            </motion.div>

            <motion.div
              className="text-6xl font-bold"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: [50, 0] }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 1 }}
              exit={{ y: 0 }}
            >
              A HEALTHY EXPLOSION
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: [50, 0] }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
              exit={{ y: 0 }}
            >
              This ARTichoke is adelicious nutrient-packed GREENADE and gives
              you all of the energy daily nutrients and health you need
            </motion.div>
            <motion.button
              className="border-1 border-white w-[200px] p-2 cursor-pointer"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: [50, 0] }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 1 }}
              exit={{ y: 0 }}
            >
              READ MORE
            </motion.button>
          </div>
          <div className="w-[60%] flex-flex-col">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: [-50, 20, -10, 5, 0] }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Image
                src={"/greenade.png"}
                height={400}
                width={400}
                priority={true}
                alt="preview"
                className="relative drop-shadow-[40px_50px_25px_#112801] z-30"
              />
            </motion.div>

            <motion.div
              className="z-1 relative bottom-[15%] right-[30%] text-center text-[10rem] font-bold drop-shadow-[40px_50px_25px_#112801]"
              initial={{ opacity: 0, filter: "blur(5px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 3, duration: 0.3 }}
            >
              GREENADE!
            </motion.div>
          </div>
        </div>
      </section>

      {/* Side navbar */}
      <aside className="w-[5%] h-screen bg-gradient-to-t from-[#5B9235] to-transparent p-4 flex flex-col items-center">
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
