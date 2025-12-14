import { useState } from "react";
import api from "../api/axios";

export default function SearchSweet({ onResults }) {
  const [filters, setFilters] = useState({
    name: "",
    category: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const search = async (e) => {
    e.preventDefault();
    const params = {};
    Object.entries(filters).forEach(([k, v]) => {
      if (v) params[k] = v;
    });

    const res = await api.get("/sweets/search", { params });
    onResults(res.data);
  };

  return (
    <form onSubmit={search}>
      <h3>Search Sweets</h3>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="category" placeholder="Category" onChange={handleChange} />
      <input name="minPrice" type="number" placeholder="Min Price" onChange={handleChange} />
      <input name="maxPrice" type="number" placeholder="Max Price" onChange={handleChange} />

      <button>Search</button>
    </form>
  );
}
