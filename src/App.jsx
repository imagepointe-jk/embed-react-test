import "./App.css";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { Test } from "./Test";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
      {/* <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <p>Choo Choo! This is an example of a Vite + React app running on Railway.</p>
        </div> */}
    </Routes>
  );
}

export default App;
