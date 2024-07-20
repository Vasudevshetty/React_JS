import { createContext, useReducer, useEffect, useContext } from "react";

const QuizContext = createContext();

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

const TIME_PER_Q = 30;

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

function QuizProvider({ children }) {
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
    //eslint-disable-next-line
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        length,
        total,

        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (!QuizContext) throw new Error("Quiz context was used of the context");
  return context;
}

export { QuizProvider, useQuiz };
