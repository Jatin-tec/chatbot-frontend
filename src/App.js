import React from "react";
import { useState } from "react";
import Chats from "./Chats";
import "./App.css";
function App() {
  const [inputText, setInputText]=useState("");
  function handlechange(event){
    const Task= event.target.value;
    setInputText(Task);
  }
  
  const [items, setItems]=useState([]);
  function Add(){
    setItems(prevItems => {
      return [inputText,...prevItems];
    });
    setInputText("");
  }
  return (
    <div className="Main-Cointainer">
   <div className="Content">
    <div className="Main-Cointent">

    {items.map(chat => (
            <Chats
            text={chat}
            />
          ))}

     
    </div>
   
    
   </div>
   
   <div className="InputChatFeild">
    <input id='inputField' 
        value={inputText}
        type="text"
        onChange={handlechange}
         />
        <button id="AddButton" onClick={Add}>
          <span >Send</span>
        </button>
    </div>
     </div>
  );
}

export default App;
