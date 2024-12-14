import { MoveDown } from "lucide-react";
import { useState } from "react";
import H1Text from "../components/H1Text";
import faqItems from '../data/faq.json'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="p-12">
      <H1Text text="FAQ" />
      <div className="max-w-2xl mx-auto">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-300 py-2 my-2"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-lg font-medium p-2 hover:bg-gray-100"
            >
              {item.question}
              <span className={`transform transition-transform duration-200 ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                <MoveDown size={16} />
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 transition-all duration-300 ease-in-out transform scale-100 opacity-100">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;