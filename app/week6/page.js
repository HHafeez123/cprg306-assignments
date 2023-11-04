"use client"

import { useState } from 'react';
import ItemList from './item-list';
import itemsData from './items.json';
import NewItem from './new-item';

function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        const itemWithId = {
            ...newItem,
            id: Date.now().toString()
        };
        setItems(prevItems => [...prevItems, itemWithId]);
    };

    return (
        <main className="container mx-auto p-4 bg-blue-900 text-white">
            <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}

export default Page;

