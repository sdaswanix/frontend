import React from "react";
import { CartForm, IngredientList } from "../../../../components";
export function PizzaIngredients({ pizza }) {
  const { ingredients } = pizza;
  return (
    <section>
      <h2>Ingredientes</h2>
      <IngredientList ingredients={ingredients} />
      <CartForm pizza={pizza} />
    </section>
  );
}
