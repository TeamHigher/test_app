import React from "react";
import "./App.css";
import { useState } from "react";
import * as Icons from "react-feather";

function MyApp() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  

  const generateRandomNumber = () => {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    setCount(randomValue);
  };

  // useEffect(() => {
  //   document.title = `Count: ${count}`;
  // }, [count]);

  return (
    <main className="button-wrapper">
      <BigCountNumber count={count}/>
      <button onClick={() => setCount(count + 1)} className="button">
        <Icons.ChevronUp />
      </button>
      <button onClick={() => setCount(count + 10)} className="button">
        <Icons.ChevronsUp />
      </button>
      <button onClick={() => setCount(0)} className="button">
        <Icons.RotateCcw />
      </button>

      <button onClick={generateRandomNumber} className="button">
        <Icons.Hash />
      </button>

      <button onClick={() => setCount(count - 10)} className="button">
        <Icons.ChevronsDown />
      </button>
      <button onClick={() => setCount(count - 1)} className="button">
        <Icons.ChevronDown />
      </button>
    </main>
  );
}

function BigCountNumber({ count }) {
  return (
    <div className='subWrapper'>
      <span className="prefix">Current value:</span>
      <p className='count'>{count}</p>
    </div>
  );
}
export default MyApp;
