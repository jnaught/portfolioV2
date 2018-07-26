import React from "react";

export default function button(props) {
  const bname = props;
  return (
    <div>
      <button>{bname.props}</button>
    </div>
  );
}
