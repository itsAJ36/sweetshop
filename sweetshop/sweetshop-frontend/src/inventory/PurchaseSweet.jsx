import api from "../api/axios";

export default function PurchaseSweet({ sweet, onDone }) {
  const purchase = async () => {
    await api.post(`/sweets/${sweet.id}/purchase`, { quantity: 1 });
    onDone();
  };

  return (
    <button disabled={sweet.quantity <= 0} onClick={purchase}>
      Buy
    </button>
  );
}
