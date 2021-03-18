import React from "react";
export function Form(props) {
  const { children, ...rest } = props;
  return <form {...rest}>{children}</form>;
}
