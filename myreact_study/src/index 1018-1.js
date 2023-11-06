import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [n, setN] = useState(0);
  const todoIdx = useRef(0); // todoIdx={current:0}
  console.log(todoIdx);
  useEffect(
    () => {
      console.log("렌더링");
    } // ,[]
  );

  const addTodo = () => {
    todoIdx.current = todoIdx.current + 1;
    console.log(todoIdx.current);
  };

  return (
    <>
      <h1>{n}</h1>
      <button onClick={() => setN(n + 1)}>+1</button>
      <hr />

      <h1>todoIdx:{todoIdx.current}</h1>
      <button
        onClick={() => {
          addTodo(); // useRef의 State
          setN(n + 1); // useState의 State
        }}
      >
        새로 할 일 추가
      </button>
    </>
  );
};

ReactDOM.createRoot(document.querySelector("#root")).render(
  <>
    <App></App>
  </>
);
