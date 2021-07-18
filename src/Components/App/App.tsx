import React from "react";
import { Provider } from "react-redux";
import Routes from "../../Routes";
import store from "../../store/store";
import FirstLook from "../FirstLook";
import Header from "../Header/Header";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <FirstLook />
      {/* <Routes /> */}
    </Provider>
  );
}

export default App;
