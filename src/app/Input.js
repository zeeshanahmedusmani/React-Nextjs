import React from "react";

export default function Input(props)     {
    // const  {text,setText,onAdd} = props;
    return (
        <div className='flex'>
      <input placeholder='Add Todo' id="myInput" onChange={(event) => props.setText(event.target.value)} value={props.text}  />
      <button  onClick={props.onAdd}>{props.btn}</button>
      <button onClick={props.onCancel} hidden={props.btn == "ADD" ? true : false}>Cancel</button>
      <br/>
      <p>
      {props.error}
      </p>
      
      {/* <ul>
      
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul> */}
      {/* <List list = {list} /> */}
      </div>
    )
  }