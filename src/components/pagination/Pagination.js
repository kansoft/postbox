import React from "react";
import "./Pagination.css";

const Pagination = props => {
    const {rowsPerPage, page, onChangePage, count} = props;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(count / rowsPerPage); i++) {
        pageNumbers.push(i);
    }
    return pageNumbers.map(number => {
        return (
            <li
                key={number}
                id={number}
                onClick={onChangePage}
                className={page === number ? "Pagination-page-active" : "Pagination-page"}
            >
                {number}
            </li>
        );
    });

};

export default Pagination;