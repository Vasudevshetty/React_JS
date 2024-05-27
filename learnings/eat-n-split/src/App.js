import "./index.css";
import { useState } from "react";
import FriendList from "./components/FriendList";
import { FormSplit, FormAdd } from "./components/Form";

const initalFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [add, setAdd] = useState(false);
  const [selected, setSelected] = useState(null);
  const [friends, setFriends] = useState(initalFriends);

  function handleAddFriends(newFriend) {
    setFriends([...friends, newFriend]);
    setAdd(false);
  }

  function handleSplitBill(updatedBalance) {
    setFriends(
      friends.map((friend) =>
        friend === selected
          ? { ...friend, balance: selected.balance + updatedBalance }
          : friend
      )
    );
    setSelected(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selected={selected}
          handleSelect={setSelected}
        />
        {add && <FormAdd addFriends={handleAddFriends} />}
        <button
          className="button"
          onClick={() => {
            setAdd((add) => !add);
          }}
        >
          {!add ? "Add friend" : "Close"}
        </button>
      </div>
      {selected && (
        <FormSplit
          selectedFriend={selected}
          onSplitBill={handleSplitBill}
          key={selected.name}
        />
      )}
    </div>
  );
}

export default App;
