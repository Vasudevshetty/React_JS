export default function Stats({ items }) {
  const packed = items.reduce(
    (accumulator, item) => (item.packed ? accumulator + 1 : accumulator),
    0
  );

  return items.length ? (
    <footer className="stats">
      <em>
        👜 You have {items.length} items on your list, and you already packed{" "}
        {packed} ({(packed / items.length).toFixed(4) * 100}%)
      </em>
    </footer>
  ) : (
    <p className="stats">
      <em>Start adding some items to your packing list 🚀</em>
    </p>
  );
}
