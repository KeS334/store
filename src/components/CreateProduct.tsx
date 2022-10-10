import React, {useEffect, useState} from 'react';
import {IProduct} from "../models";
import axios from "axios";
import {useCategories} from "../hooks/categories";


interface CreateProductProps {
    onCreate: (product: IProduct)=> void
    onEdit: (product: IProduct)=> void
    modalContent?: IProduct,
    edit: boolean
}

const CreateProduct = ({onCreate, onEdit, modalContent, edit}:CreateProductProps) => {


    const [value, setValue] = useState({
        id: 0,
        title: '',
        price: 0,
        description: '',
        image: 'https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg',
        category: ''
    })
    const {categories} = useCategories();


    const submitHandler = async (event: React.FormEvent) =>{
        event.preventDefault()

        if(edit){
            onEdit(value)
        }else{
            const response = await axios.post<IProduct>('https://fakestoreapi.com/products', value)
            onCreate(response.data);
        }
    }
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        setValue({...value, [event.target.name]: event.target.value});
    }
    const changeSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setValue({...value, [event.target.name]: event.target.value});
    }

    useEffect(() => {
        if(edit){
            setValue(modalContent||value)
        }
    }, [])

    return (
        <form onSubmit={submitHandler} className='form flex-type-2'>
            <input
                name="title"
                type="text"
                placeholder="Enter product title..."
                value={value.title}
                onChange={changeHandler}
                required
            />
            <input
                name="price"
                type="number"
                placeholder="Enter product price..."
                value={value.price}
                onChange={changeHandler}
                min="0"
                step="0.01"
                required
            />
            <textarea
                name="description"
                placeholder="Enter product description..."
                value={value.description}
                onChange={changeHandler}
                required
            />
            <textarea
                name="image"
                placeholder="Enter image URL"
                value={value.image}
                onChange={changeHandler}
                required
            />
            <select
                name="category"
                id="categories"
                value={value.category}
                onChange={changeSelectHandler}
                required
            >
                <option value="">Select Category</option>
                {categories.map(item => <option value={item} key={item}>{item}</option>)}
            </select>


            <button type="submit" className="button button_yellow">{edit?"Save":"Create"}</button>
        </form>
    );
};

export default CreateProduct;