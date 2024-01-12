'use client'

import React, { useState, useRef, useEffect } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);
  const [height, setHeight] = useState(0); 
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAnswer = () => {
    setIsAnswerShowing(prev => !prev);
  };


  useEffect(() => {
    if (isAnswerShowing && contentRef.current) {
      setHeight(contentRef.current.scrollHeight); 
    } else {
      setHeight(0); 
    }
  }, [isAnswerShowing]);

  return (
    <article
      className="
        flex flex-col
        justify-between
        h-full         
        bg-zinc-800 
        p-8 
        rounded-lg 
        cursor-pointer 
        transition-all 
        duration-100 
        ease-linear 
        border
        border-zinc-600
        hover:bg-zinc-700/60
        hover:border-zinc-600
        text-left
        "
      onClick={toggleAnswer}
    >
      <div className="flex justify-between items-center">
        <h4 className="text-white font-bold text-lg">{question}</h4>
        <button
          className="bg-transparent text-white text-2xl focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            toggleAnswer();
          }}
        >
          {isAnswerShowing ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </button>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: `${height}px` }}
        className="overflow-hidden transition-max-height duration-200 ease-linear"
      >
        <p className="mt-6 text-white text-left">{answer}</p>
      </div>
    </article>
  );
};

export default FAQ;
