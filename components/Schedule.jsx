'use client'
import React, { useState } from 'react';

const eventList = [
    {
        num: 2,
        time: "7am",
        info: "Opening Ceremony",
        details: [
            "Welcome speech, introduction of judges, mentors, and sponsors.",
            "Overview of hackathon theme and rules."
        ]
    },
    {
        num: 3,
        time: "8:30am",
        info: "Team Finalization",
        details: [
            "Participants pitch their ideas.",
            "Finalization of teams."
        ]
    },
    {
        num: 4,
        time: "9am",
        info: "Hacking Begins",
        details: [
            "Teams start on their projects.",
            "Mentors offer guidance."
        ]
    },
    {
        num: 5,
        time: "11am",
        info: "SFBU Workshop",
        details: [
            "Workshop presented by SFBU.",
            "Topics relevant to the hackathon theme."
        ]
    },
    {
        num: 6,
        time: "12pm",
        info: "Lunch Break",
        details: [
            "Lunch provided by us.",
            "Networking opportunity.",
        ]
    },
    {
        num: 7,
        time: "1pm",
        info: "Hacking Continues",
        details: [
            "Teams dive back into their projects.",
            "Optional mini-challenges or activities."
        ]
    },
    {
        num: 8,
        time: "5:30pm",
        info: "Final Stretch of Hacking",
        details: [
            "Teams finalize their projects.",
        ]
    },
    {
        num: 9,
        time: "6pm",
        info: "Dinner Break",
        details: [
            "Dinner and relaxation.",
        ]
    },
    {
        num: 10,
        time: "7pm",
        info: "Project Presentations",
        details: [
            "Teams present their projects to judges.",
            "Brief Q&A sessions."
        ]
    },
    {
        num: 11,
        time: "8:30pm",
        info: "Judging and Awards Ceremony",
        details: [
            "Judges deliberate and announce winners.",
            "Closing remarks."
        ]
    },
    {
        num: 12,
        time: "9pm",
        info: "Hackathon Concludes",
        details: [
            "Final networking and departure.",
        ]
    }
]

function ArrowIcon(props) {
    let length = props.size.toString();
    return (
        <svg
            width={length}
            height={length}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    );
}

function EventItem({ time, info, details, isLastVisible }) {
    const [timeNumber, period] = time.split(/(am|pm)/i);
    return (
        <li className={`relative rounded-lg bg-neutral-900 bg-opacity-0 px-8 py-4 text-left ${
            isLastVisible ? 'blur-effect' : ''
        }`}>
            <div className="flex flex-row gap-10 md:gap-8 items-start">
                {/* yes, i went up 0.1rem LOLLL */}
                <div className="flex flex-col text-center -mt-[0.1rem] justify-center">
                    <p className="text-right w-8 md:w-20 font-mono text-xl md:text-3xl">{timeNumber}</p>
                    <p className="text-right w-8 md:w-20 text-2xl opacity-20 font-mono">
                        {period}
                    </p>
                </div>
                <div className="font-normal">
                    <p className="font-mono text-sm opacity-40 uppercase">{info}</p>
                    <ul className="">
                        {details.map((detail, index) => {
                            return (
                                <div key={index} className="flex flex-row items-start gap-2">
                                    <p className="font-mono opacity-20">{"//"}</p>
                                    {detail}
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </li>
    )
}

export default function Schedule(props) {
    const initialVisibleCount = 5;
    const [visibleCount, setVisibleCount] = useState(initialVisibleCount); // initially show 5 items
    const [isExpanded, setIsExpanded] = useState(false); // track if the list has been expanded

    const toggleItemsVisibility = () => {
        if (isExpanded) {
            setVisibleCount(initialVisibleCount);
            setIsExpanded(false); // set to not expanded
        } else {
            setVisibleCount(eventList.length);
            setIsExpanded(true); // set to expanded
        }
    };

    const isLastVisible = (index) => index === visibleCount - 1 && index !== eventList.length - 1;
    return (
        <div className="my-20">
            <ul className="w-full md:w-auto space-y-4">
                {eventList.slice(0, visibleCount).map((event, index) => (
                    <EventItem
                        key={event.num}
                        time={event.time}
                        info={event.info}
                        details={event.details}
                        isLastVisible={isLastVisible(index)}
                    />
                ))}
            </ul>
            <button onClick={toggleItemsVisibility} className="
                w-auto
                border 
                text-sm
                bg-neutral-800
                hover:bg-neutral-700/60
                border-neutral-700
                hover:border-neutral-600
                rounded-lg
                py-2
                px-4 
                mt-4
                transition-all
            ">
                {isExpanded ? 'Show Less' : 'Show More'}
            </button>
        </div>
    );
}