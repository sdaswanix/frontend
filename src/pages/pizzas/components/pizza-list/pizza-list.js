import React from "react";
import { PizzaCard } from "./pizza-card";
import css from "./pizza-list.module.css";

export function PizzaList({ pizzas }) {
  return (
    <ul className={css.list}>
      {pizzas.map((pizza) => {
        return (
          <li key={pizza.id}>
            <PizzaCard pizza={pizza} />
          </li>
        );
      })}
    </ul>
  );
}
