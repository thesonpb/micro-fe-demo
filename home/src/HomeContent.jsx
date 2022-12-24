import React, { useEffect, useState } from "react";
import { currency, getProducts } from "./products";
import { addToCart, useLoggedIn } from "cart/cart";
import { Link } from "react-router-dom";

export default function HomeContent() {
    const loggedIn = useLoggedIn();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts().then(setProducts);
    }, []);
    return (
        <div className="my-10 grid grid-cols-4 gap-5">
            {products.map((product) => (
                <div key={product.id}>
                    <Link to={`/products/${product.id}`}>
                        <img src={product.image} alt={product.name} />
                    </Link>
                    <div className="flex">
                        <div className="flex-grow font-bold">
                            <Link to={`/products/${product.id}`}>
                                <a>{product.name}</a>
                            </Link>
                        </div>
                        <div className="flex-end">
                            {currency.format(product.price)}
                        </div>
                    </div>
                    <div className="text-sm mt-4">{product.description}</div>
                    {loggedIn && (
                        <div className="text-right mt-2">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
                                onClick={() => addToCart(product.id)}
                                id={`addToCartBtn_${product.id}`}
                            >
                                Add to Cart
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
