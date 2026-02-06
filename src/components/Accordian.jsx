import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!items || items.length === 0) {
    return <p>No items available.</p>;
  }

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className="accordion-title"
            onClick={() => handleToggle(index)}
            style={{
              width: "100%",
              padding: "10px",
              textAlign: "left",
              fontWeight: "bold",
              cursor: "pointer",
              background: "#f3f3f3",
              border: "none",
              marginBottom: "5px",
            }}
          >
            {item.title}

            {activeIndex === index ? (
              <FaChevronUp style={{ float: "right" }} />
            ) : (
              <FaChevronDown style={{ float: "right" }} />
            )}
          </button>

          {activeIndex === index && (
            <div
              className="accordion-content"
              style={{
                padding: "10px",
                background: "#fafafa",
                border: "1px solid #ddd",
              }}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
