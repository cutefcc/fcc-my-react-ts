import React, { useRef, createRef, useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Xtate from "./routes/Xtate";
// import { useImmer } from "./hooks/useImmer";
// import produce from "immer";
// import { useImmer, useMountedState } from "@fcc/hooks";
// import { useMountedState } from "@fcc/hooks";
import { atomWithImmer, useImmerAtom } from "jotai/immer";
const manageAtomObj = atomWithImmer({ num: 1 });

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/xstate" element={<Xtate />} />
      </Routes>
    </BrowserRouter>
  );

  // console.log("父组件渲染了");
  // const [count, setCount] = useImmer({ num: 1 });
  // const isMoundFn = useMountedState();
  // console.log("isMoundFn", isMoundFn());
  // // const [count, setCount] = useImmerAtom(manageAtomObj);
  // const handleAppButtonClick = () => {
  //   setCount((draft) => {
  //     draft.num = draft.num + 1;
  //   });
  // };
  // useEffect(() => {
  //   console.log("isMoundFn", isMoundFn());
  // }, []);

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <button onClick={handleAppButtonClick}>change Count</button>
  //       父组件:{count.num}
  //       <p>-----------------------------------------------------</p>
  //       <Child count={count} />
  //     </header>
  //   </div>
  // );
}

export default App;
