import Link from 'next/link'
import Image from 'next/image';

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
        name: 'Register Now',
    },
};

// icons

export default function Header() {
    return (
        <header className="sticky top-0 z-50 px-5 md:px-12 py-6 flex items-center justify-between w-full">
            <div className="absolute top-0 w-full -mx-5 md:-mx-12 h-[200px] pointer-events-none">
                <div className="relative w-full h-full pointer-events-none">
                    <div
                        className="absolute inset-0 z-1 pointer-events-none"
                        style={{
                            backdropFilter: 'blur(0.12px)',
                            maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 37.5%)',
                        }}
                    ></div>
                    <div
                        className="absolute inset-0 z-2 pointer-events-none"
                        style={{
                            backdropFilter: 'blur(0.23px)',
                            maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 50%)',
                        }}
                    ></div>
                    <div
                        className="absolute inset-0 z-3 pointer-events-none"
                        style={{
                            backdropFilter: 'blur(0.47px)',
                            maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 62.5%)',
                        }}
                    ></div>
                    <div
                        className="absolute inset-0 z-4 pointer-events-none"
                        style={{
                            backdropFilter: 'blur(0.94px)',
                            maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 75%)',
                        }}
                    ></div>
                    <div
                        className="absolute inset-0 z-5 pointer-events-none"
                        style={{
                            backdropFilter: 'blur(1.88px)',
                            maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 87.5%)',
                        }}
                    ></div>
                    <div
                        className="absolute inset-0 z-6 pointer-events-none"
                        style={{
                            backdropFilter: 'blur(3.75px)',
                            maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
                        }}
                    ></div>
                    <div
                        className="absolute inset-0 z-7 pointer-events-none"
                        style={{
                            backdropFilter: 'blur(7.5px)',
                            maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)',
                        }}
                    ></div>
                    <div
                        className="absolute inset-0 z-8 pointer-events-none"
                        style={{
                            backdropFilter: 'blur(15px)',
                            maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)',
                        }}
                    ></div>
                </div>
            </div>
            <div className="flex-1 grow z-10 select-none">
                <div className="h-10 w-[6.2rem]">
                    <Image src="/viking_logo_transparent.png" alt="Viking Hacks Logo" height={559} width={214} layout="responsive"/>
                </div>
            </div>
            <div className="flex-grow flex-1 flex z-10 justify-end h-full font-mono font-light text-sm">
                {Object.entries(navItems).map(([path, { name }]) => {
                    return (
                        <Link key={path} href={path} target={"_self"} className="
                        group
                        flex
                        items-center
                        gap-x-2
                        text-white
                        bg-primaryColor
                        px-5
                        py-1
                        h-10
                        uppercase
                        ">{name}
                        <svg className="group-hover:translate-x-1 transition-transform duration-150" aria-hidden="true" fill="none" height={21} viewBox="0 0 20 21" width={20} xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#arrow_icon)"><path clipRule="evenodd" d="M7.25 9.75H6.5V11.25H7.25H11.4393L9.96967 12.7197L9.43934 13.25L10.5 14.3107L11.0303 13.7803L13.7803 11.0303C14.0732 10.7374 14.0732 10.2626 13.7803 9.96967L11.0303 7.21967L10.5 6.68934L9.43934 7.75L9.96967 8.28033L11.4393 9.75H7.25ZM10 17C6.41015 17 3.5 14.0899 3.5 10.5C3.5 6.91015 6.41015 4 10 4C13.5899 4 16.5 6.91015 16.5 10.5C16.5 14.0899 13.5899 17 10 17ZM2 10.5C2 14.9183 5.58172 18.5 10 18.5C14.4183 18.5 18 14.9183 18 10.5C18 6.08172 14.4183 2.5 10 2.5C5.58172 2.5 2 6.08172 2 10.5Z" fill="currentColor" fillRule="evenodd"></path></g><defs><clipPath id="arrow_icon"><rect fill="currentColor" height="16" rx="0.25" width="16" x="2" y="2.5"></rect></clipPath></defs></svg>
                        </Link>
                    );
                })}
            </div>
        </header>
    );
}