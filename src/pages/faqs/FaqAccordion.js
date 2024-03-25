import React, { useState } from 'react';

const FaqAccordion = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-lg mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center w-full py-4 px-6 focus:outline-none"
          >
            <span className="text-lg font-medium">{faq.question}</span>
            <svg
              className={`w-6 h-6 transition-transform duration-300 transform ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {activeIndex === index && (
            <div className="py-4 px-6">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;