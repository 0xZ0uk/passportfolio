import React from "react";
import styles from "./styles.module.scss";

interface IProject {
  id: string | number;
}

const Project: React.FC<IProject> = ({ id }) => {
  return <div key={id} className={styles.displayer}></div>;
};

export default Project;
