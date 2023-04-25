import React from "react";
import styles from "./Text.module.scss";
import clsx from "clsx";

function Text({ children, className }) {
  return <p className={clsx(styles.text, className)}>{children} </p>;
}

export default Text;
