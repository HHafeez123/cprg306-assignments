

function Item({ name, quantity, category, onSelect }) {
    return (
        <div 
            className="bg-blue-950 hover:bg-orange-500 p-4 my-2 rounded text-white max-w-md transition duration-300 ease-in-out" 
            onClick={() => onSelect(name)}
        >
            <p className="font-bold text-lg">{name}</p>
            <p>Buy {quantity} in {category}</p>
        </div>
    );
}

export default Item;