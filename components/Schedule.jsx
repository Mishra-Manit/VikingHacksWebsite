'use client'
import React, { useState } from 'react';

const eventList = [
    {
        num: 2,
        time: "7:00am",
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
        time: "9:00am",
        info: "Hacking Begins",
        details: [
            "Teams start on their projects.",
            "Mentors offer guidance."
        ]
    },
    {
        num: 5,
        time: "11:00am",
        info: "SFBU Workshop",
        details: [
            "Workshop presented by SFBU.",
            "Topics relevant to the hackathon theme."
        ]
    },
    {
        num: 6,
        time: "12:00pm",
        info: "Lunch Break",
        details: [
            "Lunch provided by us.",
            "Networking opportunity.",
        ]
    },
    {
        num: 7,
        time: "1:00pm",
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
        time: "6:00pm",
        info: "Dinner Break",
        details: [
            "Dinner and relaxation.",
        ]
    },
    {
        num: 10,
        time: "7:00pm",
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
        time: "9:00pm",
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
            <div className="flex flex-row gap-8 items-center">
                <div>
                    <p className="w-8 md:w-16 font-mono font-bold">{timeNumber}</p>
                    <p className="w-8 md:w-16 text-xl sm:text-3xl opacity-20 font-mono">
                        {period.toUpperCase()}
                    </p>
                </div>
                <div className="font-thin">
                    <p className="font-normal text-lg">{info}</p>
                    <ul className="ml-3">
                        {details.map((detail) => {
                            return (
                                <div className="flex flex-row items-center gap-2">
                                    <span className="opacity-50">
                                        <ArrowIcon size={12} />
                                    </span>
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
        <>
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
                w-full
                md:w-1/2
                border 
                hover:bg-neutral-800
                hover:border-dashed
                border-neutral-700
                rounded-lg
                py-2
                px-4 
                mt-4
                transition-all
            ">
                {isExpanded ? 'Show less' : 'Show more'}
            </button>
        </>
    );
}