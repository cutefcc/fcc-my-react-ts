import React, {useEffect} from "react";
// import { useAtom } from "jotai";
// import { numAtom } from "./store";
// export default React.memo(function Child(props) {
function Child(props: any) {
  console.log("子组件渲染了", props);
  // const [num, setNum] = useAtom(numAtom);
  useEffect(() => {
    fetch('http://127.0.0.1:8787/api')
    .then(response => response.json())
    .then(data => console.log(data));
  }, [])
  return (
    <div>
      子组件: 
    </div>
  );
}
export default React.memo(Child);
// export default Child;
