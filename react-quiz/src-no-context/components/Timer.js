import { useEffect } from "react";

function Timer({ seconds, dispatch }) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "timer" });
    }, 1000);

    return () => clearInterval(id);
  });

  return (
    <div className="timer">
      {min.toString().padStart(2, "0")}:{sec.toString().padStart(2, "0")}
    </div>
  );
}

export default Timer;
