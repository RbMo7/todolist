import { useState } from "react";

interface Props{
    items: string[];
    heading: string;
    onSelectedItem: (item: string)=>void;
}



function ListGroup({items, heading, onSelectedItem} :Props) {
   
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 1 && <p>No elements found</p>}
      <ul className="list-group">
        {items.map((list, num) => (
          <li
            className={
              selectedIndex === num
                ? "list-group-item active"
                : "list-group-item"
            }
            key={list}
            onClick={() => {
              setSelectedIndex(num);
              onSelectedItem(list);
            }}
          >
            {list}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
