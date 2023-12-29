'use client'

import React, { useState, useRef, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);
  const [height, setHeight] = useState(0); // Re-add this line to declare the height state
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAnswer = () => {
    setIsAnswerShowing(prev => !prev);
  };

  // useEffect hook to handle height transition
  useEffect(() => {
    if (isAnswerShowing && contentRef.current) {
      setHeight(contentRef.current.scrollHeight); // Set height to the scrollHeight of the content
    } else {
      setHeight(0); // Set height back to 0
    }
  }, [isAnswerShowing]); // This effect runs whenever isAnswerShowing changes

  return (
    <article
      className="bg-gray-500 p-8 rounded-lg cursor-pointer transition-all duration-500 ease-linear hover:bg-gray-600"
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
          {isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: `${height}px` }}
        className="overflow-hidden transition-max-height duration-400 ease-linear"
      >
        <p className="mt-6 text-white text-left">{answer}</p>
      </div>
    </article>
  );
};

export default FAQ;
