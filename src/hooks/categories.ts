import {useEffect, useState} from 'react';
import axios, {AxiosError} from "axios";

export function useCategories(){

    const [categories, setCategories] = useState<string[]>([]);

    async function fetchCategories() {
        try {
            const response = await axios.get<string[]>('https://fakestoreapi.com/products/categories')
            setCategories(response.data)
        } catch (e: unknown) {
            const error = e as AxiosError
            console.log("Categories error: ", error)
        }

    }

    useEffect(() =>{
        fetchCategories()
    }, [])

    return {categories}
}