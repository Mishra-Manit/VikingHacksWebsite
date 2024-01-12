import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import Balancer from 'react-wrap-balancer'

import Details from '../components/Details';
import Sponsors from '../components/Sponsors';
import FAQs from '../components/FAQs';
import ScheduleList from '../components/Schedule';

const actionVerbs = [
  "Create", "Innovate", "Elevate", "Invent", "Plan", "Develop", "Revolutionize", "Improvise", "Design", "Evolve"
]

const cx = (...classes: any[]) => classes.filter(Boolean).join(' ');

function RegisterButton() {
  return (
    <Link
      className="
      px-8 py-2
      text-lg
    bg-blue-600 
    hover:bg-blue-600/90
    border
    border-solid
    cursor-pointer
    border-blue-400
    rounded-2xl 
    text-white 
    font-light
    transition-all"
      // className="bg-slate-700 ring-1 ring-yellow-200 rounded-3xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-slate-500 transition"
      href="/register"
    >
      <span className="flex gap-2 items-center text-lg transition-all duration-75">
        Register for free
      </span>
    </Link>
  )
}

export default function HomePage() {
  return (
    <div className="items-center justify-center py-2 overflow-x-hidden">
      <script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						description: "Viking Hacks website",
						image: `https://vikinghacks.com/og?title=${"02.03.2024"}`,
						url: `https://vikinghacks.com/`,
						author: {
							'@type': 'Person',
							name: 'Viking Hacks',
						},
					}),
				}}
			/>
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-40 mt-20 background-gradient pointer-events-auto">
        <a
          href="https://vikinghacks.com/prospectus.pdf"
          target="_blank"
          rel="noreferrer"
          className="
          group
          border 
          border-neutral-700/50 
          hover:border-neutral-600/60
          bg-neutral-800 
          hover:bg-neutral-800/80
          rounded-3xl 
          py-2 
          pl-2
          pr-4
          text-gray-200 
          text-sm 
          mb-10
          md:mb-5
          transition 
          duration-300 
          ease-in-out
          flex
          items-center
          gap-2
          "
        >
          <div className="
          rounded-full 
          border 
          border-blue-500/70
          bg-blue-500/20
          text-xs
          py-1
          px-2">
            Sponsors
          </div>
          <p>
            Thank you for your support
          </p>
          <p className="group-hover:translate-x-1 transition-all">
            →
            </p>
        </a>
        <div>
        <h1 className="flex flex-col md:flex-row gap-4 mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
          <p>Create. </p>
          <span className="relative whitespace-nowrap text-blue-500">
            <SquigglyLines />
            <span className="relative">Innovate.</span>
          </span>{" "}
          <p>Elevate.</p>
        </h1>
        </div>
        <h2 className="mx-auto mt-12 max-w-xl text-lg text-neutral-200 leading-7">
          Viking Hacks is Irvington High School&apos;s very own annual hackathon, bringing together 100+ students from around the bay to build innovative projects and present their work to the community.
        </h2>
        <br />
        <RegisterButton />
        {/* <hr className="my-10 md:my-16 border-dashed border-gray-600 w-full"/> */}
        <Sponsors />
        {/* <hr className="my-10 md:my-16 border-dashed bg-opacity-0 border-gray-600 w-full"/> */}
        <Details />
        {/* <hr className="my-10 md:my-16 border-dashed border-gray-600 w-full"/> */}
        <ScheduleList />
        <FAQs />
        <hr className="my-10 md:my-16 border-gray-600/30 w-screen" />
        <div className="relative background-blur my-16 mb-28 text-3xl">
          <span className="opacity-60">
            <Balancer>
              Challenge accepted.
            </Balancer>
          </span>{" "}
          <Balancer ratio={1}>
            Code like a Viking.
          </Balancer>
          <br /><br />
          {/* I have to do this because tailwind freaks out if i use a component */}
          <Link
            className="
            px-8 py-3
            text-lg
          bg-blue-600 
          hover:bg-blue-600/90
          border
          border-solid
          cursor-pointer
          border-blue-400
          rounded-2xl 
          text-white 
          font-light
          transition-all
          "
            href="/register"
          >
            <span>
              Register for free
            </span>
          </Link>
        </div>
        {/* The FAQ questions are here */}
      </main>
      <Footer />
    </div>
  );
}
