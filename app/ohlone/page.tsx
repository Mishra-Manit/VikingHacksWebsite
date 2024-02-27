import Link from 'next/link';
import Header from "./components/Header"

export default function Ohlone() {
    return (
        <main className="bg-white text-black min-h-screen w-full overscroll-y-none overflow-x-hidden">
            <Header />
            <div className="p-10 my-5">
                {/* this is the big text */}
                <div className="font-mono w-min flex flex-col sm:flex-row gap-4 mb-10 sm:mb-0">
                    <span className="bg-lime-400 w-min px-2">
                        SPONSORS
                    </span>
                    <Link href="/prospectus.pdf" target="_blank" className="w-max h-full hover:underline underline-offset-2 decoration-dotted decoration-2 decoration-neutral-500 after:content-['_↗']">
                        Review our prospectus
                    </Link>
                </div>
                <div className="pointer-events-none font-mono text-[10vw] tracking-tighter leading-none">
                    We return. <br /> Ohlone awaits
                    <span className="typing-cursor">.</span>
                </div>
            </div>
        </main>
    )
}