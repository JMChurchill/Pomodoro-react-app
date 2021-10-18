import "./App.css";
import ControlBar from "./Components/ControlBar";
import Timer from "./Components/Timer";

function App() {
  return (
    <div className="App">
      <h1>Pomodoro</h1>
      <Timer />
      <ControlBar />
    </div>
  );
}

export default App;
