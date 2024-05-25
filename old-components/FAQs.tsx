import React from 'react';
import { AiFillMail } from 'react-icons/ai';
import FAQ from './FAQ';
import SquigglyLines from "./SquigglyLines";

const faqsData = [
  {
    id: 1,
    question: 'What is Viking Hacks?',
    answer: 'Viking Hacks is Irvington High School’s very own hackathon, designed to bring together students with a passion for technology and innovation.'
  },
  {
    id: 2,
    question: 'Who can participate in Viking Hacks?',
    answer: 'The hackathon is open to all high school students who are interested in creating, learning, and exploring the world of technology.'
  },
  {
    id: 3,
    question: 'Do I need to have coding experience to join?',
    answer: 'No prior coding experience is required. We encourage students of all skill levels to participate and learn.'
  },
  {
    id: 4,
    question: 'What should I bring to the hackathon?',
    answer: 'Participants should bring their own laptop, charger, and any other tech they plan to use. Food and drinks will be provided.'
  },
  {
    id: 5,
    question: 'Is there a cost to attend Viking Hacks?',
    answer: 'Viking Hacks is completely free for all participants, thanks to our sponsors.'
  },
  {
    id: 6,
    question: 'How are teams formed for Viking Hacks?',
    answer: 'Teams can be formed prior to the event or during the kickoff. You can also work alone if you prefer.'
  },
  {
    id: 7,
    question: 'What kind of workshops will be available?',
    answer: 'We will host a variety of workshops covering different aspects of technology, from beginner programming to advanced topics.'
  },
  {
    id: 8,
    question: 'Will there be prizes?',
    answer: 'Yes, we will have prizes for the top projects in various categories.'
  },
  {
    id: 9,
    question: 'How can I register for Viking Hacks?',
    answer: 'You can register on our website by filling out the registration form. Space is limited, so sign up early!'
  },
  {
    id: 10,
    question: 'Can I work on a project I’ve already started?',
    answer: 'Projects should be new and built entirely during the hackathon. Pre-existing projects are not eligible for prizes.'
  },
  {
    id: 11,
    question: 'Can I arrive late?',
    answer: 'We will be releasing our check-in time soon. It will be around 7:00am - 7:30am. You will not be allowed to check in after that.'
  },
  {
    id: 12,
    question: 'I have more questions!',
    answer: 'Please direct any other questions to hello@vikinghacks.com and we will get back to you as soon as possible!'
  }
];

const FAQs: React.FC = () => {
  return (
    <section className="w-full max-w-5xl py-1 my-20 p-8">
      <div>
        <h3 className="text-left text-xs font-mono font-light opacity-40 mb-2">QUESTIONS AND ANSWERS</h3>
        <h1 className="text-left text-4xl md:text-3xl">We're <span className="opacity-60">
                always here to answer your questions.
            </span></h1>
            {/* this is the text body for the section info */}
          <div className="opacity-60 font-light my-3 text-md md:text-xl w-auto">
            <h2 className="flex flex-col sm:flex-row text-left gap-[0.2rem] justify-start pb-10 mt-2">
              If you still have a question, you can email us at: 
              <a href="mailto:hello@vikinghacks.com" className="
              flex
              items-center
              text-blue-400
              gap-1
              underline
              decoration-dotted
              underline-offset-4
              transition-all
              ">
                hello@vikinghacks.com
              </a>
            </h2>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqsData.map(faq => (
            <div className="flex flex-col" key={faq.id}>
              <FAQ question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;