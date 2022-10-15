import React, {useContext, useState} from 'react';
import {IProduct} from "../models";
import {ModalContext} from "../context/ModalContext";
import Stars from "./Stars";

interface ProductProps {
    product: IProduct
}


const Product = ({product}: ProductProps) => {
    const [details, setDetails] = useState(false);
    const {open} = useContext(ModalContext);

    const btnClassName = details ? 'button_yellow' : 'button_blue'

    const btnClasses =  ['card__button button', btnClassName]

    return (
        <div className="products__card card grid">
            {product?.custom && <p
                className="card__marker absolute"
                onClick={() => open(product)}
            >Edit</p>}
            <img src={product.image} alt={product.title}/>
            <p className="card__title">{product.title}</p>
            {product?.rating && <Stars rating={product.rating.rate}/>}
            <span className="font-bold">{product.price}$</span>
            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >{details ? 'Hide Details' : 'Show Details'}</button>

            {details && <div className="card__details">
                <p>{product.description}</p>
                </div>
            }
        </div>
    );
};

export default Product;