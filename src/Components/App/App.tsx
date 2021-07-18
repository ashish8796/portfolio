import React from "react";
import { Provider } from "react-redux";
import Routes from "../../Routes";
import store from "../../store/store";
import FirstLook from "../FirstLook";
import Header from "../Header/Header";
import Profile from "../Profile";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <FirstLook />
      <Profile />
      {/* <Routes /> */}
    </Provider>
  );
}

export default App;
