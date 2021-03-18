import React from "react";
import { Button, Image } from "../../../../components";
import css from "./pizza-card.module.css";

export function PizzaCard({ pizza }) {
  return (
    <article className={css.card}>
      <Image
        public_id={pizza.image.public_id}
        width="4"
        height="3"
        small={400}
        big={800}
      />
      <h3 className={css.h3}>{pizza.name}</h3>
      <h4 className={css.h4}>{pizza.price}€</h4>
      <h3 className={css.buttonContainer}>
        <Button className={css.buttonCarrito} label="AÑADIR AL CARRITO" />
        <Button className={css.buttonVer} label="VER MAS" />
      </h3>
    </article>
  );
}
