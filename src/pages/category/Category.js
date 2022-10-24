import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../shared/newsSummary/NewsSummary';

const Category = () => {

    const categoryNews = useLoaderData();

    return (
        <div>
            <h4>Total News: {categoryNews.length}</h4>
            {
                categoryNews.map(news => <NewsSummary key={news._id} news={news}></NewsSummary>)
            }
        </div>
    );
};

export default Category;