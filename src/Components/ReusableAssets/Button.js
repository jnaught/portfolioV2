import React from "react";

export default function button(props) {
  const btninfo = props;
  return (
    <div>
      <button
        style={{ color: btninfo.props.color, height: btninfo.props.height }}
      >
        {btninfo.props.text}
      </button>
    </div>
  );
}
