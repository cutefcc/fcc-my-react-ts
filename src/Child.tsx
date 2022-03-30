import React from "react";
// import { useAtom } from "jotai";
// import { numAtom } from "./store";
// export default React.memo(function Child(props) {
function Child(props: any) {
  console.log("子组件渲染了", props);
  // const [num, setNum] = useAtom(numAtom);
  return (
    <div>
      子组件: 
    </div>
  );
}
export default React.memo(Child);
// export default Child;
