export default function NextButton({ dispatch, index, length }) {
  const finished = index === length - 1;
  const type = finished ? "finished" : "nextQuestion";

  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: type })}>
      {finished ? "Finish" : "Next"}
    </button>
  );
}
