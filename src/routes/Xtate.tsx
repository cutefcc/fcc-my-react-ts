import React, { useRef, createRef, useCallback, useEffect } from "react";
import { machine } from "../xstate/dog";
import { useMachine } from "@xstate/react";

function Xtate() {
  const [state, send] = useMachine(machine, {
    actions: {
      "go wakes up": () => {
        alert("go wakes up 1");
      },
      "give food": () => {
        alert("give food 1");
      },
      "go asleep": () => {
        alert("go asleep 1");
      },
      "awake entry": () => {
        alert("awake entry 1");
      },
      "awake out": () => {
        alert("awake out 1");
      },
    },
  });
  console.log("state", state);
  const handleFoodLure = () => {
    send("food-lure");
  };
  const handleWakesUp = () => {
    send("wakes-up");
  };
  const handleFallsAslee = () => {
    send("falls-asleep");
  };
  return (
    <div className="Xtate">
      <pre style={{ marginBottom: "2rem" }}>
        {JSON.stringify(
          {
            value: state.value,
            context: state.context,
          },
          null,
          2
        )}
      </pre>
      <button style={{ color: "red" }} onClick={handleFoodLure}>
        food lure
      </button>
      <button style={{ color: "blue" }} onClick={handleWakesUp}>
        wakes up
      </button>
      <button style={{ color: "green" }} onClick={handleFallsAslee}>
        falls aslee
      </button>
    </div>
  );
}

export default Xtate;
