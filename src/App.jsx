import React,{useEffect,useState} from "react";
import Song from './assets/song.mp3'

const App = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    const audio = new Audio(Song);

    if (running) {
      audio.play();
      interval = setInterval(() => {
        setTime((preTime) => preTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
      audio.pause();
    };
  }, [running]);

  return (
    <div className="flex items-center justify-center h-screen bg-slate-950">
      <div className="text-white">
        <h1 className="text-center text-4xl">StopWatch</h1>

        <div className="border-black text-9xl">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>

        <div className="flex justify-center my-5 gap-5">
          {running ? (
            <button
              className="bg-red-600 text-white px-5 py-2 rounded-md"
              onClick={() => setRunning(false)}
            >
              Stop
            </button>
          ) : (
            <button
              className="bg-green-600 text-white px-5 py-2 rounded-md"
              onClick={() => setRunning(true)}
            >
              Start
            </button>
          )}
          <button
            className="bg-blue-500 text-white px-5 py-2 rounded-md"
            onClick={() => {
              setRunning(false);
              setTime(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
