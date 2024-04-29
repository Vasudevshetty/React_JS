export default function ToggleButton({ open, onOpen }) {
  return (
    <button
      className="btn-toggle"
      onClick={() => {
        onOpen((open) => !open);
      }}
    >
      {!open ? "-" : "+"}
    </button>
  );
}
