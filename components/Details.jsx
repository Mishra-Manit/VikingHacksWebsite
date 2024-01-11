// icons
import { AiFillCalendar, AiFillDollarCircle, AiFillHome } from 'react-icons/ai';
import Balancer from 'react-wrap-balancer'

const details = [
    { id: 1, icon: AiFillCalendar, name: 'February 3rd, 2024', value: 
    'Viking Hacks is a one-day event that will be held on February 3rd of 2024. From start to finish, it will last 14 hours in total.' },
    { id: 2, icon: AiFillDollarCircle, name: "Completely Free", value: 
    "You heard that right. Viking Hacks covers all costs for attendees. From food, technology, to workshops—we've got it covered." },
    { id: 3, icon: AiFillHome, name: "Irvington High School", value: 
    'The venue will be located at Irvington High School, in Fremont, California. You can find more information about the venue location below.' },
]

export default function Details(props) {
    return (
        <div className="w-full max-w-5xl my-20">
            <h1 className="text-left text-xl md:text-3xl">Resources <span className="opacity-60">
                to help you innovate and elevate.
            </span></h1>
            <p className="opacity-60 font-light my-3 text-md text-left md:text-xl w-3/4">
                Viking Hacks provides all attendees with a plethora of technology and resources to accelerate their workflow.
            </p>
            <div className="py-4 sm:py-10">
                <dl className="flex flex-col sm:flex-row text-left gap-x-3 gap-y-3">
                    {details.map((detail) => (
                        <div key={detail.id} className="
                        bg-neutral-800/90 
                        flex-col
                        flex-wrap
                        p-10
                        rounded-lg
                        basis-1
                        sm:basis-1/3
                        border
                        border-neutral-700
                        hover:border-neutral-600/90
                        gap-y-4">
                            <dt className="items-center font-semibold text-xl text-neutral-0 flex gap-2">
                                <detail.icon size={25} /> {detail.name}
                            </dt>
                            <dd className="
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