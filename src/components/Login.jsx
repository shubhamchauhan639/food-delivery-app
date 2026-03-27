import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("user", "true");
    navigate("/app");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>Login Page</h1>

      <button
        onClick={handleLogin}
        className="mt-4 px-6 py-2 bg-green-500 text-white"
      >
        Login
      </button>
    </div>
  );
};

export default Login;