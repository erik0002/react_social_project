import React from 'react';
import s from './Forma.module.css';
import FormData from './formaItem/FormaData';

const Forma = (props) => {
   
     
     let FormaElement = props.FormData.map(m => <FormData name={m.name} id={m.id} surname={m.surname} telephone={m.telephone} usermessage={m.Usermessage}/>)
    
    let onSubmitFormClick = () => {
        props.submitForm();
    }

  
    let onNewFormChange = (e) => {
        let body = e.target.value;
        props.updateNewFormBody(body);
    }

    return (
        <div>
        <form>
            <label>Name:
                <input type="text" onChange={onNewFormChange}/>
            </label>
            <br/>
            <label>Surname:
                <input type="text"/>
            </label>
            <br/>
            <label>Your telephone:
                <input type="number"/>
            </label>
            <br/>
            <textarea name="" id="" cols="30" rows="10" onChange={onNewFormChange}></textarea>
            <input type="submit" onClick={onSubmitFormClick} value="Отправить"/>
        </form>
        
         <div>
            {FormaElement}
        </div> 
        </div>
    )
}

export default Forma;