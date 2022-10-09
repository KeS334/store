import {useEffect, useState} from "react";
import {IProduct} from "../models";
import axios, {AxiosError} from "axios";

export function useProducts(){
    const [products, setProducts] = useState<IProduct[]>([])
    const [localProducts, setLocalProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    function addProduct(product:IProduct){

        let newLocalProducts = [...localProducts, {...product, custom: true}]
        setLocalProducts(newLocalProducts)
        localStorage.setItem('localProducts', JSON.stringify(newLocalProducts));
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

    return {products, localProducts, loading, error, addProduct}
}