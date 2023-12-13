import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";

export function Test() {
  const [params] = useSearchParams();
  const location = useLocation();
  console.log("test param", params.get("test"));
  console.log("location", location);

  useEffect(() => {
    const handleMessage = (e) => {
        if (e.origin === "http://127.0.0.1:5500") {
            console.log("received");
        }
      console.log("the origin is", e.origin);
      console.log(e.data);
    };
    window.addEventListener("message", handleMessage);
    console.log("added event listener");
    return () => {
      window.removeEventListener("message", handleMessage);
      console.log("removed event listener");
    };
  }, []);

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
