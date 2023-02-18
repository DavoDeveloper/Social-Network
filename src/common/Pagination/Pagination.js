import React from "react";
import s from "./Pagination.module.css";

const Pagination = (props) => {
  let pagesCount = 10;
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={s.pagination}>
      {pages.map((p) => {
        return (
          <span
            className={props.currentPage === p && s.active}
            onClick={(e) => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Pagination;
