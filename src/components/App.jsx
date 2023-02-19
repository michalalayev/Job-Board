import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div>
        <h1>Hello</h1>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}


export default App;



