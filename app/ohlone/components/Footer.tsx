export default function Footer() {
    return (
        <div className="mx-10 font-mono h-max">
            <div className="flex flex-col sm:flex-row justify-between mt-20 mb-10 sm:-mb-10">
                <text>
                    ERIC LAN
                </text>
                <text>
                    IRVINGTON COMPUTER SCIENCE CLUB
                </text>
                <text>
                    IRVINGTON HACK CLUB
                </text>
                <text>
                    &copy; 2024
                </text>
            </div>
            <text className="flex flex-col sm:flex-row leading-tight select-none gap-2 sm:gap-0">
                <text className="text-[24vw] sm:text-[14.3vw] -mb-7 sm:mb-0">
                    VIKING
                </text>
                <text className="text-[29vw] sm:text-[14.3vw] -mt-7 sm:mt-0">
                    HACKS
                </text>
            </text>
        </div>
    )
}