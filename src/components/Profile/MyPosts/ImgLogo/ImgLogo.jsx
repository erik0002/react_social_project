import React from 'react'
import s from './ImgLogo.module.css'

const ImgLogo = (props) => {

return (
            <img className={s.ImgLogo} src={props.name}/>
)
}

export default ImgLogo;