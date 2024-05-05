import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";

const initialState = {
  questions: [],
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataFetched":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Something went wrong. Action unknown");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
        {state.status === "loading" && <Loader />}
        {state.status === "error" && <Error />}
        {state.status === "ready" && (
          <StartScreen length={state.questions.length} />
        )}
      </Main>
    </div>
  );
}

export default App;
