import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

const Provider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [categoriesProducts, setCategoriesProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [resultSearch, setResultSearch] = useState('');
    const [searchValueCategory, setSearchValueCategory] = useState([]);
    const [totalCount, setTotalCount] = useState();
    const [offset, setOffset] = useState();
    const [limit, setLimit] = useState();
    const [isCartVisible, setIsCartVisible] = useState(false);

    
    const value = {
        loading, 
        setLoading,
        products,
        setProducts,
        cartItems,
        setCartItems,
        resultSearch, 
        setResultSearch,
        categoriesProducts, 
        setCategoriesProducts,
        searchValueCategory,
        setSearchValueCategory,
        totalCount, 
        setTotalCount,
        offset,
        setOffset,
        limit, 
        setLimit,
        isCartVisible, 
        setIsCartVisible
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;

Provider.propTypes = {
    children: propTypes.any,
}.isRequired;
