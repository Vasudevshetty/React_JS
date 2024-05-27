import "./tip.css";
import { useState } from "react";

export default function Tip() {
  const [myTip, setMyTip] = useState(0.05);
  const [friendTip, setFriendTip] = useState(0.05);
  const [bill, setBill] = useState(0);

  const tip = ((friendTip + myTip) / 2).toFixed(2) * bill;
  const total = +bill + +tip;

  function handleReset() {
    setMyTip(0.05);
    setFriendTip(0.05);
    setBill(0);
  }

  return (
    <div className="tip">
      <div className="bill">
        How much was the bill?
        <input
          type="text"
          value={bill}
          onChange={(e) => {
            setBill(+e.target.value);
          }}
        />
      </div>
      <div className="liking">
        How did you like the service?
        <Options tip={myTip} onTip={setMyTip} />
      </div>
      <div className="friend">
        How did your friend like the service?
        <Options tip={friendTip} onTip={setFriendTip} />
      </div>
      {bill > 0 && (
        <h1>
          You pay ${total} (${bill}+ ${tip})
        </h1>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

function Options({ tip, onTip }) {
  return (
    <select
      value={tip}
      onChange={(e) => {
        onTip(+e.target.value);
      }}
    >
      <option value="0">Dissatisfied (0%)</option>
      <option value="0.05">It was okay (5%)</option>
      <option value="0.1">It ws good (10%)</option>
      <option value="0.2">Absouletly amazing (20%)</option>
    </select>
  );
}
