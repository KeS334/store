import React, {useContext, useState} from 'react';
import {useProducts} from "../hooks/products";
import {ModalContext} from "../context/ModalContext";
import {IProduct} from "../models";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import Product from "../components/Product";
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";
import Searchbar from "../components/Searchbar";

const ProductPage = () => {
    const {products, localProducts, loading, error, addProduct} = useProducts();
    const {modal, open, close} = useContext(ModalContext);

    const [filteredList, setFilteredList] = useState<IProduct[]>([]);
    const [filterEmpty, setFilterEmpty] = useState(true);

    let newList;

    const createHandler = (product:IProduct) =>{
        close()
        addProduct(product)
    }
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        if(event.target.value.trim().length > 0) {
            setFilterEmpty(false)
            newList = [...products, ...localProducts].filter(item => {

                let titleLW =  item.title.toLowerCase();
                let targetLW =  event.target.value.toLowerCase();

                if (titleLW.includes(targetLW)) return item
            })
            setFilteredList(newList);
        } else {
            setFilterEmpty(true);
        }

    }

    return (
        <div className="">
            <Searchbar onInput={inputHandler}/>
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            <div className="products grid">
                {
                    (filterEmpty?[...products, ...localProducts]:filteredList)
                    .map((item,index) =>
                        <Product product={item} key={index + "-" + item.id}/>)
                }
            </div>

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