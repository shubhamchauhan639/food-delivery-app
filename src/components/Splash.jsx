import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    const timer = setTimeout(() => {
      if (user) {
        navigate("/app", { replace: true });   // ✅ important
      } else {
        navigate("/intro", { replace: true }); // ✅ important
      }
    }, 2000);

    // ✅ cleanup (VERY IMPORTANT)
    return () => clearTimeout(timer);

  }, [navigate]);

  return (
    <div className="h-screen flex items-center justify-center bg-orange-500 text-white">
      <h1 className="text-4xl font-bold">Foodie</h1>
    </div>
  );
};

export default Splash;