import React, { useEffect } from "react";
import { useImmer } from "../hooks/useImmer";
// import { useAtom } from "jotai";
// import { numAtom } from "./store";
// export default React.memo(function Child(props) {
function Child(props: any) {
  // console.log("子组件渲染了", props);
  // const [num, setNum] = useAtom(numAtom);
  const [data, setData] = useImmer({ apiData: { pathname: "" } });
  const [kv, setKv] = useImmer({v: '111'});
  useEffect(() => {}, []);
  const handleFetch = () => {
    fetch("https://my-app.cutefcc.workers.dev/api")
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((res) => {
        setData((draft) => {
          draft.apiData.pathname = res.pathname;
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const handleFetchKV = () => {
    fetch("api/KV-get-data")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log("res", res);
        setKv((draft) => {
          draft.v = res;
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const handleSetKV = () => {
    fetch("https://my-app.cutefcc.workers.dev/api/KV-set-data?a=a2&b=b2")
      .then((response) => response.text())
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div>
      子组件:
      <button onClick={handleFetch}>fetch cloudfire test</button>
      <button onClick={handleFetchKV}>get KV data</button>
      <br />
      fetch cloudfire data: {data.apiData.pathname}
      <br />
      fetch kv data: {kv.v}
      <br />
      <button onClick={handleSetKV}>set KV</button>
    </div>
  );
}
export default React.memo(Child);
// export default Child;
