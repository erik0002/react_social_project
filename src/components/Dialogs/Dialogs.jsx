import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return <div className={s.dialogs}>
    <div className={s.dialogsItems}>
      <div className={s.dialog + ' ' + s.active}>
        Yeliazar
      </div>
      <div className={s.dialog}>
        Alex
      </div>
      <div className={s.dialog}>
        Julia
      </div>
      <div className={s.dialog}>
        Natasha
      </div>
      <div className={s.dialog}>
        Lena
      </div>
      <div className={s.dialog}>
        Tanya
      </div>
      <div className={s.dialog}>
        Marina
      </div>
      <div className={s.dialog}>
        Yuriy
      </div>
    </div>
    <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How are you</div>
        <div className={s.message}>What is your favorite film?</div>
        <div className={s.message}>What is your name?</div>
        <div className={s.message}>What is your surname?</div>
        <div className={s.message}>Wrere are you from?</div>
        <div className={s.message}>How are you did it?</div>
        <div className={s.message}>Are you succesfull person?</div>
        <div className={s.message}>Where are your parents?</div>
    </div>
  </div>;
};

export default Dialogs;
