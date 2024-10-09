import Image from "next/image";
import Link from "next/link";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Balancer } from "react-wrap-balancer";
import DottedLine from "../components/DottedLine";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" fill="none" height={21} viewBox="0 0 20 21" width={20} xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#arrow_icon)"><path clipRule="evenodd" d="M7.25 9.75H6.5V11.25H7.25H11.4393L9.96967 12.7197L9.43934 13.25L10.5 14.3107L11.0303 13.7803L13.7803 11.0303C14.0732 10.7374 14.0732 10.2626 13.7803 9.96967L11.0303 7.21967L10.5 6.68934L9.43934 7.75L9.96967 8.28033L11.4393 9.75H7.25ZM10 17C6.41015 17 3.5 14.0899 3.5 10.5C3.5 6.91015 6.41015 4 10 4C13.5899 4 16.5 6.91015 16.5 10.5C16.5 14.0899 13.5899 17 10 17ZM2 10.5C2 14.9183 5.58172 18.5 10 18.5C14.4183 18.5 18 14.9183 18 10.5C18 6.08172 14.4183 2.5 10 2.5C5.58172 2.5 2 6.08172 2 10.5Z" fill="currentColor" fillRule="evenodd"></path></g><defs><clipPath id="arrow_icon"><rect fill="currentColor" height="16" rx="0.25" width="16" x="2" y="2.5"></rect></clipPath></defs></svg>
  );
}

