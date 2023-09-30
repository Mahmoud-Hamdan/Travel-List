import React from "react";

function Stats(props) {
  if (!props.itemsArray.length)
    return (
      <p className="stats">
        <em> start adding some items tou your packing list 🚀 </em>
      </p>
    );

  const numItems = props.itemsArray.length;
  const numPacked = props.itemsArray.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {percentage !== 100 ? (
        <em>
          💼 you have {numItems !== 0 ? numItems : "No"} items in your list ,
          and you already packed {numPacked} ({percentage}%)
        </em>
      ) : (
        <em>You got evrything ! Ready to travel ✈️</em>
      )}
    </footer>
  );
}

export default Stats;
