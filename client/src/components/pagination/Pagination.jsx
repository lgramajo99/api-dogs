import style from './Pagination.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { turnPage, fetchDogs } from '../../redux/actions/dogs.action';

function Pagination() {
    const dispatch = useDispatch();
    const { currentPage, totalPage } = useSelector(state => state.dogsReducer);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            dispatch(turnPage(currentPage - 1))
            dispatch(fetchDogs());
        }
    }
    const handleNextPage = () => {
        if (currentPage < totalPage) {
            dispatch(turnPage(currentPage + 1));
            dispatch(fetchDogs());
        }

    }
    const handleLastPage = () => {
        dispatch(turnPage(totalPage));
        dispatch(fetchDogs());
    }

    const handleFirstPage = () => {
        dispatch(turnPage(1));
        dispatch(fetchDogs);
    }



    return (
        <ul className={style.paginado}>
            <li><button onClick={handleFirstPage}>&laquo;</button></li>
            <li><button onClick={handlePrevPage}>&lt;</button></li>
            <h1>{currentPage}</h1>
            <li><button onClick={handleNextPage}>&gt;</button></li>
            <li><button onClick={handleLastPage}>&raquo;</button></li>

        </ul>
    )
}

export default Pagination;