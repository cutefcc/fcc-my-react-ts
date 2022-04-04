import React, { useRef, createRef, useCallback, useEffect } from "react";
import { useImmer } from "../hooks/useImmer";
import { useMountedState } from "../hooks/useMountedState";
import { atomWithImmer, useImmerAtom } from "jotai/immer";
import Child from "../components/Child";
const manageAtomObj = atomWithImmer({ num: 1 });

function Home() {
  console.log("父组件渲染了");
  const [count, setCount] = useImmer({ num: 1 });
  const isMoundFn = useMountedState();
  console.log("isMoundFn", isMoundFn());
  // const [count, setCount] = useImmerAtom(manageAtomObj);
  const handleAppButtonClick = () => {
    setCount((draft) => {
      draft.num = draft.num + 1;
    });
  };
  useEffect(() => {
    console.log("isMoundFn", isMoundFn());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleAppButtonClick}>change Count</button>
        父组件:{count.num}
        <p>-----------------------------------------------------</p>
        <Child count={count} />
      </header>
    </div>
  );
}

export default Home;
