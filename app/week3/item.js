import React from 'react';

function Item({ name, quantity, category }) {
    return (
        <div className="bg-blue-950 p-4 my-2 rounded text-white max-w-md">
            <p className="font-bold text-lg">{name}</p>
            <p>Buy {quantity} in {category}</p>
        </div>
    );
}

export default Item;