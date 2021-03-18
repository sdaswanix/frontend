import React from "react";
import css from "./select.module.css";

export function Select(props) {
  const { options, ...rest } = props;
  return (
    <select {...rest} className={css.select}>
      {options.map(({ value, text }) => {
        return (
          <option key={value} value={value}>
            {text}
          </option>
        );
      })}
    </select>
  );
}
