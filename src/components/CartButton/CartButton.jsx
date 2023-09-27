import React, { useContext } from 'react';
import {BsCart} from 'react-icons/bs';
import './CartButton.css';
import AppContext from '../../context/AppContext';

const CartButton = () => {
    const {cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);
    const itemsLenght = cartItems.length;
    return (
        <button 
            type='button' 
            className='cart__button'
            onClick={() => setIsCartVisible(!isCartVisible)}
        >
            <BsCart/>
            {itemsLenght > 0 &&<span className='cart-status'>{itemsLenght}</span>}
        </button>
    );
}

export default CartButton;
