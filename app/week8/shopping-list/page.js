"use client";
import { useState } from 'react';

import { navigate, useUserAuth } from '@inrupt/solid-react-components';

import ItemList from './item-list';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';
import NewItem from './new-item';

function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedIngredient, setSelectedIngredient] = useState("");

    const { user } = useUserAuth();

    if (!user) {
        navigate('/week8');
        return null;
    }

    const handleAddItem = (newItem) => {
        const itemWithId = {
            ...newItem,
            id: Date.now().toString()
        };
        setItems(prevItems => [...prevItems, itemWithId]);
    };

    const handleItemSelect = (itemName) => {
        let ingredient = itemName.split(",")[0];
        setSelectedIngredient(ingredient);
    };

    return (
        <main className="container mx-auto p-4 bg-blue-900 text-white">
            <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <MealIdeas ingredient={selectedIngredient} />
            </div>
        </main>
    );
}

export default Page;


