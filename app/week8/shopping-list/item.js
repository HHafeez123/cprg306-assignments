
function Item({ name, quantity, category, onSelect }) {
    return (
        <div className="bg-blue-950 p-4 my-2 rounded text-white max-w-md" onClick={() => onSelect(name)}>
            <p className="font-bold text-lg">{name}</p>
            <p>Buy {quantity} in {category}</p>
        </div>
    );
}

export default Item;