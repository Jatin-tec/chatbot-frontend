import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Chats from "./Chats";
import "./App.css";
function App() {
  const [inputText, setInputText]=useState("");
  const [botInputText, setBotInputText]=useState("");
  const [items, setItems]=useState([]);
  const [botItems, setBotItems]=useState([]);
  function handlechange(event){
    const Task= event.target.value;
    setInputText(Task);
  }
  function handleBotChange(event){
    const Task= event.target.value;
    setBotInputText(Task);
  }
  function handleKeyPress(event){
    if(event.key === 'Enter' ){
      setItems(prevItems => {
        return [inputText,...prevItems];
      });
      setInputText(""); }
  }function bothandleKeyPress(event){
    if(event.key === 'Enter' && document.getElementById("botinputField").value.length !== 0){
      setBotItems(prevItems => {
        return [inputText,...prevItems];
      });
      setBotInputText(""); }
  }

  function Add(){
    if(document.getElementById("inputField").value.length !== 0){
      setItems(prevItems => {
      return [inputText,...prevItems];
    });
    setInputText("");

  }
  }
  return (
    <div className="Main-Cointainer">
   <div className="Content">
    <div className="Main-Cointent" >

    {items.map(chat => (
            <Chats
            text={chat}
            color="white"
            wordColor="black"
            />
          ))}
    {botItems.map(chat =>(
      <Chats
      text={chat}
      color="green"
      wordColor="black"
      />
    ))}
     
    </div>
   
    
   </div>
   
   <div className="InputChatFeild">
    <input id='inputField' 
        value={inputText}
        type="text"
        onChange={handlechange}
        onKeyPress={handleKeyPress}
         />
         <input id='botinputField' 
        value={inputText}
        type="text"
        onChange={handlechange}
        onKeyPress={handleKeyPress}
         />
        <button id="AddButton" onClick={Add} >
          <span >Send</span>
        </button>
    </div>
     </div>
  );
}

export default App;
