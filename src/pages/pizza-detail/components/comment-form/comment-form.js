import React from "react";
import { Form, Input, Button, Select } from "../../../../components";
import css from "./comment.module.css";

export function CommentForm() {
  const ratings = [
    { value: 10, text: "Fantastica" },
    { value: 5, text: "Buena" },
    { value: 0, text: "Mala" },
  ];

  return (
    <Form>
      <Select options={ratings} />
      <Input placeholder="Añade un comentario" className={css.input} />
      <Button label="Añadir" />
    </Form>
  );
}
