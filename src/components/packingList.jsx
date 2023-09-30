import React, { useState } from "react";
import Item from "./Item";

function PackingList(props) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = props.addItemsInPackingList;

  if (sortBy === "description")
    sortedItems = props.addItemsInPackingList
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = props.addItemsInPackingList
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {props.addItemsInPackingList !== null &&
          sortedItems.map((item, index) => {
            //return (<Item key={index} description={item.description} quantity={item.quantity} packed={item.packed} id={item.id} /> );
            return (
              <Item
                key={item.id}
                id={item.id}
                item={item}
                deleteItem={props.onDelete}
                updateItem={props.updateItems}
              />
            );
          })}
      </ul>
      {props.addItemsInPackingList.length !== 0 && (
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input"> sort by input order </option>
            <option value="description"> sort by description </option>
            <option value="packed"> sort by packed status </option>
          </select>
          <button onClick={props.onClearList}>Clear list</button>
        </div>
      )}
    </div>
  );
}

export default PackingList;
