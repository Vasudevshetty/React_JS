function FinishedScreen({ points, total, highscore, dispatch }) {
  const percentage = Math.ceil((points / total) * 100);
  let emoji;

  if (percentage === 100) emoji = "🎖️";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "️🤦‍♂️";

  return (
    <>
      <p className="results">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {total} ({percentage}%)
      </p>
      <p className="highscore">(Highscore : {highscore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishedScreen;
