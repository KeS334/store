import React, {useState} from 'react';
import {IProduct} from "../models";

interface ProductProps {
    product: IProduct
}


const Product = ({product}: ProductProps) => {
    const [details, setDetails] = useState(false);

    const btnClassName = details ? 'bg-yellow-400' : 'bg-blue-400'

    const btnClasses =  ['my-2 py-2 px-4 border', btnClassName]

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center">
            <img src={product.image} className="w-1/6" alt={product.title}/>
            <p>{product.title}</p>
            <span className="font-bold">{product.price}</span>
            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >{details ? 'Hide Details' : 'Show Details'}</button>

            {details && <div>
                <p>{product.description}</p>
                <p> Rate: <span style={{fontWeight: 'bold'}}>{product?.rating?.rate}</span></p>
            </div>
            }
        </div>
    );
};

export default Product;