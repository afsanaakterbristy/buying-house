import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons' 
 
const Product = (props) => {
   // const {handleAddToCart} = props;
    const { name, img, seller, price, rating } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='name'>{name}</p>
            <p>price:${price}</p>
            <p><small>Seller:{seller}</small></p>
            <p><small>Rating:{rating}</small></p>
            </div>
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;