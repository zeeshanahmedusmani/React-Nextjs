import React from "react";

export default function List(props) {
    return (
        <ul>
        {/* <li>Todo 1</li> */}
        {props.list.map((value, index) => (
          <li key={index}>{value}<button onClick={() => props.onDelete(index)}>Delete</button>
          <button onClick={() => props.onUpdate(index,value)}>Update</button> </li>
        ))}
      </ul>
    )
  }