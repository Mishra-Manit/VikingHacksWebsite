import Image from "next/image"
const sponsors = [
    {
        link: "https://sfbu.edu",
        image: "/sponsors/SFBU_CIRCLE.png",
        className: "invert",
        width: 670,
        height: 670,
    },
    {
        link: "https://greenlight.com",
        image: "/sponsors/greenlightwhite.png",
        width: 2500,
        height: 750,
    },
    {
        link: "https://artofproblemsolving.com",
        image: "/sponsors/aops_logo.png",
        width: 256,
        height: 256,
    },
    {
        link: "https://hackclub.com",
        image: "/sponsors/Hack Club Flag.png",
        width: 526,
        height: 184,
    },
    {
        link: "https://1password.com",
        image: "/sponsors/1Password.png",
        width: 700,
        height: 174,
    },
    {
        link: "https://interviewcake.com",
        image: "/sponsors/InterviewCakeLogo.png",
        width: 500,
        height: 500,
    },
]

export default function Sponsors({ }) {
    return (
        <div className="my-28 md:my-40">
            <h2 className="text-sm mb-4 opacity-50 font-light font-mono">OUR SPONSORS</h2>
            <div className={`flex flex-wrap md:flex-nowrap justify-center space-x-4 md:space-x-8 h-12 md:h-16`}>
                {sponsors.map((sponsor, index) => (
                    <a
                        key={index}
                        href={sponsor.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`h-full flex items-center justify-center ${sponsor.className || ''}`}
                    >
                        <Image
                            src={sponsor.image}
                            alt={`Sponsor logo of ${sponsor.link}`}
                            width={sponsor.width}
                            height={sponsor.height}
                            className="h-15 grayscale contrast-200 hover:scale-105 opacity-80 duration-200 sponsor-logo transition-all"
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}
