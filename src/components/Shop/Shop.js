import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb'
import './Shop.css'
import { Link} from 'react-router-dom';

const Shop = () => {
   // const {products,count} = useLoaderData();
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const[cart,setCart]=useState([])
   // const perPage = 10;
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
   
    const pages = Math.ceil(count / size);

    useEffect(() => {
        const url = `http://localhost:5000/products?page=${page}&size=${size}`;
        console.log(page,size)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setProducts(data.products);
        })

    },[page,size])

   
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
        
    }

     useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
      if(storedCart){
             const ids = Object.keys(storedCart); 
        console.log(ids);
        fetch('http://localhost:5000/productsByIds', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ids)
        })
        .then(res => res.json())
        .then(data => {
            for (const id in storedCart) {
            const addedProduct = data.find(product => product._id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);

        })
      }
        
    }, [products])
    const handleAddToCart = (product) => {
        let newCart=[]
        const exists = cart.find(pro => pro._id === product._id);
        if (!exists) {
            product.quantity = 1;
            newCart=[...cart,product]
        }
        else {
            const rest = cart.filter(pro => pro._id !== product._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists
            ]
        }
         setCart(newCart); 
         addToDb(product._id)
    } 
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
               }

            </div> 
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}>
                    
                    <Link to={"/orders"}>
                        <button>Review Order</button>
                    </Link> 
                </Cart>
              
            </div> 
            <div className="pagination">
                <p>Currently selected page:{page }</p>
                {
                    [...Array(pages).keys()].map(number => <button key={number}
                        className={page === number && 'selected'}
                    onClick={()=>setPage(number)}>
                        {number+1}
                    </button>)
                }
                <select onChange={event=>setSize(event.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Shop;