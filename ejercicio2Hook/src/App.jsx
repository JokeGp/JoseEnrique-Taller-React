import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0); // puede guardar strings""
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");

  setTimeout(() => {
    setData(`Llegaron los datos`);
    setIsLoading(false);
  }, 1000);

  // setTimeout(() => setCounter(counter + 1), 1000);

  const incrementByOne = () => setCounter(counter + 1);
  const decrementByOne = () => setCounter(counter - 1);
  const resetToZero = () => setCounter(0);

  let toRender;
  if (isLoading) {
    toRender = <h1>Loading...</h1>;
  } else {
    toRender = <p>{data}</p>;
  }

  return (
    <div>
      {toRender}
      <div>{counter}</div>
      <button onClick={incrementByOne} disabled={counter >= 10}>
        increment
      </button>
      <button onClick={decrementByOne} disabled={counter <= 0}>
        decrement
      </button>
      <button onClick={resetToZero} disabled={counter <= 0}>
        reset
      </button>
    </div>
  );
};

export default App;
