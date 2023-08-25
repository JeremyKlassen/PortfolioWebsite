import Header from "./components/Header/Header";
import "./App.css";
import Body from "./components/Body/Body";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

export const Context = React.createContext({
  page: "",
  setPage: (value: string) => {},
});

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div className={styles.appContainer}>
      <Context.Provider value={{ page, setPage }}>
        <Header />
        <Routes>
          <Route path="/" element={<Body page={page} />} />
          <Route path="/Home" element={<Body page={page} />} />
          <Route path="/Services" element={<Body page={page} />} />
          <Route path="/About" element={<Body page={page} />} />
          <Route path="/Portfolio" element={<Body page={page} />} />
          <Route path="/Contact" element={<Body page={page} />} />
          <Route path="/Bully" element={<Body page={page} />} />
          <Route path="/Thanks" element={<Body page={page} />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
