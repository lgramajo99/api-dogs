import style from './Pagination.module.css';
import { usePaginationLogic } from './paginationLogic';

function Pagination() {
    const {
        currentPage,
        handlePrevPage,
        handleNextPage,
        handleLastPage,
        handleFirstPage,
    } = usePaginationLogic();

    return (
        <ul className={style.paginado}>
            <li>
                <button onClick={handleFirstPage}>&laquo;</button>
            </li>
            <li>
                <button onClick={handlePrevPage}>&lt;</button>
            </li>
            <h1>{currentPage}</h1>
            <li>
                <button onClick={handleNextPage}>&gt;</button>
            </li>
            <li>
                <button onClick={handleLastPage}>&raquo;</button>
            </li>
        </ul>
    );
}

export default Pagination;
