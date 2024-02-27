import Image from 'next/image';

export default function Footer() {
    return (
        <div className="mx-10 font-mono h-max">
            <div className="flex flex-col sm:flex-row justify-between mt-20">
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
                className="mb-10"
                alt="Viking Hacks"
                width={1881}
                height={215}
            />
        </div>
    )
}