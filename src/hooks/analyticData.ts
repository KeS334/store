import React, {useEffect, useState} from 'react';
import {useProducts} from "./products"
import {IItemCount, IProduct} from "../models";

export const useAnalyticData = () =>{
    const {products, localProducts} = useProducts();
    const [categoryCounter, setCategoryCounter] = useState<IItemCount[]>([])

    function calcCatCounter() {
        setCategoryCounter(uniqueArray([...products, ...localProducts]))
    }

    function  uniqueArray(arr:IProduct[]) {
        let tempUniqueArr:IItemCount[] = []

        arr.forEach(item => {
            let findIndex: number = tempUniqueArr.findIndex(elem => elem.value === item.category)
            if(findIndex === -1){
                tempUniqueArr.push({value: item.category, count: 1});
            }else{
                tempUniqueArr[findIndex].count++
            }
        })

        return tempUniqueArr
    }

    useEffect(() =>{
        calcCatCounter()
    }, [products])

    return {categoryCounter}
}
