import React from "react";
import style from "./Header.module.css";
import Navigation from "./Navigation/Navigation";
import InfoOnline from "./InfoOnline/InfoOnline";


function Header (props) {
  return (
    <header className={style.header}>
      <Navigation data={props.data.navigation}/>
      <InfoOnline infoOnline={props.data.infoOnline}/>
    </header>
  )
}

export default Header;