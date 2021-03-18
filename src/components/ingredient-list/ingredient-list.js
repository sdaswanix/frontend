import React from "react";
import css from "./ingredient-list.module.css";
import { Ingredient } from "./ingredient.js";
export function IngredientList({ ingredients }) {
  return (
    <section>
      <ul className={css.ul}>
        {ingredients.map((ingredient) => {
          return (
            <li key={ingredient.id}>
              <Ingredient ingredient={ingredient} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
