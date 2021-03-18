import React from "react";
import css from "./ingredient-list.module.css";

export function Ingredient({ ingredient }) {
  const { name, price } = ingredient;
  if (price === undefined) {
    return <h3 className={css.h3}>{name}</h3>;
  } else {
    return (
      <h3 className={css.h3}>
        {name} ({price}€)
      </h3>
    );
  }
}
