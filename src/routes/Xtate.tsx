import React, { useRef, createRef, useCallback, useEffect } from "react";
import { machine } from "../xstate/dog";
import { useMachine } from "@xstate/react";

function Xtate() {
  const [state, send] = useMachine(machine
    // , {
    // actions: {
    //   "go wakes up": () => {
    //     alert("go wakes up")
    //   },
    //   "give food": () => {
    //     alert("give food")
    //   },
    //   "go asleep": () => {
    //     alert("go asleep")
    //   },
    //   "awake entry": () => {
    //     alert("awake entry")
    //   },
    //   "awake out": () => {
    //     alert("awake out")
    //   },

    // }
  // }
  )
  console.log('state', state)
  const handleFoodLure = () => {
    send('food-lure');
  }
  const handleWakesUp = () => {
    send('wakes-up');
  }
  const handleFallsAslee = () => {
    send('falls-asleep');
  }
  return <div className="Xtate">
    <pre style={{marginBottom: '2rem'}}>
      {
        JSON.stringify({
          value: state.value,
          context: state.context,
        }, null, 2,)
      }
    </pre>
    <button style={{color: 'red'}} onClick={handleFoodLure}>food lure</button>
    <button style={{color: 'blue'}} onClick={handleWakesUp}>wakes up</button>
    <button style={{color: 'green'}} onClick={handleFallsAslee}>falls aslee</button>
  </div>;
}

export default Xtate;
