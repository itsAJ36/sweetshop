import { useNavigate } from "react-router-dom";
import { getUserRole } from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const role = getUserRole();

  return (
    <nav className="bg-indigo-600 text-white shadow">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">🍬 Sweet Shop Manager</h1>

        <div className="flex items-center gap-4">
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
            {role === "admin" ? "Admin" : "User"}
          </span>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
            className="bg-red-500 hover:bg-red-600 px-4 py-1.5 rounded text-sm"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
