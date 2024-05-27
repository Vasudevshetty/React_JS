import { useQuiz } from "../contexts/QuizContext";

export default function StartScreen() {
  const { length, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to the react quiz !</h2>
      <h3>{length} questions to test your React Mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "startQuiz" })}
      >
        Let's start
      </button>
    </div>
  );
}
