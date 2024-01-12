// icons
import { AiOutlineCalendar, AiOutlineDollarCircle, AiOutlineHome } from 'react-icons/ai';
import Balancer from 'react-wrap-balancer'

const details = [
    { id: 1, icon: AiOutlineCalendar, name: 'February 3rd, 2024', value: 
    'Viking Hacks is a one-day event that will be held on February 3rd of 2024. From start to finish, it will last 14 hours in total.' },
    { id: 2, icon: AiOutlineDollarCircle, name: "Completely Free", value: 
    "You heard that right. Viking Hacks covers all costs for attendees. From food, technology, to workshops—we've got it covered." },
    { id: 3, icon: AiOutlineHome, name: "Irvington, CA", value: 
    'The venue will be at Irvington High School, in Fremont, California. More information about the venue can be found below.' },
]

export default function Details(props) {
    return (
        <div className="relative w-full max-w-5xl my-20 px-8"> 
        {/* i disabled details-blur */}
            <h1 className="text-4xl md:text-4xl">Start your hacking with us</h1>
            <p className="opacity-60 font-light my-3 text-md md:text-xl">
                We&apos;ll provide everything to make this the best experience possible.
            </p>
            <div className="py-4 sm:py-10">
                <dl className="flex flex-col md:flex-row text-left gap-x-3 gap-y-3">
                    {details.map((detail) => (
                        <div key={detail.id} className="
                        bg-neutral-700/20 
                        p-10
                        rounded-lg
                        basis-1
                        sm:basis-1/3
                        border
                        border-neutral-700
                        hover:border-neutral-600/90
                        gap-y-4">
                            <dt className="w-max font-normal text-xl text-neutral-0 gap-2">
                                <div className="justify-center flex-col">
                                    {/* this is the icon container */}
                                    <div className="
                                    my-2
                                    bg-black 
                                    text-blue-500 
                                    rounded-lg 
                                    p-2 
                                    w-min">
                                        <detail.icon size={30} />
                                    </div>
                                    <Balancer className="text-2xl">
                                        {detail.name}
                                    </Balancer>
                                </div>
                            </dt>
                            <dd className="
                            mt-2
                            text-md 
                            font-light 
                            tracking-tight 
                            text-white 
                            md:text-md
                            ">
                                <Balancer>
                                    {detail.value}
                                </Balancer>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}