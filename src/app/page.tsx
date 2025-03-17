import Image from "next/image";
import Link from "next/link";
import motion from "motion";
import * as Icons from "../app/components/Icons";

export default function Home() {
  return (
    <main className="flex bg-gradient-to-r from-[#72A233] to-[#336E31] h-[100vh] w-[100vw] ">
      {/* content */}
      <section className="w-[95%]">
        {/* logo and main navbar */}
        <nav className="flex items-center py-4 px-10">
          <div className="font-bold text-2xl w-[20%] cursor-pointer">
            ART <span className="font-extralight text-2xl">iChoke</span>
          </div>
          <div className="mx-auto flex gap-10 w-[80%] justify-center">
            <Link href={"/"} className="cursor-pointer">
              Home
            </Link>
            <Link href={"/"} className="cursor-pointer">
              About Us
            </Link>
            <Link href={"/"} className="cursor-pointer">
              Contact
            </Link>
          </div>
        </nav>

        {/* center content */}
        <div className="flex ">
          <div className="space-y-8 w-[40%] pl-20 pr-4 py-20 ">
            <div className="flex items-end justify-end text-2xl font-bold">
              01 <span className="text-sm self-end font-light">/ 05</span>
              <div className="ml-2 h-0.5 w-[300px] bg-white"></div>
            </div>
            <div className="text-6xl font-bold">A HEALTHY EXPLOSION</div>
            <div>
              This ARTichoke is adelicious nutrient-packed GREENADE and gives
              you all of the energy daily nutrients and health you need
            </div>
            <button className="border-1 border-white w-[200px] p-2 cursor-pointer">
              READ MORE
            </button>
          </div>
          <div className="w-[60%] flex-flex-col">
            <Image
              src={"/greenade.png"}
              height={400}
              width={400}
              alt="preview"
              className="relative drop-shadow-[40px_50px_25px_#112801] z-30"
            />
            <div className="z-1 relative bottom-[15%] right-[30%] text-center text-[10rem] font-bold drop-shadow-[40px_50px_25px_#112801]">
              GREENADE!
            </div>
          </div>
        </div>
      </section>

      {/* Side navbar */}
      <aside className="w-[5%] h-screen bg-gradient-to-t from-[#5B9235] to-transparent p-4 flex flex-col items-center">
        <div className="h-[10%] cursor-pointer">
          <Icons.HamburgerIcon />
        </div>

        <div className="space-y-4 h-[90%]">
          <div className="w-0.5 h-[30%] rounded-2xl bg-white mx-auto"></div>
          <div className="border-b border h-10 w-10 rounded-full flex justify-center items-center p-2 cursor-pointer text-xl">
            f
          </div>
          <div className="border-b border h-10 w-10 rounded-full flex justify-center items-center p-2 cursor-pointer">
            <Icons.InstaIcon />
          </div>
          <div className="border-b border h-10 w-10 rounded-full flex justify-center items-center p-2 cursor-pointer">
            <Icons.TwitterIcon />
          </div>
          <div className="w-0.5 h-[30%] rounded-2xl bg-white mx-auto"></div>
        </div>
      </aside>
    </main>
  );
}
