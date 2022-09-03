import React, { useState } from "react";
import {
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
} from "react-icons/bs";
import Webcam from "react-webcam";
import styles from "./Header.module.css";

export default function Header() {
  const [camera, setCamera] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <button className={styles.button} onClick={() => setCamera(!camera)}>
          {camera ? (
            <BsFillCameraVideoFill fill="#fff" size={23} />
          ) : (
            <BsFillCameraVideoOffFill fill="#fff" size={23} />
          )}
        </button>
      </header>

      {camera ? (
        <Webcam
          audio={false}
          className={styles.camera}
          width={300}
          height={300}
          videoConstraints={{
            width: 300,
            height: 300,
            facingMode: "user"
          }}
        />
      ) : null}
    </>
  );
}
