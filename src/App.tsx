import Header from "./components/Header/Header";
import "./App.css";
import Body from "./components/Body/Body";
import styles from "./App.module.css";
import { useState } from "react";
import SocialMedia from "./components/SocialMedia/SocialMedia";

function App() {
  const [currentPage, updatePage] = useState("nothing");

  const test = (word: string) => console.log(word);

  const handlePage = (page: string) => {
    updatePage(page);
    test(page);
  };

  return (
    <>
      <div className={styles.appContainer}>
        <Header updatePage={handlePage} />
        <Body page={currentPage} />
        <SocialMedia />
      </div>
    </>
  );
}

export default App;
