import { useState } from "react";

export function FormSplit({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState(0);
  const [userExp, setUserExp] = useState(0);
  const friendExp = bill - userExp;
  const [payBy, setPayBy] = useState("user");

  function handleSplitSubmit(e) {
    e.preventDefault();

    const balance = payBy === "user" ? +friendExp : +(-1 * userExp);

    onSplitBill(balance);

    setBill(0);
    setUserExp(0);
    setPayBy("user");
  }

  return (
    <form className="form-split-bill" onSubmit={handleSplitSubmit}>
      <h2>Split a bill with {selectedFriend?.name}</h2>
      <LabelInput emoji="💰" text="Bill Value">
        <input
          type="text"
          value={bill}
          onChange={(e) => {
            setBill(+e.target.value);
          }}
        />
      </LabelInput>
      <LabelInput emoji="🧍" text="Your expense">
        <input
          type="text"
          value={userExp}
          onChange={(e) => {
            setUserExp(e.target.value <= bill ? +e.target.value : userExp);
          }}
        />
      </LabelInput>
      <LabelInput emoji="🧑‍🤝‍🧑" text={`${selectedFriend?.name} expense`}>
        <input type="text" value={friendExp} disabled />
      </LabelInput>
      <LabelInput emoji="🤑" text="Who is paying the bill?">
        <select
          value={payBy}
          onChange={(e) => {
            setPayBy(e.target.value);
          }}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend?.name}</option>
        </select>
      </LabelInput>
      <button className="button">Split bill</button>
    </form>
  );
}

export function FormAdd({ addFriends }) {
  const [name, setName] = useState("");
  const [url, setURl] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !url) return;

    const id = crypto.randomUUID();
    const newFriend = { id, name, image: `${url}?=${id}`, balance: 0 };

    addFriends(newFriend);

    setName("");
    setURl("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <LabelInput emoji="🧑‍🤝‍🧑" text="Friend Name">
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </LabelInput>
      <LabelInput emoji="🖼️" text="Image URL">
        <input
          type="text"
          value={url}
          onChange={(e) => {
            setURl(e.target.value);
          }}
        />
      </LabelInput>
      <button className="button">Add</button>
    </form>
  );
}

function LabelInput({ emoji, text, children }) {
  return (
    <>
      <label>
        <span>{emoji}</span>
        {text}
      </label>
      {children}
    </>
  );
}
