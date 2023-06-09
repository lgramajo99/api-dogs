import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDogsName } from '../../redux/actions/dogsName.action';

export const useSearchBarLogic = () => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();
    const { dogsName, loading, error } = useSelector(state => state.dogsNameReducer);

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(fetchDogsName(searchText));
    };

    return {
        searchText,
        setSearchText,
        handleSearch,
        dogsName,
        loading,
        error,
    };
};
