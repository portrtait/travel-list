import { useState } from "react";

export default function Form({ onAddItems }) {
  // Controlled Elements
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  // On submit - create new item and reset the inputs
  function handleSubmit(e) {
    e.preventDefault();

    // Prevent empty submit
    if (!description) return;

    // Create new item from the data from States
    const newItem = { description, quantity, packed: false, id: Date.now() };

    // temp
    // console.log("newItem in handleSubmit", newItem);

    onAddItems(newItem);

    // Reset values
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* created empty array of 20 elements */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>

      <button>Add</button>
    </form>
  );
}
