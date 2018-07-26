import React from "react";

export default function SiteTitle(props) {
  const title = props;
  return (
    <div>
      <p style={title.props.style}>{title.props.name}</p>
    </div>
  );
}
