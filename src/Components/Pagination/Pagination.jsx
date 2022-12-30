import s from "./Pagination.module.css"
export function Pagination({ nPages, currentPage, setCurrentPage }) {
  
  const pageNumbers = [];
  for (let i = 1; i <= nPages; i++) {
    pageNumbers.push(i);

  }

  let startPage = 0;
  let endPage = nPages;

  if (currentPage === 1 || currentPage === 2) {
    startPage = 0;
    endPage = 5;
  } else if (
    currentPage === nPages ||
    currentPage === nPages - 1 ||
    currentPage === nPages - 2
  ) {
    startPage = nPages - 5;
    endPage = nPages;
  } else if (currentPage > 2) {
    startPage = currentPage - 3;
    endPage = currentPage + 2;
  }

  return (
    <div>
      <ul className={s.ul}>
        <button
          className={currentPage === 1 ? s.disabled : s.button}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
        >
          First
        </button>
        {pageNumbers.slice(startPage, endPage).map((pgNumber) => (
          <li className={s.li} key={pgNumber}>
            <button
              className={currentPage === pgNumber ? s.active : s.button}
              onClick={() => setCurrentPage(pgNumber)}
            >
              {pgNumber}
            </button>
          </li>
        ))}
        <button
          className={currentPage === nPages ? s.disabled : s.button}
          disabled={currentPage === nPages}
          onClick={() => setCurrentPage(nPages)}
        >
          Last
        </button>
      </ul>
    </div>
  );
}