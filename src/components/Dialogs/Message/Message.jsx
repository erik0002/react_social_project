import React from "react";
import s from "./../Dialogs.module.css";





const Message = (props) => {

 
  let MessageFriend = React.createRef();

  let sendMessage = () => {
    let mess = MessageFriend.current.value;
    alert(mess);
  }


  return (
    <div>
       <div className={s.message}>{props.str}</div>
    </div>
  
  )
}



export default Message;
