import React from "react";
import classes from "./InfoBlock.module.css";

const InfoBlock = ({name,info}) => {
  return (
    <div className={classes.infoBlock}>
      <p>{name}</p>
      <p className={classes.info}>{info}</p>
    </div>
  );
};

export default InfoBlock;
