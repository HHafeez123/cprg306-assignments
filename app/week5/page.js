import React from 'react';
import ItemList from './item-list';

function Page() {
    return (
        <main className="container mx-auto p-4 bg-blue-900 text-white">
            <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
            <ItemList />
        </main>
    );
}

export default Page;