import Header from "./components/layouts/Header/Header";
import "./App.css";
import Body from "./components/layouts/Body/Body";
import styles from "./App.module.css";
import Footer from "./components/layouts/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import React, { useState, Dispatch, SetStateAction } from "react";

export interface PageContextInterface {
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
}

const defaultState = {
  page: "Home",
  setPage: (_page: string) => {},
} as PageContextInterface;

export const Context = React.createContext(defaultState);

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
        {/* <Footer /> */}
      </Context.Provider>
    </div>
  );
}

export default App;
