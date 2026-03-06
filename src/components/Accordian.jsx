import { useState } from "react";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">

          {/* HEADER */}
          <div
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <span className="accordion-title">
              {item.title} ({item.content.length})
            </span>

            {/* Arrow */}
            <span className="accordion-arrow">
              {openIndex === index ? "▲" : "▼"}
            </span>
          </div>

          {/* CONTENT */}
          {openIndex === index && (
            <div className="accordion-content">
              {item.content.map((food, i) => (
                <div key={i} className="menu-row">
                  <span>{food.name}</span>
                  <span>₹{food.price}</span>
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