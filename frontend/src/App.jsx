import React, { useState } from "react";
import "./App.scss";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        {" "}
        increment{" "}
      </button>
      {counter}
      <button onClick={() => setCounter((counter) => counter - 1)}>
        {" "}
        decrement{" "}
      </button>
    </div>
  );
};

export default App;
