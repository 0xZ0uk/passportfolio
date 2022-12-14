import React from "react";
import Project from "../Project";
import styles from "./styles.module.scss";

interface IRotator {
  active: number;
  projects: any[];
}

const Rotator: React.FC<IRotator> = ({ active, projects }) => {
  const displays = [1, 2, 3, 4];

  return (
    <>
      <div
        className={styles.container}
        style={{
          transform: `translateY(${340 * 3.2}px) rotateZ(${active * 90}deg)`,
        }}
      >
        {displays.map((elem, index) => (
          <Project id={index} key={index} />
        ))}
      </div>
      {!!projects && !!projects[active] && (
        <div className={styles.info}>
          <h3 className={styles.title}>{projects[active].title}</h3>
          <p className={styles.description}>{projects[active].description}</p>
        </div>
      )}
    </>
  );
};

export default Rotator;
