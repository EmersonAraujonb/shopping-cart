import React, { useEffect } from 'react';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import FecthCategoriesProducts from '../../api/fecthCategoriesProducts';
import FecthCategories from '../../api/fecthCategories';
import Select from 'react-select'
import './SelectBar.css';

const SelectBar = () => {
    const { setProducts, loading, setLoading, setResultSearch, categoriesProducts, setCategoriesProducts, searchValueCategory, setSearchValueCategory, isCartVisible } = useContext(AppContext)

    useEffect(() => {
        FecthCategoriesProducts().then((response) => {
            setCategoriesProducts(response);
        }).catch((err) => console.log(err))
        setLoading(true);
        FecthCategories(searchValueCategory.value).then((response) => {
            setProducts(response);
            setLoading(false);
            setResultSearch('')
        }).catch((err) => console.log(err))
    }, [searchValueCategory]);
    

    // const handleSearch = async (e) => {
    //     // e.preventDefault();
    //     setLoading(true)
    //     const products = await FecthCategories(searchValue.value);
    //     setProducts(products);
    //     // console.log(products)
    //     // console.log(searchValue)
    //     setLoading(false);
    //     setSearchValue([]);
    // }

    const options = categoriesProducts.map(function (cat) {
        return {
            value: cat.id,
            label: cat.name
        }
    })
    return (
        <div className='select'  style={{width: '100% ',display: 'flex', alignItems: 'end', justifyContent:'end'}}>
            <Select options={options} isDisabled={isCartVisible} key={options} isLoading={loading} placeholder='Selecione a categoria...' value={searchValueCategory} onChange={setSearchValueCategory} styles={{
    control: (baseStyles, state) => ({
      ...baseStyles,
      width: 245,
    }),
  }} />
        </div>
    );
}

export default SelectBar;