import logo from "./logo.svg";
import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          {/* <Route path="/products" component={Products} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
