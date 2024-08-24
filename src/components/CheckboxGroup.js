import React from "react";
import { useController } from "react-hook-form";
import styles from "../styles/CheckboxGroup.module.css";

const CheckboxGroup = ({ name, control, options, label }) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  // Ensure field.value is always an array
  const value = field.value || [];

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div className={styles.checkboxes}>
        {options.map((option) => (
          <label key={option.value} className={styles.option}>
            <input
              type="checkbox"
              value={option.value}
              checked={value.includes(option.value)}
              onChange={() => {
                const newValue = value.includes(option.value)
                  ? value.filter((v) => v !== option.value)
                  : [...value, option.value];
                field.onChange(newValue);
              }}
            />
            {option.label}
          </label>
        ))}
      </div>
      {error && <span className={styles.error}>{error.message}</span>}
    </div>
  );
};

export default CheckboxGroup;
