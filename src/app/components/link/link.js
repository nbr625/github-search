import React from "react"

const Link = ({ children, external, ...props }) => (
  <a {...props} {...(external ? { target: `_blank`, rel: `noopener` } : {})}>
    {children}
  </a>
)

export default Link
