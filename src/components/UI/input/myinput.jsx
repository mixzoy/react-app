import React from "react";
import classes from './myinput.module.css';
const Myinput = (props) => {
    return (
       <input className={classes.myinput} {...props} >
       </input>
    )
};

export default Myinput;