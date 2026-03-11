const Help = () => {
  const helpTopics = [
    "Where is my order?",
    "Cancel my order",
    "Payment failed but money deducted",
    "Refund status",
    "Wrong item received",
    "Missing item in order",
    "Change delivery address",
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Help & Support</h1>

      <input
        type="text"
        placeholder="Search your issue..."
        className="w-full border p-3 rounded mb-6"
      />

      <h2 className="text-xl font-semibold mb-3">Popular Help Topics</h2>

      <ul className="space-y-3">
        {helpTopics.map((topic, index) => (
          <li
            key={index}
            className="border p-3 rounded cursor-pointer hover:bg-gray-100"
          >
            {topic}
          </li>
        ))}
      </ul>

      <div className="mt-8 border p-4 rounded">
        <h3 className="text-lg font-semibold">Still need help?</h3>
        <p className="text-gray-600 mb-3">
          Contact our support team for assistance.
        </p>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">
          Chat with Support
        </button>
      </div>
    </div>
  );
};

export default Help;