import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './SearchBar.css';
import FecthProducts from '../../api/fecthProducts';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import FecthTotalProducts from '../../api/fecthTotalProducts';

const SearchBar = () => {
    const { setProducts, setLoading, setResultSearch, setSearchValueCategory, setTotalCount, setOffset, setLimit } = useContext(AppContext);
    const [searchValue, setSearchValue] = useState('');
    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResultSearch('');
        const products = await FecthProducts(searchValue);
        setProducts(products);
        const totalCount = await FecthTotalProducts(searchValue);
        setTotalCount(totalCount.total);
        setOffset(totalCount.offset)
        setLimit(totalCount.limit)
        setLoading(false);
        setResultSearch(searchValue);
        setSearchValue('');
    }
    return (
        <form className='search-bar' onSubmit={handleSearch}>
            <input
                type="search"
                value={searchValue}
                placeholder='Buscar Produtos...'
                className='search__input'
                onChange={({ target }) => setSearchValue(target.value)}
                required
            />
            <button type='submit' className='search__button'><BsSearch /></button>
        </form>
    );
}

export default SearchBar;
