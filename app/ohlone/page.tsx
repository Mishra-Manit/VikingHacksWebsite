import Link from 'next/link';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer'

import Header from "./components/Header"
import Footer from "./components/Footer"
import StyledLink from './components/StyledLink';

export default function Ohlone() {
    return (
        <main className="bg-white text-black min-h-screen w-full overscroll-y-none overflow-x-hidden">
            {/* hero section */}
            <div className="h-screen min-h-[600px] flex flex-col justify-between">
                {/* this is the big text */}
                <div className="">
                    <Header />
                    <div className="w-min flex gap-4 mt-10 mb-5 mx-10">
                        <span className="bg-lime-400 w-min rounded-full px-2">
                            Sponsors
                        </span>
                        <StyledLink href="/prospectus.pdf" target="_blank" text={"Review our prospectus"} className={"w-max"} arrow={true} />
                        {/* <Link href="/prospectus.pdf" target="_blank" className="w-max h-full hover:underline underline-offset-2 decoration-dotted decoration-2 decoration-neutral-500 after:content-['_↗']">
                            Review our prospectus
                        </Link> */}
                    </div>
                    <div className="pointer-events-none font-mono text-[10vw] tracking-tighter leading-none mx-10">
                        We return. <br /> Ohlone awaits
                        <span className="select-none typing-cursor">.</span>
                    </div>
                </div>
                {/* this is register + first section */}
                <div className="mt-10">
                    <div className="flex flex-col sm:flex-row gap-2 mx-10">
                        <Link href="/register" target="_blank" className="rounded-full px-5 text-lg py-3 bg-lime-400 hover:bg-lime-300 hover:shadow-[0_0_15px_0_rgba(163,230,53,0.5)] transition-all">
                            Register now for free
                        </Link>
                        <Link href="/register" target="_blank" className="rounded-full border px-5 text-lg py-3 hover:bg-black hover:text-white hover:border-transparent transition-all">
                            Donate
                        </Link>
                    </div>
                    <div className="text-black my-10 mx-10">
                        <div className="flex justify-between items-end">
                            <Balancer className="w-1/2 sm:w-1/2 text-sm sm:text-lg font-light">
                                Registration is open to all current high school students in the 2023-2024 academic year.
                            </Balancer>
                            <h1 className="w-1/2 font-mono sm:w-1/4 text-right text-2xl lg:text-[3vw] leading-none">//</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* rest of the sections */}
            <div className="">
                <div className="h-[54vh] mx-10 overflow-hidden relative brightness-125 transition-all">
                    <Image
                        src="/group_photo.jpg"
                        alt="2024 Group Photo"
                        fill
                        style={{
                            objectFit: "cover",
                            objectPosition: "50% 100%"
                        }}
                    />
                </div>
                <div className="flex justify-between font-mono mx-10 mt-1 mb-20 text-lg">
                    <text className="">// RECAP</text>
                    <text className="hidden sm:block">IRVINGTON HIGH SCHOOL</text>
                    <StyledLink href="/photos" target="_blank" text={"View Photos"} arrow={true} />
                </div>
                <div className="my-10 mx-10 text-lg">
                    <h1 className="font-mono mb-10">// WHY VIKING HACKS</h1>
                    <div className="grid grid-cols-1 grid-rows-3 divide-y border-y">
                        <div className="py-10">
                            <div className="flex flex-col sm:flex-row justify-between">
                                <h1 className="w-1/6 font-mono font-light">01</h1>
                                <h1 className="w-full sm:w-2/6 text-4xl sm:text-3xl">April 6th, 2024</h1>
                                <div className="w-full sm:w-3/6">
                                    <Balancer className="text-sm lg:text-lg text-justify sm:text-left">Viking Hacks is a one-day event that will be held on April 6th of 2024. From start to finish, it will last 14 hours in total.</Balancer>
                                </div>
                            </div>
                        </div>
                        <div className="py-10">
                            <div className="flex flex-col sm:flex-row justify-between">
                                <h1 className="w-1/6 font-mono font-light">02</h1>
                                <h1 className="w-full sm:w-2/6 text-4xl sm:text-3xl">Completely Free</h1>
                                <div className="w-full sm:w-3/6">
                                    <Balancer className="text-sm lg:text-lg text-justify sm:text-left">Viking Hacks is a one-day event that will be held on April 6th of 2024. From start to finish, it will last 14 hours in total.</Balancer>
                                </div>
                            </div>
                        </div>
                        <div className="py-10">
                            <div className="flex flex-col sm:flex-row justify-between">
                                <h1 className="w-1/6 font-mono font-light">03</h1>
                                <h1 className="w-full sm:w-2/6 text-4xl sm:text-3xl">Fremont, CA</h1>
                                <div className="w-full sm:w-3/6">
                                    <Balancer className="text-sm lg:text-lg text-justify sm:text-left">The venue will be at Irvington High School, in Fremont, California. More information about the venue can be <StyledLink href="/venue" target="_blank" text="found here" arrow={true} /></Balancer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* colored section */}
            <div className="mt-32 bg-lime-400 py-10 flex flex-col items-center">
                {/* CTA */}
                <div className="py-20 flex flex-col items-center gap-2 md:gap-0">
                    <h1 className="text-[10vw] lg:text-[8vw]">
                        Don&apos;t miss out.
                    </h1>
                    <Link href="/ohlone24" target="_self" className="border-4 border-black hover:bg-transparent hover:text-black bg-black text-lime-400 py-2 lg:py-4 px-10 text-[5vw] lg:text-[3vw] rounded-full transition-all">
                        Register now
                    </Link>
                </div>
                <Footer />
            </div>
        </main>
    )
}