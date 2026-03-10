import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border rounded-lg mb-3 bg-white shadow-sm">

          <div
            className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-semibold text-lg">
              {item.title} ({item.content.length})
            </span>

            <span className="text-xl">
              {openIndex === index ? "▲" : "▼"}
            </span>
          </div>

          {openIndex === index && (
            <div className="border-t p-4 bg-gray-50">
              {item.content.map((food, i) => (
                <div
                  key={i}
                  className="flex justify-between py-2 text-gray-700"
                >
                  <span>{food.name}</span>
                  <span className="font-medium">₹{food.price}</span>
                </div>
              ))}
            </div>
          )}

        </div>
      ))}
    </div>
  );
};

export default Accordion;