import { useEffect, useState } from "react";
import "./App.css"

function App() {
  const [time, setTime] = useState(0);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    let intervalId;
    if (!paused){
      intervalId = setInterval(() => setTime(time + 1), 10);
    }

    return () => clearInterval(intervalId);
  })

  const hrs = Math.floor(time / (100 * 60 * 60));
  const min = Math.floor(time / (100*60));
  const sec = Math.floor((time % 6000)/ 100);
  const mil = time%100;

  const StartandStop = () => {
    setPaused(!paused);
  };

  const reset = () => {
    setTime(0);
    setPaused(true);
  };

  return (
    <div className="container">
      {hrs.toString().padStart(2, "0")}:{min.toString().padStart(2, "0")}:{sec.toString().padStart(2, "0")}.{mil.toString().padStart(2, "0")}
      <div>
        <button className="btns btn-1" onClick={StartandStop}>{paused ? "Start": "Stop"}</button>
        <button className="btns btn-2" onClick={reset}>reset</button>
      </div>
    </div>
  );
}

export default App;
