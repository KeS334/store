import React, {useContext} from 'react';
import {useProducts} from "../hooks/products";
import {ModalContext} from "../context/ModalContext";
import {IProduct} from "../models";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import Product from "../components/Product";
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";

const ProductPage = () => {
    const {products, localProducts, loading, error, addProduct} = useProducts();
    const {modal, open, close} = useContext(ModalContext);


    const createHandler = (product:IProduct) =>{
        close()
        addProduct(product)
    }

    return (
        <div className="products grid">
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {products.map(item => <Product product={item} key={item.id}/>)}
            {localProducts.map((item,index) => <Product product={item} key={"custom-item-" + index}/>)}

            {modal &&
            <Modal title="Create new Product" onClose={close}>
                <CreateProduct onCreate={createHandler}/>
            </Modal>}

            {!modal &&
            <button
                className="popup__opener fixed"
                onClick={open}
            >+</button>}

        </div>
    );
};

export default ProductPage;