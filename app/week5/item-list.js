"use client"

import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

function ItemList() {
    const [sortBy, setSortBy] = useState('name');

    let items = [...itemsData];
    let groupedItems = {};

    if (sortBy === 'name') {
        items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category') {
        items.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortBy === 'grouped') {
        groupedItems = items.reduce((acc, curr) => {
            if (!acc[curr.category]) {
                acc[curr.category] = [];
            }
            acc[curr.category].push(curr);
            return acc;
        }, {});
        
        for (let category in groupedItems) {
            groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
        }
    }

    return (
        <div>
            <div className="mb-4">
                <span>Sort by:</span>
                <button 
                    className={`ml-2 px-4 py-1 ${sortBy === 'name' ? 'bg-orange-500' : 'bg-orange-300'} rounded`} 
                    onClick={() => setSortBy('name')}
                >
                    Name
                </button>
                <button 
                    className={`ml-2 px-4 py-1 ${sortBy === 'category' ? 'bg-orange-500' : 'bg-orange-300'} rounded`} 
                    onClick={() => setSortBy('category')}
                >
                    Category
                </button>
                <button 
                    className={`ml-2 px-4 py-1 ${sortBy === 'grouped' ? 'bg-orange-500' : 'bg-orange-300'} rounded`} 
                    onClick={() => setSortBy('grouped')}
                >
                    Grouped Category
                </button>
            </div>
            
            <ul>
                {
                    sortBy === 'grouped' ? 
                    Object.keys(groupedItems).sort().map(category => (
                        <div key={category}>
                            <h2 className="font-bold text-xl mt-4">{category}</h2>
                            {groupedItems[category].map(item => (
                                <Item key={item.id} {...item} />
                            ))}
                        </div>
                    )) :
                    items.map((item) => (
                        <Item key={item.id} {...item} />
                    ))
                }
            </ul>
        </div>
    );
}

export default ItemList;


