import Image from 'next/image';

export default function Footer() {
    return (
        <div className="mx-10 font-mono">
            <div className="flex flex-col sm:flex-row justify-between mt-48">
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
            {/* TODO: use image instead of text */}
            <Image
                src="/VIKINGHACKS_TEXT.png"
                className="hidden sm:block"
                alt="Viking Hacks"
                width={1881}
                height={215}
            />
            <Image
                src="/VIKINGHACKS_COL_TEXT.png"
                className="block sm:hidden"
                alt="Viking Hacks"
                width={1881}
                height={215}
            />
        </div>
    )
}