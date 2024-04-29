import "./index.css";
import FriendList from "./components/FriendList";
import { FormSplit, FormAdd } from "./components/Form";

function App() {
  return (
    <div className="app">
      <FriendList />
      <FormSplit />
      <FormAdd />
    </div>
  );
}

export default App;
