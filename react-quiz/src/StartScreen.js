export default function StartScreen({ length }) {
  return (
    <div className="start">
      <h2>Welcome to the react quiz !</h2>
      <h3>{length} questions to test your React Mastery</h3>
      <button className="btn btn-ui">Let's start</button>
    </div>
  );
}
