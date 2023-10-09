"use client";

import { useState } from "react";

function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Item: ${name}, Quantity: ${quantity}, Category: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <div className="bg-dark-blue-600 p-8 mx-auto w-1/2 mt-10 rounded-md">
            <div className="bg-blue-400 p-6 rounded-md"> 
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-black font-bold mb-2">Item</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-black" 
                            placeholder="Enter item name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black font-bold mb-2">Quantity</label>
                        <input 
                            type="number" 
                            value={quantity} 
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            min="1" max="99"
                            className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-black" 
                            placeholder="1"
                        />
                        <select 
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)}
                            className="shadow appearance-none border rounded w-1/2 ml-4 py-2 px-3 text-black"
                        >
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozen-foods">Frozen Foods</option>
                            <option value="canned-goods">Canned Goods</option>
                            <option value="dry-goods">Dry Goods</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button type="submit"
                    className="flex-shrink-0 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
                </form>
            </div>
        </div>
    );
}

export default NewItem;