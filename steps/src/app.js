import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <>
      <Counter></Counter>
      <Steps />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("april 28 2024");
  date.setDate(date.getDate() + count * step);

  return (
    <div className="counter">
      <div className="step">
        <button
          onClick={() => {
            step > 1 && setStep((step) => step - 1);
          }}
        >
          -
        </button>
        Step : {step}
        <button
          onClick={() => {
            setStep((step) => step + 1);
          }}
        >
          +
        </button>
      </div>
      <div className="count">
        <button
          onClick={() => {
            setCount((count) => count - 1);
          }}
        >
          -
        </button>
        Count : {count}
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          +
        </button>
      </div>
      <p className="date">
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count * step} days later is `
          : `${count * step} days ago was `}
        {date.toDateString()}
      </p>
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        ️Step {step}: {messages.at(step - 1)}
      </p>
      <div className="buttons">
        <button
          className="prev"
          onClick={() => {
            step > 1 && step <= 3 && setStep((step) => step - 1);
          }}
        >
          Previous
        </button>
        <button
          className="next"
          onClick={() => {
            step >= 1 && step < 3 && setStep(step + 1);
          }}
        >
          Next
        </button>
        <div
          className="close"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          &times;
        </div>
      </div>
    </div>
  ) : (
    <div
      className="open"
      onClick={() => {
        setIsOpen(true);
      }}
    >
      O
    </div>
  );
}
