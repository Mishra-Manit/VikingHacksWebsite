import Image from "next/image";
import Link from "next/link";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import DottedLine from "../components/DottedLine";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" fill="none" height={21} viewBox="0 0 20 21" width={20} xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#arrow_icon)"><path clip-rule="evenodd" d="M7.25 9.75H6.5V11.25H7.25H11.4393L9.96967 12.7197L9.43934 13.25L10.5 14.3107L11.0303 13.7803L13.7803 11.0303C14.0732 10.7374 14.0732 10.2626 13.7803 9.96967L11.0303 7.21967L10.5 6.68934L9.43934 7.75L9.96967 8.28033L11.4393 9.75H7.25ZM10 17C6.41015 17 3.5 14.0899 3.5 10.5C3.5 6.91015 6.41015 4 10 4C13.5899 4 16.5 6.91015 16.5 10.5C16.5 14.0899 13.5899 17 10 17ZM2 10.5C2 14.9183 5.58172 18.5 10 18.5C14.4183 18.5 18 14.9183 18 10.5C18 6.08172 14.4183 2.5 10 2.5C5.58172 2.5 2 6.08172 2 10.5Z" fill="currentColor" fill-rule="evenodd"></path></g><defs><clipPath id="arrow_icon"><rect fill="currentColor" height="16" rx="0.25" width="16" x="2" y="2.5"></rect></clipPath></defs></svg>
  );
}

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen h-full bg-white pb-10">
        <Header />
        <div className="m-12 mt-20">
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
            <Link href={"/register"} target={"_self"} className="mt-5 lg:mt-0 flex font-mono items-center justify-center gap-x-2 text-white bg-[rgb(0,87,255)] px-10 md:px-32 text-2xl py-1 h-24">
              <div className="flex flex-col">
                <div className="flex items-center justify-center">
                  <span className="font-mono text-xl lg:text-2xl uppercase mr-2">Register Now</span>
                  <svg aria-hidden="true" fill="none" height={23} viewBox="0 0 20 21" width={23} xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#arrow_icon)"><path clip-rule="evenodd" d="M7.25 9.75H6.5V11.25H7.25H11.4393L9.96967 12.7197L9.43934 13.25L10.5 14.3107L11.0303 13.7803L13.7803 11.0303C14.0732 10.7374 14.0732 10.2626 13.7803 9.96967L11.0303 7.21967L10.5 6.68934L9.43934 7.75L9.96967 8.28033L11.4393 9.75H7.25ZM10 17C6.41015 17 3.5 14.0899 3.5 10.5C3.5 6.91015 6.41015 4 10 4C13.5899 4 16.5 6.91015 16.5 10.5C16.5 14.0899 13.5899 17 10 17ZM2 10.5C2 14.9183 5.58172 18.5 10 18.5C14.4183 18.5 18 14.9183 18 10.5C18 6.08172 14.4183 2.5 10 2.5C5.58172 2.5 2 6.08172 2 10.5Z" fill="currentColor" fill-rule="evenodd"></path></g><defs><clipPath id="arrow_icon"><rect fill="currentColor" height="16" rx="0.25" width="16" x="2" y="2.5"></rect></clipPath></defs></svg>
                </div>
                <span className="block mt-1 font-mono font-medium leading-none text-center tracking-normal text-[14px] uppercase text-[#95B9FF]">completely free</span>
              </div>
            </Link>
          </div>
          <hr className="border-t border-dashed border-blue-300" />
          <section className="flex justify-between text-black py-20 items-end font-sans font-normal">
            <span className="text-[32px] md:text-[64px]">Sponsors</span>
            <span className="text-[20px] md:text-[26px] font-light">Partners</span>
          </section>
        </div>
        <Footer />
      </main>
    </>
  )
}