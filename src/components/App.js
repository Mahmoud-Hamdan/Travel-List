import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./packingList";
import Stats from "./Stats";

function App() {
  const [itemsArray, setItemsArray] = useState([]);

  function addItems(item) {
    setItemsArray((items) => {
      return [...items, item];
    });
    /*
      return [...itemsArray ,
      {
        description: items.description,
        quantity: items.quantity,
        packed: items.packed,
      }*/
  }

  function handelDeleteItem(id) {
    setItemsArray((items) => {
      return items.filter((item) => {
        return item.id !== id;
      });
    });
  }

  function handelToggleItem(id) {
    setItemsArray((items) => {
      return items.map((item) => {
        return item.id === id ? { ...item, packed: !item.packed } : item;
      });
    });
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItemsArray([]);
  }

  return (
    <>
      <Logo />
      <Form onAdd={addItems} />
      <PackingList
        addItemsInPackingList={itemsArray}
        onDelete={handelDeleteItem}
        updateItems={handelToggleItem}
        onClearList={handleClearList}
      />
      <Stats itemsArray={itemsArray} />
    </>
  );
}

export default App;
