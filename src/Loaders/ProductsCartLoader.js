import { getStoredCart } from "../utilities/fakedb";

export const ProductsCartLoader = async () => {
    //get products
    const productsData = await fetch('http://localhost:5000/products');
    const {products} = await productsData.json();

    //get cart
    const savedCart = getStoredCart();
    const storedCart = [];
    for (const id in savedCart) {
        const addedProduct = products.find(pro => pro._id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            storedCart.push(addedProduct);
        }
    }
    return {products:products,storedCart:storedCart};
}