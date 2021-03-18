import React from "react";
import {
  Pizza,
  PizzaIngredients,
  PizzaComments,
  CommentForm,
} from "./components";
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
        <h2>Añade tu comentario</h2>
        <CommentForm />
      </main>
    </Page>
  );
}
export default PizzaDetail;
