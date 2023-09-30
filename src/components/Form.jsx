import React, { useState } from "react";

function Form(props) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handelChange(event) {
    const { value } = event.target;
    setItem(value);
  }
  function handelSeletChange(e) {
    const { value } = e.target;
    setQuantity(Number(value));
  }

  function handelSubmit(event) {
    if (!item) return;

    const obj = {
      description: item,
      quantity: quantity,
      packed: false,
      id: Date.now(),
    };

    props.onAdd(obj);
    setItem("");
    setQuantity(1);
    event.preventDefault();
  }

  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <h3> what do you need for your 😍 trip ? </h3>
      <select onChange={handelSeletChange} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => {
          return i + 1;
        }).map((num) => {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="Item.."
        value={item}
        onChange={handelChange}
        name="item"
      />
      <button>ADD</button>
    </form>
  );
}

export default Form;
