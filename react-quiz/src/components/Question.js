import Option from "./Option";

function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, index) => (
          <Option
            option={option}
            dispatch={dispatch}
            key={option}
            index={index}
            answer={answer}
            correct={index === question.correctOption}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;
