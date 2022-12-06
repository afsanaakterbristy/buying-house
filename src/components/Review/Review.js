import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Review.css'
const Review = ({ product,handleRemoveItem }) => {
    const {id, name, price, quantity,img } = product;
    return (
        <div className='review-items'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
            <div className='review-details'>
                    <p>{name}</p>
                    <p><small>price:${ price}</small></p>
                    <p><small>Quantity:{ quantity}</small></p>
            </div>
            <div className="delete-container">
                    <button onClick={()=>handleRemoveItem(id)} className='delete-btn' >
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
            </div>
        </div>
    );
};

export default Review;