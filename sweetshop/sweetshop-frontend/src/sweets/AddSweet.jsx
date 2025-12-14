import { useState } from "react";
import api from "../api/axios";

export default function AddSweet({ onAdded }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/sweets", {
      name: form.name,
      category: form.category,
      price: Number(form.price),
      quantity: Number(form.quantity),
    });

    setForm({ name: "", category: "", price: "", quantity: "" });
    onAdded && onAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Sweet</h3>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} required />
      <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required />
      <input name="quantity" type="number" placeholder="Quantity" value={form.quantity} onChange={handleChange} required />
      <button>Add</button>
    </form>
  );
}
