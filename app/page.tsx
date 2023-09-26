import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";

const details = [
  { id: 1, name: 'A one day event on', value: 'Feb 3rd' },
  { id: 2, name: "Hosted at", value: 'Irvington High' },
  { id: 3, name: "We ❤️ Beginners", value: "Join us!" },
]

export default function HomePage() {
  return (
    <div className="flex max-w-7xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <a
          href="https://cloud-jeay2ufps-hack-club-bot.vercel.app/0viking_hacks_2024_sponsorship_prospectus.pdf"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-600 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out"
        >
          Now accepting {" "}
          <span className="text-blue-600 hover:underline">sponsors</span>
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
          Create. {" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <span className="relative">Innovate.</span>
          </span>{" "}
          Elevate.
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
          Viking Hacks is Irvington High School&apos;s very own annual hackathon, bringing together 100+ students from around the bay to build innovative projects and present their work to the community.
        </h2>
        <Link
          className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
          href="#"
        >
          Registration Coming Soon!
        </Link>
        <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {details.map((detail) => (
              <div key={detail.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-300">{detail.name}</dt>
                <dd className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      </main>
      <Footer />
    </div>
  );
}
