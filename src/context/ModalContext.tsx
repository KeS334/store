import React, {createContext, useState} from "react";
import {IProduct} from "../models";
interface IModalContext {
    modal: boolean
    edit: boolean
    modalContent?: IProduct
    open: (product?: IProduct) => void
    close: () => void
}

export const ModalContext = createContext<IModalContext>({
    modal: false,
    edit: false,
    open: () => {},
    close: () => {},
})

export const ModalState = ({children} : {children: React.ReactNode}) => {

    const [modal, setModal] = useState(false);
    const [edit, setEdit] = useState(false);
    const [modalContent, setModalContent] = useState({
        id: 0,
        title: '',
        price: 0,
        description: '',
        image: 'https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg',
        category: ''
    });


    const open = (product?: IProduct) => {
        setModal(true)
        if(product) {
            setModalContent(product)
            setEdit(true)
        }
    }

    const close = () => {
        setModal(false)
        setEdit(false)
    }

    return(
        <ModalContext.Provider value={{modal, edit, modalContent, open, close}}>
            {children}
        </ModalContext.Provider>
    )
}