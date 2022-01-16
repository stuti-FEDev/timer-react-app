import React, {useState, useEffect} from "react";
import './App.css';
import Timer from './components/timer';

function App(props) {

  const [counter, setCounter] = useState(props.initial);
  const [status, setStatus]  = useState("PAUSE");

  useEffect(() => {
    let timer;
    if(status === "PAUSE"){
       timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [counter, status]);

  const stopTimer = () => {
    if(status==="PAUSE"){
      setStatus("RESUME");
    }else{
      setStatus("PAUSE");
    }
  }
  return (
    <div className="App">
      <header> Timer App </header>
      <Timer counter={counter} onClick={stopTimer} status={status} />
    </div>
  );

}

export default App;
