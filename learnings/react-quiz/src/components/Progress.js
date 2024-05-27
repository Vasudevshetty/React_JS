import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, length, total, points, answer } = useQuiz();
  const currQ = index + +(answer !== null);
  return (
    <div className="progress">
      <progress max={length} value={currQ} />
      <p>
        Question <strong>{currQ}</strong>/{length}
      </p>
      <p>
        {points} <strong>/{total}</strong>
      </p>
    </div>
  );
}

export default Progress;
