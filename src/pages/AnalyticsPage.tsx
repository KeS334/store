import React, {useState} from 'react';

import PieChart from "../components/PieChart";
import {useAnalyticData} from "../hooks/analyticData";
import {useProducts} from "../hooks/products";




const AnalyticsPage = () => {
    const {products, localProducts} = useProducts();
    const {categoryCounter} = useAnalyticData();

    const categorySet = {
        labelSet: categoryCounter.map(item => item.value),
        dataSet: categoryCounter.map(item => item.count)
    }
    const scSet = {
        labelSet: ['Server items', 'Custom items'],
        dataSet: [products.length, localProducts.length]
    }
    return (
        <div className="analytics">
            <div className="analytics__container grid">
                <div className="analytics__card card">
                    <p className="analytics__title">Server-Custom items ratio</p>
                    <PieChart set={scSet}/>

                </div>
                <div className="analytics__card card">
                    <p className="analytics__title">Statistics by categories</p>
                    <PieChart set={categorySet}/>
                </div>
            </div>

        </div>
    );
};

export default AnalyticsPage;
