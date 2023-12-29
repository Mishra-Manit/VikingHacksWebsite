import React from 'react';
import FAQ from './FAQ';
import SquigglyLines from "../components/SquigglyLines";

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
    <section className="w-full py-1 mb-8">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-6xl pb-6 font-bold text-center text-white mb-8">FAQs</h2> */}
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl mb-10">
          <span className="relative whitespace-nowrap text-white">
            <SquigglyLines />
            <span className="relative">FAQs</span>
          </span>{" "}
        </h1>
        <div className="grid items-start auto-columns-auto grid-cols-1 md:grid-cols-2 gap-8">
          {faqsData.map(faq => (
            <FAQ key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;