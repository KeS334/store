import React, {useState} from 'react';
import {IProduct} from "../models";

interface ProductProps {
    product: IProduct
}


const Product = ({product}: ProductProps) => {
    const [details, setDetails] = useState(false);

    const btnClassName = details ? 'button_yellow' : 'button_blue'

    const btnClasses =  ['card__button button', btnClassName]

    return (
        <div className="products__card card grid">
            <img src={product.image} alt={product.title}/>
            <p>{product.title}</p>
            <span className="font-bold">{product.price}$</span>
            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >{details ? 'Hide Details' : 'Show Details'}</button>

            {details && <div className="card__details">
                <p>{product.description}</p>
                <br/>
                {product?.rating && <p className="card__rate"> Rate: <span >{product?.rating?.rate}</span></p>}
            </div>
            }
        </div>
    );
};

export default Product;