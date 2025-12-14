import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    await api.post("/auth/register", { username, password });
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-slate-200">
      <form className="bg-white p-6 rounded shadow w-80" onSubmit={handleRegister}>
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

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

        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Register
        </button>

        <p className="text-sm text-center mt-3">
          Already have an account?{" "}
          <Link className="text-blue-600 underline" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
