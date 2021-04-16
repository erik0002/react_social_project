import React from "react";
import s from "./FormaData.module.css";





const FormaData = (props) => {

 
  // let MessageFriend = React.createRef();

  // let sendMessage = () => {
  //   let mess = MessageFriend.current.value;
  //   alert(mess);
  // }


  return (
    <div>
       <div className={s.message}>{props.id} {props.name} {props.surname} {props.telephone} {props.usermessage}</div>
    </div>
  
  )
}



export default FormaData;
