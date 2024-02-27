'use client'
import Link from 'next/link';

interface StyledProps {
    href: string;
    target: string;
    text: string;
    arrow: boolean;
    className?: string;
}

export default function StyledLink(props: StyledProps) {
    const { href, target, text, arrow, className } = props;
    const greenColor = "163, 230, 53"
    const lineHeight = "3px"
    const baseTransparency = 1
    const customStyle = {
        backgroundImage: `linear-gradient(transparent 0, transparent calc(50% - ${lineHeight}), rgba(${greenColor}, ${baseTransparency}) calc(50% - ${lineHeight}), rgba(${greenColor}, ${baseTransparency}) 100%)`,
        transition: 'all 120ms ease-in-out 0s',
        backgroundSize: '100% 200%',
        backgroundPosition: '0 0',
    };

    return (
        <Link href={href} target={target}
            className={`text-black bg-transparent transition-colors duration-200 ease-out hover:bg-gradient-to-b hover:from-transparent hover:via-transparent hover:to-lime-400 ${arrow && "after:content-['_↗']"} ${className ? className : ""}`}
            style={{ ...customStyle }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundImage = `linear-gradient(transparent 0, transparent calc(50% - ${lineHeight}), rgba(${greenColor}, 1) calc(50% - ${lineHeight}), rgba(${greenColor}, 1) 100%)`;
                e.currentTarget.style.backgroundPosition = '0 100%';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundImage = `linear-gradient(transparent 0, transparent calc(50% - ${lineHeight}), rgba(${greenColor}, ${baseTransparency}) calc(50% - ${lineHeight}), rgba(${greenColor}, ${baseTransparency}) 100%)`;
                e.currentTarget.style.backgroundPosition = '0 0';
            }}
        >
            {text}
        </Link>
    );
}