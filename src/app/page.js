"use client";
import Image from 'next/image'
import { useState } from 'react'
import List from './List';
import Input from './Input';

export default function Home() {
  // useState('');
  const [text, setText] = useState('') ; 
  const [index, setIndex] = useState('') ; 
  const [btn, setBtn] = useState('ADD') ; 
  const [list, setList] = useState(['hum first','hum second']);
  const [cancelbtn, setCancelbtn] = useState('Cancel')
  const [error, setError] = useState("")
  const onAdd = () => {
    if(!validate()){
    console.log("onAdd: ", text)
    console.log("pata nbhe", btn )
    if(btn == "Update"){
      Update();
      setBtn("ADD")
      setText("")
      return
    }
    list.push(text)

    setList([...list])
    setText("")
    // text.value = "";
  }
  }
  const onDelete = (index) =>{

    console.log("mai aa gaya ",index)
    // const newTodo = [...list]
    list.splice(index, 1);
    setList([...list]);
  }
  const onUpdate = (index,value) =>{

    console.log("mai aa gaya update per ",index)
    // const newTodo = [...list]
    // list.splice(index, 1);
    // setList([...list]);
    setIndex(index)
    setText(value)
    setBtn("Update")
  }
  const Update = () =>{
    if(!validate()){
    console.log("update", index , " value : ", text ) 
    // list.splice(index, 1)
    list.splice(index, 1, text)
    setList([...list])
    }
  }

  const Cancel = () => 
  {
    console.log("Cancel per aa gaya ")
    
    setText("")
    setBtn("ADD")
    setError("")
  }

  const validate = () => 
  {
    if(text == "")
    {
      setError("Please Enter Value")
      return true;
    }
    setError("")
    return false
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Todo List</h1>
      
      <Input text = {text} setText = {setText} onAdd={onAdd} btn={btn} setBtn={"ADD"} onCancel={Cancel} error={error}  />
      <List list = {list} onDelete = {onDelete} onUpdate={onUpdate} onAdd={onAdd}  />
    </main>
    
  )
  // {(<List />)}
}
