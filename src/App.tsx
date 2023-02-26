import { useState } from "react";
import logo from "./assets/logos/logo_3d_background.svg";
import "./App.css";
import Header from "./components/navbar/header";
import Footer from "./components/footer";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeContainer from "./components/home/home-container";
import ProjectsContainer from "./components/projects/projects-container";
import ContactContainer from "./components/contact/contact-container";
import ImpressumContainer from "./components/impressum/impressum-container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter basename="/">
        <Header />
        <div className="flex-grow">
          <div className="container xl:mx-auto">
            <div className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] -z-10">
              <img src={logo} alt="logo" className="opacity-[0.10]" />
            </div>
          </div>
          <div className="p-5 pb-0 container mx-auto">
            <Switch>
              <Route exact path="/" component={() => <HomeContainer />} />
              <Route
                exact
                path="/projects"
                component={() => <ProjectsContainer />}
              />
              <Route
                exact
                path="/contact"
                component={() => <ContactContainer />}
              />
              <Route
                exact
                path="/impressum"
                component={() => <ImpressumContainer />}
              />
            </Switch>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
