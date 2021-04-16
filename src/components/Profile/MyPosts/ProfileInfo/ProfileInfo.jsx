import React from "react";
import MainPageProfile from "../../../MainPageProfile/MainPageProfile";
import ImgLogo from "../ImgLogo/ImgLogo";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <MainPageProfile name="https://realnoevremya.ru/uploads/articles/e4/9d/a76285004df6e9d5.jpg"/>
      <div id="ImgLogo">
        <ImgLogo name="https://icdn.lenta.ru/images/2021/03/08/21/20210308213809456/detail_ea02786644aeeed8fef3dc6ad0da4702.jpg"/>
        <ImgLogo name="https://peopletalk.ru/wp-content/uploads/2019/03/snimok-ekrana-2019-03-01-v-13.47.15-640x435.png"/>
        <ImgLogo name="https://cdn21.img.ria.ru/images/07e4/0b/02/1582640428_0:0:1200:676_1920x0_80_0_0_10e60e017a529393b1f3e78a55f26a0d.jpg"/>
      </div>
      <div className={s.descriptionBlock}>
      Мани́жа, полное имя Мани́жа Дале́ровна Санги́н (урожд. Хамра́ева; род. 8 июля 1991 года, Душанбе, Таджикская ССР, СССР) — российская певица таджикского происхождения, независимый музыкант, автор и исполнитель песен, режиссёр музыкальных видеоклипов, общественный деятель в области борьбы с домашним насилием, амбассадор благотворительного фонда «Подари жизнь» (с декабря 2019 года), первый российский посол доброй воли Агентства ООН по делам беженцев (с декабря 2020 года).
По итогам национального зрительского SMS-голосования, проведённого 8 марта 2021 года в прямом эфире Первого канала, будет представлять Россию с песней «Русская женщина» (Russian Woman) на 65-м международном конкурсе песни «Евровидение-2021», который пройдёт в городе Роттердам (Нидерланды) в мае 2021 года.
      </div>
    </div>
  );
};

export default ProfileInfo;
