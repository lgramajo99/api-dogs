import { useSelector, useDispatch } from 'react-redux';
import { turnPage, fetchDogs } from '../../redux/actions/dogs.action';

export const usePaginationLogic = () => {
  const dispatch = useDispatch();
  const { currentPage, totalPage } = useSelector(state => state.dogsReducer);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(turnPage(currentPage - 1));
      dispatch(fetchDogs());
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      dispatch(turnPage(currentPage + 1));
      dispatch(fetchDogs());
    }
  };

  const handleLastPage = () => {
    dispatch(turnPage(totalPage));
    dispatch(fetchDogs());
  };

  const handleFirstPage = () => {
    dispatch(turnPage(1));
    dispatch(fetchDogs());
  };

  return {
    currentPage,
    handlePrevPage,
    handleNextPage,
    handleLastPage,
    handleFirstPage,
  };
};
