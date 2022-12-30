import "./App.css";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { useState } from "react";

function App() {
  //Текущая страница
  const [currentPage, setCurrentPage] = useState(1);
  //Колличество эмоджи на странице
  const [recordsPerPage, setRecordsPerPage] = useState(12);

  return (
    <>
      <Header />
      <Main
        recordsPerPage={recordsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setRecordsPerPage={setRecordsPerPage}
      />
    </>
  );
}

export default App;
