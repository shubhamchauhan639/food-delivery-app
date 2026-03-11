

const offers = [
  {
    code: "SAVE50",
    description: "Get ₹50 off on orders above ₹199",
  },
  {
    code: "FREEDEL",
    description: "Free delivery on orders above ₹149",
  },
  {
    code: "WELCOME100",
    description: "₹100 off for new users",
  },
];

const Offers = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Offers & Coupons</h1>

      <div className="space-y-4">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold">{offer.code}</h2>
              <p className="text-gray-600">{offer.description}</p>
            </div>

            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;