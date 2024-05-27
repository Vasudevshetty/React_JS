import { useState } from "react";
const Styles = {
  container: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "7px",
    backgroundColor: "#f7f7f7",
  },
  btn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    marginLeft: "6px",
  },
};

export default function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = "#1f09cd",
  expanded = false,
  styles,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ", collapsedNumWords).join(" ") + "...";

  return (
    <div style={styles}>
      <span>{displayText}</span>
      <button
        style={{ ...Styles.btn, color: buttonColor }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
