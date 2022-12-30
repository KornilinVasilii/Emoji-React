import s from "./Main.module.css";
import { Cards } from "../Cards/Cards";
import { data } from "../Cards/emoji";
import { useState } from "react";
import { DoubleDelet } from "../DoubleDelet/DoubleDelet";
import { Pagination } from "../Pagination/Pagination";
import { Container } from "../Container/Container";
import { Select } from "../Select/Select";

export const newData = DoubleDelet(data);

export function Main({
  recordsPerPage,
  currentPage,
  setCurrentPage,
  setRecordsPerPage,
}) {
  //Состояние Input
  const [value, setValue] = useState("");
  //Все эмоджи
  const [emoji, setEmoji] = useState(newData);

  //Поиск
  function searchEmoji(event) {
    const emoji = newData.filter(
      (el) =>
        el.title
          .toLowerCase()
          .includes(event.target.value.trim().toLowerCase()) ||
        el.keywords
          .toLowerCase()
          .includes(event.target.value.trim().toLowerCase())
    );
    setEmoji(emoji);
    setCurrentPage(1);
  }

  //Индекс последней эмоджи на странице
  const indexOfLastRecords = currentPage * recordsPerPage;
  //Индекс первой эмоджи на странице
  const indexOfFirstRecords = indexOfLastRecords - recordsPerPage;
  //Эмоджи на текущей странице
  const currentRecords = emoji.slice(indexOfFirstRecords, indexOfLastRecords);
  //Колличество страниц
  const nPages = Math.ceil(emoji.length / recordsPerPage);

  return (
    <>
      <div className={s.main}>
        <input
          onChange={(e) => {
            searchEmoji(e);
          }}
          placeholder="Emoji search"
          className={s.input}
        ></input>
        {currentRecords.map((el, i) => (
          <Cards key={i} {...el} />
        ))}
      </div>
      <footer className={s.footer}>
        <Container>
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <Select setValue={setValue} setRecordsPerPage={setRecordsPerPage} />
        </Container>
      </footer>
    </>
  );
}
