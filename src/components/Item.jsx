import React from "react";

function Item({ item, deleteItem, id, updateItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          updateItem(id);
        }}
      />
      <span style={{ textDecoration: item.packed ? "line-through" : null }}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => {
          deleteItem(id);
        }}
      >
        ❌
      </button>
    </li>
  );
}

export default Item;

/*function Item({ description, quantity, packed, id }) {
  return <li> {description} </li>;
}

function Item(props) {
    return <li> {props.description} </li>;
  }*/
