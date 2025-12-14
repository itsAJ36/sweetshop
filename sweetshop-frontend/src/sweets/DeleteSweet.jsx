import api from "../api/axios";

export default function DeleteSweet({ sweetId, onDone }) {
  const remove = async () => {
    if (!window.confirm("Are you sure you want to delete this sweet?")) return;
    await api.delete(`/sweets/${sweetId}`);
    onDone();
  };

  return (
    <button style={{ color: "red" }} onClick={remove}>
      Delete
    </button>
  );
}
