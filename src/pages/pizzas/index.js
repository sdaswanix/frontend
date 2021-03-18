import React from "react";
import { Search, PizzaList } from "./components";
import { Page } from "../../components";
import "../../styles";
import css from "./index.module.css";
export default function Pizzas({ pizzas }) {
  return (
    <Page>
      <main className={css.main}>
        <h1 className="visually-hidden">Pizzas</h1>
        <Search />
        <PizzaList pizzas={pizzas} />
      </main>
    </Page>
  );
}
