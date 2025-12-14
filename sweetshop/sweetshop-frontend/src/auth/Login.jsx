import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await api.post("/auth/login", { username, password });
    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-slate-200">
      <form className="bg-white p-6 rounded shadow w-80" onSubmit={handleLogin}>
        
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <input
          className="w-full border p-2 mb-3 rounded"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-2 mb-3 rounded"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>

        <p className="text-sm text-center mt-3">
          New user?{" "}
          <Link className="text-blue-600 underline" to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
