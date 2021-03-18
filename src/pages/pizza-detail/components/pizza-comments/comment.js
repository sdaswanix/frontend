import React from "react";
import { TimeService } from "../../../../services/timer-service";

export function Comment({ comment }) {
  const { date, text, rating } = comment;
  return (
    <div>
      <div>{TimeService.formatDate(date)}</div>
      <div>{rating}</div>
      <div>{text}</div>
    </div>
  );
}
