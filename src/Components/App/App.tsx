import React from "react";
import { Provider } from "react-redux";
import Routes from "../../Routes";
import store from "../../store/store";
// import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
