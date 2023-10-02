import React from 'react';

function Item({ name, quantity, category }) {
    return (
        <li className="border-b py-2">
            <span className="font-bold">{name}</span> 
            <span className="ml-4">{quantity}x</span>
            <span className="ml-4 text-gray-500">{category}</span>
        </li>
    );
}

export default Item;