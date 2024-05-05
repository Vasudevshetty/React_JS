import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishedScreen from "./components/FinishedScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";

const TIME_PER_Q = 30;

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataFetched":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "startQuiz":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * TIME_PER_Q,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finished":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        hishcore: state.highscore,
        status: "ready",
      };
    case "timer":
      return {
        ...state,
        secondsRemaining:
          state.secondsRemaining > 0 ? state.secondsRemaining - 1 : 0,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Something went wrong. Action unknown");
  }
}

function App() {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const total = questions.reduce((acc, curr) => acc + curr.points, 0);
  const length = questions.length;

  useEffect(() => {
    async function loadQuestion() {
      try {
        const response = await fetch("http://localhost:9000/questions");
        const data = await response.json();

        dispatch({ type: "dataFetched", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    }
    loadQuestion();
  }, []);

  return (
    <div className="app">
      <Header></Header>
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen length={length} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              i={index}
              n={length}
              points={points}
              total={total}
              answer={answer}
            ></Progress>
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer seconds={secondsRemaining} dispatch={dispatch} />
              {answer !== null && (
                <NextButton dispatch={dispatch} index={index} length={length} />
              )}
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishedScreen
            points={points}
            total={total}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
