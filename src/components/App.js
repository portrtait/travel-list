import { useState } from "react";

// Import custom components
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// Default export
export default function App() {
  // All items are saved here
  const [items, setItems] = useState([]);

  // When we add new items through the Form component, we show it in the PackingList component
  function handleAddItems(item) {
    // Add this item to the items State (which is an Array)
    setItems((items) => [...items, item]);

    // temp
    // console.log("in handleItems", items, item);
  }

  // Deleting item
  function handleDeleteItem(id) {
    // Delete it via setItems
    setItems((items) => items.filter((item) => item.id !== id));

    // temp
    // console.log("id (handleDeleteItem) = ", id);
  }

  // check/uncheck the "packed" property
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );

    // temp
    // console.log("handleToggleItem - items - ", items);
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);

    // temp
    // console.log("handleClearList");
  }

  return (
    <div className="app">
      <Logo></Logo>
      <Form onAddItems={handleAddItems}></Form>
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      ></PackingList>
      <Stats items={items}></Stats>
    </div>
  );
}
