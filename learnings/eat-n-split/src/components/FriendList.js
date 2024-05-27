export default function FriendList({ friends, selected, handleSelect }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selected={selected}
          onSelect={handleSelect}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, selected, onSelect }) {
  return (
    <li className={selected === friend ? "selected" : ""}>
      <h3>{friend.name}</h3>
      <img src={friend.image} alt={friend.name} />
      {friend.balance === 0 ? (
        <p>You and {friend.name} are even</p>
      ) : friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you {friend.balance}$
        </p>
      ) : (
        <p className="red">
          You owe {friend.name} {-1 * friend.balance}$
        </p>
      )}

      <button
        className="button"
        onClick={() => {
          onSelect((selected) => (selected === friend ? null : friend));
        }}
      >
        {selected === friend ? "Close" : "Open"}
      </button>
    </li>
  );
}
