import { useState } from "react";
import { messages } from "./app";

export default function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    step >= 1 && step < 3 && setStep(step + 1);
  }

  function handlePrev() {
    step > 1 && step <= 3 && setStep((step) => step - 1);
  }

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
        <Button styles="prev" handler={handlePrev}>
          <span>👈</span> Previous
        </Button>

        <Button styles="prev" handler={handleNext}>
          Next <span>👉</span>
        </Button>
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

function Button({ styles, handler, children }) {
  return (
    <button className={styles} onClick={handler}>
      {children}
    </button>
  );
}
