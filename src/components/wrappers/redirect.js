import React from "react";

export function Redirect(props) {
  const { href, label } = props;
  return <a href={href}>{label}</a>;
}
