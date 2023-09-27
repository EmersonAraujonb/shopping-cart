import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';
import CartButton from '../CartButton/CartButton';

const Header = () => {
    return (
        <header className='header'>
            {/* <img src="../../src/assets/logo.png" alt="logo" /> */}
            <img src="../../src/assets/mercado-libre.png" alt="logo" />
            <div className="container">
                <SearchBar />
                <CartButton />
            </div>
        </header>
    );
}

export default Header;
