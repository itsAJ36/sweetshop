import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import AddSweet from "../sweets/AddSweet";
import SearchSweet from "../sweets/SearchSweet";
import PurchaseSweet from "../inventory/PurchaseSweet";
import RestockSweet from "../inventory/RestockSweet";
import DeleteSweet from "../sweets/DeleteSweet";
import { isAdmin } from "../utils/auth";

export default function Dashboard() {
  const [sweets, setSweets] = useState([]);

  const loadSweets = async () => {
    const res = await api.get("/sweets");
    setSweets(res.data);
  };

  useEffect(() => {
    loadSweets();
  }, []);

  return (
    <>
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
      <div style={{ padding: "20px" }}>
        <h2>Sweets Dashboard</h2>

        {/* Admin: Add Sweet */}
        {isAdmin() && <AddSweet onAdded={loadSweets} />}

        {/* Search */}
        <SearchSweet onResults={setSweets} />

        {/* Sweets List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
  {sweets.map((s) => (
    <div
      key={s.id}
      className="bg-white rounded-lg shadow-sm border p-4 flex justify-between items-center"
    >
      <div>
        <h3 className="text-lg font-semibold text-slate-800">
          {s.name}
        </h3>
        <p className="text-sm text-slate-500">
          {s.category} · ₹{s.price}
        </p>
        <p className="text-sm mt-1">
          Stock:{" "}
          <span className={s.quantity < 5 ? "text-red-600" : "text-green-600"}>
            {s.quantity}
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <PurchaseSweet sweet={s} onDone={loadSweets} />

        {isAdmin() && (
          <>
            <RestockSweet sweet={s} onDone={loadSweets} />
            <DeleteSweet sweetId={s.id} onDone={loadSweets} />
          </>
        )}
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
    </>
  );
}