const FAQList = {
  'What is Viking Hacks?': {
    answer: "Viking Hacks is Irvington High School's very own hackathon, designed to bring together students with a passion for technology and innovation."
  },
  'Who can participate in Viking Hacks?': {
    answer: "The hackathon is open to all high school students who are interested in creating, learning, and exploring the world of technology."
  },
  'Do I need to have coding experience to join?': {
    answer: "No prior coding experience is required. We encourage students of all skill levels to participate and learn."
  },
  'What should I bring to the hackathon?': {
    answer: "Participants should bring their own laptop, charger, and any other tech they plan to use. Food and drinks will be provided."
  },
  'Is there a cost to attend Viking Hacks?': {
    answer: "Viking Hacks is completely free for all participants, thanks to our sponsors."
  }
}

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen h-full bg-white pb-10">
        <Header />
        <div className="m-5 md:m-12 mt-20">
          {/* main container */}
          <div className="h-[60vh] w-full overflow-hidden relative transition-all">
            <Image
              src={"/eventcenter1.jpeg"}
              alt={"Fremont Downtown Event Center"}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "50% 100%"
              }}
            />
          </div>
          <div className="flex flex-col lg:flex-row my-20 justify-between lg:items-center">
            <div className="flex flex-col text-black">
              <h1 className="tracking-[-0.07em] font-medium text-[9vw] sm:text-[8vw] lg:text-[5.5vw] leading-[1.1]">Viking Hacks is here.</h1>
              <text className="font-mono text-[4vw] sm:text-[2.5vw] lg:text-[1.5vw] uppercase">January 10th - Fremont, CA.</text>
            </div>
            <Link href={"/register"} target={"_self"} className="group mt-5 lg:mt-0 flex font-mono items-center justify-center gap-x-2 text-white bg-[rgb(0,87,255)] px-10 md:px-32 text-2xl py-1 h-24">
              <div className="flex flex-col">
                <div className="flex items-center justify-center">
                  <span className="font-mono text-xl lg:text-2xl uppercase mr-2">Register Now</span>
                  <svg className="group-hover:translate-x-1 transition-transform duration-150" aria-hidden="true" fill="none" height={21} viewBox="0 0 20 21" width={20} xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#arrow_icon)"><path clipRule="evenodd" d="M7.25 9.75H6.5V11.25H7.25H11.4393L9.96967 12.7197L9.43934 13.25L10.5 14.3107L11.0303 13.7803L13.7803 11.0303C14.0732 10.7374 14.0732 10.2626 13.7803 9.96967L11.0303 7.21967L10.5 6.68934L9.43934 7.75L9.96967 8.28033L11.4393 9.75H7.25ZM10 17C6.41015 17 3.5 14.0899 3.5 10.5C3.5 6.91015 6.41015 4 10 4C13.5899 4 16.5 6.91015 16.5 10.5C16.5 14.0899 13.5899 17 10 17ZM2 10.5C2 14.9183 5.58172 18.5 10 18.5C14.4183 18.5 18 14.9183 18 10.5C18 6.08172 14.4183 2.5 10 2.5C5.58172 2.5 2 6.08172 2 10.5Z" fill="currentColor" fillRule="evenodd"></path></g><defs><clipPath id="arrow_icon"><rect fill="currentColor" height="16" rx="0.25" width="16" x="2" y="2.5"></rect></clipPath></defs></svg>
                </div>
                <span className="block mt-1 font-mono font-medium leading-none text-center tracking-normal text-[14px] uppercase text-[#95B9FF]">completely free</span>
              </div>
            </Link>
          </div>
          <div className="my-20">
            <span className="bg-black text-white font-mono py-1 px-4 uppercase tracking-wider">About</span>
            <hr className="mt-4 border-t border-dashed border-blue-300" />
            <h2 className="text-black font-medium text-[5vw] md:text-[4vw] tracking-[-0.05em] my-10 leading-[2.5] md:leading-[2] lg:leading-normal">
              <Balancer>
                Join our
                <span className="relative inline-block border-[1px] border-primaryColor ml-2 mr-1 px-2 py-1 leading-[1.2]">
                  community of developers
                  {/* Blue underline decoration */}
                  <div
                    aria-hidden="true"
                    className="absolute flex left-0 -bottom-[14px] w-full items-center justify-start md:-translate-x-[20%]"
                  >
                    <svg
                      className="absolute left-0 -bottom-[6px] w-[90%] md:w-auto"
                      fill="none"
                      height={18}
                      viewBox="0 0 400 18"
                      width={400}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M262.85.164v6.332h-1.096v-4.62l-15.546 15.682H0v-1h245.792L261.056 1.16h-4.637V.164h6.431Z"
                        fill="#0057FF"
                      />
                    </svg>
                    <span className="inline-block pointer-events-none -mb-[0.1rem] md:-mb-1 font-mono font-medium tracking-wide uppercase text-[10px] md:text-[13px] text-primaryColor">
                      Hosted by students
                    </span>
                  </div>
                </span>
                and innovators at Viking Hacks 2025 for a day of learning, creativity, and collaboration as we
                <span className="relative inline-block border-[1px] border-primaryColor ml-2 md:ml-0 mr-1 px-2 py-1 leading-[1.2]">
                  build solutions
                  {/* Blue underline decoration */}
                  <div
                    aria-hidden="true"
                    className="absolute flex right-0 -bottom-[14px] w-full items-center justify-end  md:translate-x-[20%]"
                  >
                    <svg
                      className="absolute right-0 -bottom-[6px] w-[70%] scale-x-[-1]"
                      fill="none"
                      height={18} 
                      viewBox="0 0 263 18"
                      width={263}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M262.85.164v6.332h-1.096v-4.62l-15.546 15.682H0v-1h245.792L261.056 1.16h-4.637V.164h6.431Z"
                        fill="#0057FF"
                      />
                    </svg>
                    <span className="inline-block pointer-events-none -mb-[0.02rem] md:-mb-1 font-mono font-medium tracking-wide uppercase text-[10px] md:text-[13px] text-primaryColor">
                      For a cause
                    </span>
                  </div>
                </span>
                to real-world challenges together.
              </Balancer>
            </h2>
          </div>
          {/* Prizes preview */}
          <div className="my-20">
          </div>
          {/* FAQ section */}
          <div className="flex flex-col md:flex-row my-20 w-full">
            {/* sticky section :> */}
            <div className="text-black flex flex-col gap-5 w-full lg:w-[40%]">
              <Balancer className="font-medium -tracking-[0.05em] text-[10vw] md:text-[4vw] leading-none">Frequently<br/>Asked Questions</Balancer>
              <text className="hidden md:block font-mono font-regular uppercase text-xs">Contact
                <a href="mailto:hello@vikinghacks.com" className="ml-2 mr-1 text-primaryColor">
                hello@vikinghacks.com
                </a>
                <svg className="inline-block mb-[0.05rem]" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#000000" viewBox="0 0 256 256"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
              </text>
            </div>
            {/* question list */}
            <div className="w-full mt-5 lg:mt-0 lg:w-[60%] border-y border-dashed border-y-blue-300 divide-y divide-dashed divide-blue-300 text-black">
            {Object.entries(FAQList).map(([question, { answer }]) => {
                    return (
                      <button className="group p-5 flex flex-col gap-2 justify-center w-full py-10">
                        <div className="flex items-center gap-2">
                          <svg className="group-active:rotate-90" fill="#000000" width="20px" height="20px" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <polygon fillRule="evenodd"
                              points="17.586 13 3 13 3 11 17.586 11 11.293 4.707 12.707 3.293 21.414 12 12.707 20.707 11.293 19.293" />
                          </svg>
                          <h1 className="text-lg font-medium -tracking-[0.05rem text-left">{question}</h1>
                        </div>
                        <h2 className="hidden group-active:block text-left">{answer}</h2>
                      </button>
                    );
                })}
            </div>
          </div>
          <section className="flex justify-between text-black py-20 items-end">
            <span className="text-[10vw] md:text-[4vw] font-medium leading-none tracking-tighter">Sponsors</span>
            {/* <span className="text-[20px] md:text-[26px] font-light leading-non tracking-tight">Partners</span> */}
          </section>
          <div className="w-full h-screen"></div>
        </div>
        <Footer />
      </main>
    </>
  )
}