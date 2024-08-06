import React, { useState } from "react";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  // CRUD operations
  const addItem = (name) => {
    const newItem = { id: items.length + 1, name };
    setItems([...items, newItem]);
  };

  const displayItems = items.map((item) => (
    <div key={item.id}>
      <span>{item.name}</span>
      <button onClick={() => updateItem(item.id)}>Edit</button>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </div>
  ));

  const updateItem = (id) => {
    const updatedName = prompt("Enter the new name:");
    if (updatedName) {
      const updatedItems = items.map((item) =>
        item.id === id ? { ...item, name: updatedName } : item
      );
      setItems(updatedItems);
    }
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(e.target.itemName.value);
  };

  return (
    <div className="App">
  <form onSubmit={handleSubmit} className="form">
    <input type="text" name="itemName" placeholder="Enter item name" className="input" />
    <button type="submit" className="add-button">Add Item</button>
  </form>
  <div className="table-container">
    <table className="item-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
              <button onClick={() => updateItem(item.id)} className="edit-button">Edit</button>
              <button onClick={() => deleteItem(item.id)} className="delete-button">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
}
