import Header from "./components/Header"

export default function Ohlone() {
    return (
        <main className="bg-white text-black min-h-screen w-full overscroll-y-none overflow-x-hidden">
            <Header />
            <div className="p-10">
                {/* this is the big text */}
                <div className="font-mono text-[10vw] tracking-tighter leading-none">
                    We return. <br /> Ohlone awaits
                    <span className="typing-cursor">
                    .</span>
                </div>
            </div>
        </main>
    )
}