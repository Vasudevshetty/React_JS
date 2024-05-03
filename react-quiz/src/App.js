import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

const initialState = {
  questions: [],
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataFetched":
      return { ...state, questions: action.payload };
    default:
      throw new Error("Something went wrong.");
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
        console.log(err.message);
      }
    }
    loadQuestion();
  }, []);

  return (
    <div className="app">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
