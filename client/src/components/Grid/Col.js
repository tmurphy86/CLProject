import React from "react";

export const Col = ({ size, children, offset }) =>
<div className={
  size.split(" ").map(size => "col-" + size).join(" ") + " " + offset }>
  {children}
</div>;
