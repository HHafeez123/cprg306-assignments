"use client";
import { navigate, useUserAuth } from '@inrupt/solid-react-components';
import { useEffect, useState } from 'react';
import { addItem, getItems } from './_services/shopping-list-service';

import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import NewItem from './new-item';

function Page() {
    const [items, setItems] = useState([]);
    const [selectedIngredient, setSelectedIngredient] = useState("");
    const { user } = useUserAuth();

    useEffect(() => {
        if (!user) {
            navigate('/week8');
            return null;
        }

        const loadItems = async () => {
            const userItems = await getItems(user.uid);
            setItems(userItems);
        };

        loadItems();
    }, [user]);

    const handleAddItem = async (newItem) => {
        const itemId = await addItem(user.uid, newItem);
        const itemWithId = {
            ...newItem,
            id: itemId
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