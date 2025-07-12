import './index.css'
import {useState} from "react";

const initialItems = [
    {id: 1, description: "Passports", quantity: 2, packed: false},
    {id: 2, description: "Socks", quantity: 12, packed: false},
    {id: 3, description: "Toothbrush", quantity: 2, packed: true},
    {id: 4, description: "T-Shirts", quantity: 5, packed: false},
    {id: 5, description: "Phone Charger", quantity: 1, packed: true},
    {id: 6, description: "Shoes", quantity: 2, packed: false},
    {id: 7, description: "Sunscreen", quantity: 1, packed: true},
    {id: 8, description: "Books", quantity: 3, packed: false},
    {id: 9, description: "Headphones", quantity: 1, packed: true},
    {id: 10, description: "Jackets", quantity: 2, packed: false}
]

function App() {

    const [items, setItems] = useState(initialItems);


    return (
        <div className="App">
            <Logo/>
            <Form/>
            <PackagingList items={items}/>
            <Stats/>
        </div>
    )
}


function Logo() {
    return (
        <div>
            <h1>🏝️Far Away 🧳</h1>
        </div>
    )
}

const handleFormSubmit = (id) => {
    // const updatedItems = initialItems.filter((item) => {item.id!==id});
};

function Form() {
    const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

    return (
        <form id='form-data' onSubmit={handleFormSubmit}>
            <div className="add-form">
                <h3>What do you need for your 😍 trip?</h3>
                <select>
                    {numbers.map((number, i) => (
                        <option key={i} value={number}>{number}</option>
                    ))}
                </select>
                <input type='text' placeholder='item'/>
                <input type='submit' value='Submit' />
            </div>
        </form>

    )
}

const handleItemDelete = (itemId) => {
};

function PackagingList() {
    return (
        <ul className="list">
            {initialItems.map(item => (
                <li key={item.id}>{item.quantity} {item.description}
                    <button onClick={()=>handleItemDelete(item.id)}>❌</button>
                </li>
            ))}
        </ul>
    )
}

function Stats() {
    return (
        <footer className="stats">
            <em>🧳You have X items on your list, and you already have packed X (X%)</em>
        </footer>
    )
}
export default App;