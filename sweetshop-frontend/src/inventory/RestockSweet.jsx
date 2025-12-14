import { useState } from "react";
import api from "../api/axios";

export default function RestockSweet({ sweet, onDone }) {
  const [qty, setQty] = useState(5);

  const restock = async () => {
    await api.post(`/sweets/${sweet.id}/restock`, {
      quantity: Number(qty),
    });
    onDone();
  };

  return (
    <>
      <input
        type="number"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        style={{ width: "60px" }}
      />
      <button onClick={restock}>Restock</button>
    </>
  );
}
