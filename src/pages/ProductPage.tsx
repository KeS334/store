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
    const {products, loading, error, addProduct} = useProducts();
    const {modal, open, close} = useContext(ModalContext);

    const createHandler = (product:IProduct) =>{
        close()
        addProduct(product)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {products.map(item => <Product product={item} key={item.id}/>)}

            {modal &&
            <Modal title="Create new Product" onClose={close}>
                <CreateProduct onCreate={createHandler}/>
            </Modal>}

            {!modal &&
            <button
                className="fixed bottom-5 right-5 py-3 px-4 bg-yellow-400 rounded-full text-white text-2xl"
                onClick={open}
            >+</button>}

        </div>
    );
};

export default ProductPage;