import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const _token = localStorage.getItem("token");
    if (_token) {
      setToken(_token);
    }
  }, []);
  return (
    <div className="App">
      {!token ? <Login setToken={setToken} /> : <Home token={token} />}
    </div>
  );
}

export default App;
