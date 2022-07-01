import { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // salva los clicks de cada boton que es pulsado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // const [all, setTotal] = useState(0);

  const goods = () => setGood(good + 1);
  const neutrals = () => setNeutral(neutral + 1);
  const bads = () => setBad(bad + 1);

  const count = ({ prop }, { setProp }) => setProp(prop + 1);
  // const total = () => setTotal(all + good + neutral + bad);

  return (
    <div>
      <h1>Please Give us Feedback!!</h1>
      {/* <button onClick={goods}>good</button> */}
      <button onClick={count({ good }, { setGood })}>good</button>
      <button onClick={neutrals}>neutral</button>
      <button onClick={bads}>bad</button>
      <h2>Statistics</h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>All {good + neutral + bad}</p>
      <p>Average {good + neutral + bad / 3}</p>
      <p>Apositive {good + neutral / 2} %</p>
    </div>
  );
};

export default App;
