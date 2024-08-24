import React from "react";
import { useController } from "react-hook-form";
import styles from "../styles/SelectInput.module.css";

const SelectInput = ({ name, control, options, label }) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <select {...field} id={name} className={styles.select}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className={styles.error}>{error.message}</span>}
    </div>
  );
};

export default SelectInput;
