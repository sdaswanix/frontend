import React from "react";
import { Comment } from "./comment.js";

export function CommentList({ comments }) {
  return (
    <section>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              <Comment comment={comment} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
