import {useState} from "react"
import "./chatList.css"

const ChatList = () => {
  //useState hook to manage the state 'addMode', initialized to false
const [addMode,setAddMode]=useState(false)
  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
        //conditional rendering of the icon based on 'addMode' state 
        src={addMode? "./minus.png": "./plus.png"} 
        alt="" 
        className="add"
        //Toggle 'addMode' state when the icon is clicked
        onClick={()=>setAddMode((prev)=>!prev)}
        />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default ChatList
