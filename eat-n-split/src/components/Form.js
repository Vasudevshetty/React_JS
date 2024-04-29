export function FormSplit({ friend }) {
  return (
    <form class="form-split-bill">
      <h2>Split a bill with {friend?.name}</h2>
      <LabelInput emoji="💰" text="Bill Value">
        <input type="text" />
      </LabelInput>
      <LabelInput emoji="🧍" text="Your expense">
        <input type="text" />
      </LabelInput>
      <LabelInput emoji="🧑‍🤝‍🧑" text={`${friend?.name} expense`}>
        <input type="text" />
      </LabelInput>
      <LabelInput emoji="🤑" text="Who is paying the bill?">
        <select value="You">
          <option>You</option>
          <option>{friend?.name}</option>
        </select>
      </LabelInput>
      <button className="button">Split bill</button>
    </form>
  );
}

export function FormAdd() {
  return (
    <form className="form-add-friend">
      <LabelInput emoji="🧑‍🤝‍🧑" text="Name">
        <input type="text" />
      </LabelInput>
      <LabelInput emoji="🖼️" text="Image URL">
        <input type="text" />
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
