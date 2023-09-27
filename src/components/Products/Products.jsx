import React, { useContext, useEffect, useState } from 'react';
import './Products.css';
import FecthProducts from '../../api/fecthProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';
import FecthCategoriesProducts from '../../api/fecthCategoriesProducts';
import SelectBar from '../SearchBar/SelectBar';
import Pagination from '../Pagination/Pagination';

const Products = () => {
    const { products, setProducts, loading, setLoading, resultSearch, setCategoriesProducts, totalCount, limit, offset } = useContext(AppContext)
    const [itemsPerPage, setItemsPerPage] = useState(50);
    const [currentPage, setCurrentPage] = useState(0);

    const pages = Math.ceil(products.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = products.slice(startIndex, endIndex);

    useEffect(() => {
        setLoading(true);
        FecthProducts().then((response) => {
            setProducts(response);
            setLoading(false);
            setSearchValueCategory([])
        }).catch((err) => console.log(err));

        FecthCategoriesProducts().then((response) => {
            setCategoriesProducts(response);
        }).catch((err) => console.log(err))
        
    }, []);
    return (
        <section className='container'>
            <div className='result-search'>
               {resultSearch && <h2 className='container  result-text'> Resultados de pesquisa para: {resultSearch}</h2>}
               <SelectBar/>
            </div>
            <div className='products container'>
                {loading ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((index) => <Loading key={index} />) : currentItems.map((product) => <ProductCard key={product.id} data={product} />)}
            </div>
            <div>
                {totalCount === 0 && <p className='container itemsZero'>Nenhum resultado encontrado!</p>}
            </div>
            <div>
                {Array.from(Array(pages), (index) => {
                    return <button value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index}</button>
                })}
            </div>
           
        </section>
    );
}

export default Products;
