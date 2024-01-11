'use client'

import React from 'react';
import { Widget } from '@typeform/embed-react'
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { AiFillMail } from 'react-icons/ai';

const ComingSoon: React.FC = () => {
  return (
    <div className="flex max-w-7xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-neutral-0 sm:text-7xl">
          Registration
        </h1>

        <h2 className="flex flex-col sm:flex-row justify-center gap-[0.2rem] pb-10 mx-auto mt-2 max-w-xl text-lg text-neutral-200 leading-7">
          Contact us at <a href="mailto:hello@vikinghacks.com" className="
          flex
          justify-center
          items-center
          text-blue-400
          gap-1
          underline
          decoration-dotted
          underline-offset-4
          transition-all
          ">
            <AiFillMail />
            hello@vikinghacks.com
          </a> {" "}
          with any questions or concerns
        </h2>
      </main>

      <Widget id="zNPxh3gU" style={{width: '80%', height: '600px'}} className="Viking Hacks Registration Form" />

      <Footer />
    </div>
  );
};

export default ComingSoon;
