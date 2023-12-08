import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route, useSearchParams } from "react-router-dom";

export function Test() {
  const [params] = useSearchParams();
  console.log(params.get("test"));
  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Choo Choo! This is an example of a Vite + React app running on
          Railway.
        </p>
      </div>
    </div>
  );
}
