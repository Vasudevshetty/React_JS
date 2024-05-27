import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("april 28 2024");
  date.setDate(date.getDate() + count * step);

  return (
    <div className="counter">
      <div className="step">
        <div>
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => {
              setStep(+e.target.value);
            }}
          />
        </div>
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
            step < 10 && setStep((step) => step + 1);
          }}
        >
          +
        </button>
      </div>
      <div className="count">
        <div>
          <input
            type="number"
            value={count}
            onChange={(e) => {
              setCount(+e.target.value);
            }}
          />
        </div>
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
