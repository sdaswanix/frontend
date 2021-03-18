import React from "react";

export function Button(props) {
  const { className, label } = props;
  return <button className={className}>{label}</button>;
}
