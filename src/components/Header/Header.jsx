import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';
import CartButton from '../CartButton/CartButton';
import {logo} from '../../../src/assets/mercado-libre.png';

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt="logo" />
            <div className="container">
                <SearchBar />
                <CartButton />
            </div>
        </header>
    );
}

export default Header;
