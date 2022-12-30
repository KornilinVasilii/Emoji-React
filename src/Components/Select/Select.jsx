import s from './Select.module.css'

export function Select({ selectValue, setRecordsPerPage }) {
  return (
    <>
      <div className={s.page_select}>
        <p className={s.page}>Per page</p>
        <select
          className={s.select}
          onChange={(event) => setRecordsPerPage(+event.target.value)}
        >
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="48">48</option>
        </select>
      </div>
    </>
  );
}