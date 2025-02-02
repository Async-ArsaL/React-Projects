import React, { useContext } from "react";
import { themeContext } from "../App";

const childC = () => {
  const{ theme , setTheme }= useContext(themeContext);

  const clickHandler =()=>{
    if(theme==="light"){
      setTheme('dark')
    }
    else{setTheme('light')}
  }
  return (
    <div>
      <button onClick={clickHandler}>

        Change Theme
      </button>
    </div>
  );
};

export default childC;
