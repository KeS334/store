import {useEffect, useState} from "react";
import {IProduct} from "../models";
import axios, {AxiosError} from "axios";

export function useProducts(){
    const [products, setProducts] = useState<IProduct[]>([])
    const [localProducts, setLocalProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    let newLocalProducts: IProduct[];


    function updateStateAndStorage(item: IProduct[]){
        setLocalProducts(item)
        localStorage.setItem('localProducts', JSON.stringify(item));
    }

    function addProduct(product:IProduct){

        let newId = localProducts[localProducts.length - 1] ? localProducts[localProducts.length - 1].id + 1 :product.id
        newLocalProducts = [...localProducts, {...product, id: newId, custom: true}]

        updateStateAndStorage(newLocalProducts)
    }
    function editProduct(product:IProduct){
        newLocalProducts = [...localProducts];
        newLocalProducts.find((item, index) => {
            if(item.id === product.id){
                newLocalProducts[index] = product;
            }
        })
        updateStateAndStorage(newLocalProducts)
    }

    async function fetchProducts(){
        try {
            setError('')
            setLoading(true)

            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
            setProducts(response.data)
            setLoading(false)
        }catch (e: unknown){
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }
    function fetchLocalProducts(){
        setLocalProducts(JSON.parse(localStorage.getItem('localProducts')||'[]'));
    }

    useEffect(() =>{
        fetchProducts()
        fetchLocalProducts()
    }, [])

    return {products, localProducts, loading, error, addProduct, editProduct}
}