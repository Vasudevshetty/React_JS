export default function Option({ option, dispatch, index, answer, correct }) {
  return (
    <button
      className={`btn btn-option ${index === answer ? "answer" : ""} ${
        answer !== null ? (correct ? "correct" : "wrong") : ""
      }`}
      key={option}
      disabled={answer !== null}
      onClick={() => dispatch({ type: "newAnswer", payload: index })}
    >
      {option}
    </button>
  );
}
