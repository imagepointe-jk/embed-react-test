import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";

export function Test() {
  useEffect(() => {
    const handleMessage = (e) => {
      console.log(
        `Does ${e.origin} equal https://imagepointe.com?`,
        e.origin === "https://imagepointe.com"
      );
      if (e.origin !== "https://imagepointe.com") {
        console.log("received an unwanted message from " + e.origin);
        return;
      }
      console.log(e.data);
    };
    window.addEventListener("message", handleMessage);
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
      <button
        onClick={() => window.parent.postMessage("Hello from child", "*")}
      >
        Send message
      </button>
    </div>
  );
}
