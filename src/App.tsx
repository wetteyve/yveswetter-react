import { useState } from "react";
import logo from "./assets/logos/logo_3d_background.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <div className="container xl:mx-auto">
          <div className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <img src={logo} alt="logo" className="opacity-[0.10]" />
          </div>
        </div>
        <div className="p-5 container mx-auto">content</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
