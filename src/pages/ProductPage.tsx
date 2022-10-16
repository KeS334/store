import React, {useContext, useState} from 'react';
import {useProducts} from "../hooks/products";
import {ModalContext} from "../context/ModalContext";
import {IProduct} from "../models";
import Notes from "../components/Notes";
import ErrorMessage from "../components/ErrorMessage";
import Product from "../components/Product";
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";
import Searchbar from "../components/Searchbar";


const ProductPage = () => {
    const {products, localProducts, loading, error, addProduct, editProduct} = useProducts();
    const {modal, edit, modalContent, open, close} = useContext(ModalContext);

    const [filteredList, setFilteredList] = useState<IProduct[]>([]);
    const [filterEmpty, setFilterEmpty] = useState(true);

    let newList;

    const createHandler = (product:IProduct) =>{
        close()
        addProduct(product)
    }
    const editHandler = (product:IProduct) =>{
        close()
        editProduct(product)
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

    const ListToShow = (filterEmpty?[...products, ...localProducts]:filteredList)
        .map((item) =>
            <Product product={item} key={item.id}/>)



    return (
        <div className="products">
            <Searchbar onInput={inputHandler}/>
            {loading && <Notes text={"Loading for server items..."}/>}
            {error && <ErrorMessage error={"Server item issue: " + error}/>}
            {!error && !ListToShow.length && <Notes text={"Nothing found. Try other keywords"}/>}
            <div className="products__list grid">
                {ListToShow}
            </div>

            {modal &&
            <Modal title={edit?"Edit Product":"Create new Product"} onClose={close} >
                <CreateProduct
                    onCreate={createHandler}
                    onEdit={editHandler}
                    modalContent={modalContent}
                    edit={edit}
                    />
            </Modal>}

            {!modal &&
            <button
                className="popup__opener fixed"
                onClick={() => open()}
            >+</button>}

        </div>
    );
};

export default ProductPage;