import React from "react";
import style from './Botao.module.scss'

function Button(props: any ) {
  return (
    <button
      className={style.botao}
    >
      {props.children}</button>
  );
}

export default Button;
