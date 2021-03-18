import React from "react";
import { CommentList } from "./comment-list.js";

export function PizzaComments({ pizza }) {
  const { comments } = pizza;
  return (
    <section>
      <h2>Comentarios</h2>
      <CommentList comments={comments} />
    </section>
  );
}
