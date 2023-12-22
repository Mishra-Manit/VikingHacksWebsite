'use client'

import React, { useState, useRef } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleAnswer = () => {
    setIsAnswerShowing(prev => !prev);
    // After state update, wait for the next update cycle to get the new height
    setTimeout(() => {
      setHeight(
        isAnswerShowing ? 0 : contentRef.current?.scrollHeight || 0
      );
    }, 0);
  };

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
        {isAnswerShowing && <p className="mt-6 text-white text-left">{answer}</p>}
      </div>
    </article>
  );
};

export default FAQ;
