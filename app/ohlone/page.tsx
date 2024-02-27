import Link from 'next/link';
import Image from 'next/image';
import Header from "./components/Header"

export default function Ohlone() {
    return (
        <main className="bg-white text-black min-h-screen w-full overscroll-y-none overflow-x-hidden">
            {/* hero section */}
            <div className="h-screen flex flex-col justify-between">
                {/* this is the big text */}
                <div className="">
                    <Header />
                    <div className="font-mono w-min flex flex-col sm:flex-row gap-4 mt-10 mb-5 mx-10">
                        <span className="bg-lime-400 w-min px-2">
                            SPONSORS
                        </span>
                        <Link href="/prospectus.pdf" target="_blank" className="w-max h-full hover:underline underline-offset-2 decoration-dotted decoration-2 decoration-neutral-500 after:content-['_↗']">
                            Review our prospectus
                        </Link>
                    </div>
                    <div className="pointer-events-none font-mono text-[10vw] tracking-tighter leading-none mx-10">
                        We return. <br /> Ohlone awaits
                        <span className="select-none typing-cursor">.</span>
                    </div>
                </div>
                {/* this is register + first section */}
                <div className="mt-10">
                    <div className="flex flex-col sm:flex-row gap-2 mx-10">
                        <Link href="/register" target="_blank" className="px-5 text-lg py-3 font-mono bg-lime-400 hover:bg-lime-300">
                            REGISTER NOW
                        </Link>
                        <Link href="/register" target="_blank" className="border px-5 text-lg py-3 font-mono hover:bg-black hover:text-white hover:border-transparent">
                            DONATE
                        </Link>
                    </div>
                    <div className="text-black font-mono my-10 mx-10">
                        <div className="flex justify-between items-end">
                            <text className="w-1/2 sm:w-1/4 text-sm sm:text-lg">
                                Network with like-minded tech enthusiasts from all over the Bay Area.
                            </text>
                            <h1 className="w-1/2 sm:w-1/4 text-right text-2xl lg:text-[3vw] leading-none">Collaborate with peers</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* rest of the sections */}
            <div className="my-10">
                <div className="h-[70vh] mx-10 overflow-hidden relative hue-rotate-[20deg] brightness-125 transition-all">
                    <Image
                        src="group_photo.jpg"
                        alt="2024 Group Photo"
                        fill
                        style={{
                            objectFit: "cover",
                            objectPosition: "50% 90%"
                        }}
                    />
                </div>
                <div className="flex justify-between font-mono mx-10 my-10 text-lg">
                    <text>LATEST EVENT</text>
                    <text>IRVINGTON HIGH SCHOOL</text>
                    <Link href="/photos" target="_blank" className="underline underline-offset-4 decoration-dotted decoration-neutral-500 after:content-['_↗']">
                        View Photos
                    </Link>
                </div>
            </div>
        </main>
    )
}