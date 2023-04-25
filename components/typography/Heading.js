import React from "react";
import styles from "./Heading.module.scss";
import clsx from "clsx";

function Heading({ level = 1, children, className }) {
  if (level === 1) {
    {
      return <h1 className={clsx(className, styles.heading)}>{children}</h1>;
    }
  }
  if (level === 2) {
    {
      return (
        <h2 className={clsx(className, styles.heading, styles.h2Heading)}>
          {children}
        </h2>
      );
    }
  }
  if (level === 3) {
    {
      return (
        <h3 className={clsx(className, styles.heading, styles.h3Heading)}>
          {children}
        </h3>
      );
    }
  }
}

export default Heading;
