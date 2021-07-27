import React from "react";
import { Provider } from "react-redux";
import Routes from "../../Routes";
import store from "../../store/store";
import Contact from "../Contact";
import FirstLook from "../FirstLook";
import Header from "../Header/Header";
import Profile from "../Profile";
import Projects from "../Projects";
import AllSkills from "../Skills";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();

  return (
    <Provider store={store}>
      <Header />
      <FirstLook />
      <Profile />
      <AllSkills />
      <Projects />
      <Contact />
      {/* <Routes /> */}
    </Provider>
  );
}

export default App;
