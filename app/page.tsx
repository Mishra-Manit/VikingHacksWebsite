import Image from "next/image";
import Link from "next/link";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import DottedLine from "../components/DottedLine";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen h-full bg-black pb-10">
        <Header />
        <div className="border -mt-[1px] m-12 border-neutral-800 p-12">
          {/* main container */}
          <div className="flex flex-col lg:flex-row border border-neutral-800 border-container p-1 h-[60vh] w-full">
            <div className="h-full w-full lg:w-[62%] overflow-hidden relative transition-all">
              <Image
                src={"/eventcenter1.jpeg"}
                alt={"Fremont Downtown Event Center"}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 100%"
                }}
              />
            </div>
            <div className="h-full w-full lg:w-[38%] bg-neutral-300">

            </div>
          </div>
          <div className="items-center flex flex-col my-20">
            <h1 className="font-mono text-[10vw] leading-none">$1,000,000</h1>
            <h2 className="font-mono text-lg text-neutral-300">in prizes</h2>
          </div>
          <DottedLine />
        </div>
        <Footer />
      </main>
    </>
  )
}