import React from "react";

export default function SemiCurvedCard({
  src = "",
  srcset = "",
  title = "",
  description = "",
}) {
  return (
    <div className="semi-curved">
      <div className="image">
        <div className="detail">
          <p>{title}</p>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
}
