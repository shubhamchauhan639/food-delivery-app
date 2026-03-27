import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Welcome 🍔</h1>

      <button
        onClick={() => navigate("/login")}
        className="mt-6 px-6 py-2 bg-orange-500 text-white rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Onboarding;