import Image from "next/image"
const sponsors = [
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
        link: "https://sfbu.edu",
        image: "/sponsors/SFBU Logo.png",
        width: 500,
        height: 500,
    },
    {
        link: "https://1password.com",
        image: "/sponsors/1Password.png",
        width: 907,
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
            <h2 className="text-md opacity-50 mb-4">Our Sponsors</h2>
            <div className="flex items-center justify-center space-x-4 md:space-x-8 h-20 md:h-[4.7rem]">
                {sponsors.map((sponsor, index) => (
                    <a
                        key={index}
                        href={sponsor.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-full flex items-center justify-center"
                        style={{ minWidth: 'auto' }}
                    >
                        <Image
                            src={sponsor.image}
                            alt={`Sponsor logo of ${sponsor.link}`}
                            width={sponsor.width}
                            height={sponsor.height}
                            layout="intrinsic"
                            objectFit="contain"
                            className="grayscale contrast-200 sponsor-logo"
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}