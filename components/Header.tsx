import Link from 'next/link'

// fonts
import { Pixelify_Sans } from 'next/font/google'
const pixelify_sans = Pixelify_Sans({
    weight: '400',
    subsets: ['latin'],
})

// nav items
const navItems = {
    // '/register': {
    // 	name: 'REGISTER',
    // },
    '/register': {
        name: 'REGISTER',
    },
};

// icons
function ArrowIcon(props: { size: number, rotation: number }) {
    let length = props.size.toString();
    return (
        <svg
            width={length}
            height={length}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.rotation ? `rotate-${props.rotation}` : ""}
            >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    );
}

export default function Header() {
    return <header className="sticky top-0 z-50 px-12 py-6 flex items-center justify-between border-b border-neutral-800">
        <text className="hidden md:block font-mono font-light text-sm text-neutral-400">FEB 4 2025, FREMONT</text>
        <h1 className={`text-lg ${pixelify_sans.className}`}>Viking Hacks</h1>
        <div className="flex font-mono text-sm">
            {Object.entries(navItems).map(([path, { name }]) => {
                return (
                    <Link key={path} href={path} target={"_self"} className="
                    flex
                    items-center
                    gap-x-2
                    text-black
                    bg-white
                    rounded-lg
                    px-5
                    py-1
                    hover:ring
                    ring-neutral-700
                    ring-offset-black
                    ring-offset-2
                    ">{name}
                    <ArrowIcon rotation={45} size={10} />
                    </Link>
                );
            })}
        </div>
    </header>
}