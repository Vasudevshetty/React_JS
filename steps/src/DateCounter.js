import { useReducer } from "react";

const styles = {
  counter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    fontSize: "2rem",
    fontWeight: "bold",
    margin: "6rem",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "inc":
    case "dec":
      return { step: state.step, count: state.count + action.payload };
    case "setCount":
      return { step: state.step, count: action.payload };
    case "range":
      return { step: action.payload, count: state.count };
    case "reset":
      return { step: 0, count: 1 };
    default:
      return;
  }
}

export default function DateCounter() {
  const initial = { step: 1, count: 0 };
  const [state, dispatch] = useReducer(reducer, initial);
  const { step, count } = state;

  const date = new Date("may 03 2024");
  let inc = count * step;
  date.setDate(date.getDate() + inc);

  return (
    <div style={styles.counter}>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) =>
            dispatch({ type: "range", payload: +e.target.value })
          }
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "dec", payload: -1 })}>
          -
        </button>
        <input
          value={count}
          onChange={(e) =>
            dispatch({ type: "setCount", payload: +e.target.value })
          }
        />
        <button onClick={() => dispatch({ type: "inc", payload: 1 })}>+</button>
      </div>
      <p>{date.toString()}</p>
      <div>
        <button
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
