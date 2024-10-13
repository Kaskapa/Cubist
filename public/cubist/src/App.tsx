import { useState } from "react";
import ScrambleGenerator from "./components/ScrambleGenerator";
import StopWatch from "./components/StopWatch";
import './styles/app.css';

function App(){
  const [updateScramble, setUpdateScramble] = useState<boolean>(false);

  const handleStop = () => {
    setUpdateScramble(true);
  }

  const handleUpdateReseter = () => {
    setUpdateScramble(false);
  }

  return (
    <main>
      <ScrambleGenerator updateScramble={updateScramble} updateScrambleReseter={handleUpdateReseter}></ScrambleGenerator>
      <StopWatch onStop={handleStop}></StopWatch>
    </main>
  )
}

export default App;