import "./TabbedStyle.css";
import { useState } from "react";

const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function TabbedContent() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onActive={setActiveTab}></Tab>
        <Tab num={1} activeTab={activeTab} onActive={setActiveTab}></Tab>
        <Tab num={2} activeTab={activeTab} onActive={setActiveTab}></Tab>
        <Tab num={3} activeTab={activeTab} onActive={setActiveTab}></Tab>
      </div>

      {activeTab <= 2 ? (
        <TabContent
          item={content[activeTab]}
          key={`t${activeTab + 1}`}
        ></TabContent>
      ) : (
        <DifferentContent />
      )}
    </div>
  );
}

function Tab({ num, activeTab, onActive }) {
  return (
    <button
      className={activeTab === num ? "tab active" : "tab"}
      onClick={() => onActive(num)}
    >
      Tab {num + 1}
    </button>
  );
}

function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleUndo() {
    setShowDetails(false);
    setLikes(0);
  }

  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "hide" : "show"}
        </button>

        <div className="hearts-counter">
          <span>{likes}❤️</span>
          <button onClick={() => setLikes(likes + 1)}>+</button>
          <button onClick={() => setLikes((likes) => (likes += 3))}>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={() => setTimeout(handleUndo, 2000)}>Undo in 2s</button>
      </div>
    </div>
  );
}

function DifferentContent() {
  return (
    <div className="tab-content">
      <h4>I'm a DIFFERENT tab, so I reset state 💣💥</h4>
    </div>
  );
}
