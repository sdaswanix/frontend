import React from "react";
import { Button } from "../wrappers/button.js";
import { Form } from "../wrappers/form.js";
import css from "./cart-form.module.css";

export function CartForm({ pizza }) {
  return (
    <Form>
      <input type="hidden" value={pizza.id} />
      <Button className={css.button} label="Añadir al carrito" />
    </Form>
  );
}
