import Header from "./components/Header/Header";
import "./App.css";
import Body from "./components/Body/Body";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className={styles.appContainer}>
        <Header />
        <Routes>
          <Route path="/" element={<Body page="Home" />} />
          <Route path="/Home" element={<Body page="Home" />} />
          <Route path="/Services" element={<Body page="Services" />} />
          <Route path="/About" element={<Body page="About" />} />
          <Route path="/Portfolio" element={<Body page="Portfolio" />} />
          <Route path="/Contact" element={<Body page="Contact" />} />
          <Route path="/Bully" element={<Body page="Bully" />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
