import "./App.css";
import Login from "./login/Login";
import { useState } from "react";
import Page from "./page/Page";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  if (token) {
    return <Page />;
  }
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
