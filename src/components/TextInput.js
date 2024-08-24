import React from "react";
import { useController } from "react-hook-form";
import styles from "../styles/TextInput.module.css";

const TextInput = ({ name, control, label, ...rest }) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input {...field} id={name} className={styles.input} {...rest} />
      {error && <span className={styles.error}>{error.message}</span>}
    </div>
  );
};

export default TextInput;
