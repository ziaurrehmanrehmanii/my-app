import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Components/Header";
import Footer from "./Components/Foter";
import Main from "./Components/Main";
import MainProvider from "./Context/MainProvider";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Name from "./Name";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainProvider>
        <Header />

        <Router>
          <Routes>
            <Route path="/person" element={<Name />} />
            <Route path="/person/name" element={<Name />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>

        <Footer />
      </MainProvider>
    </>
  );
}

export default App;
