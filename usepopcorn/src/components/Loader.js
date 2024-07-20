export function Loader() {
  return <p className="loader">Loading</p>;
}
export function Error({ message }) {
  return (
    <p className="error">
      <span>⛔</span>
      {message}
    </p>
  );
}
