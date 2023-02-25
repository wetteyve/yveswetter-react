import { useState } from "react";
import logo from "./public/logos/logo_3d_background.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container min-h-screen flex flex-col mx-auto">
      <div className="bg-slate-600">i biims de header</div>
      <div className="flex-grow">
        <div className="fixed top-1/2 left-1/2] translate-x-[50%] translate-y-[-50%] w-[50%]">
          <img src={logo} alt="logo" className="opacity-[0.15]" />
        </div>
        <div className="h-[300vh]">i bims de content</div>
        <header className="App-header"></header>
      </div>
      <div className="bg-slate-600">i biims de footer</div>
    </div>
  );
}

export default App;
