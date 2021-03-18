import React from "react";
import { Pizza, PizzaIngredients, PizzaComments } from "./components";
import { Page } from "../../components";

import "../../styles";

function PizzaDetail({ pizza }) {
  return (
    <Page>
      <main>
        <h1 className="visually-hidden">Pizza</h1>
        <Pizza pizza={pizza} />
        <PizzaIngredients pizza={pizza} />
        <PizzaComments pizza={pizza} />
      </main>
    </Page>
  );
}
export default PizzaDetail;
