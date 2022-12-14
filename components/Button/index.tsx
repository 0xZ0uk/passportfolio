import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";

interface IButton {
  label: string | React.ReactElement;
  className: string;
  onClick: () => void;
}

const Button: React.FC<IButton> = ({ label, className, onClick }) => {
  return (
    <button className={classNames(styles.button, className)} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
