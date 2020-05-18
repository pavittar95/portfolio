import React from "react";

export default function CircleCard({
  src = "",
  srcset = "",
  title = "",
  description = "",
}) {
  return (
    <div className="circle-card">
      <img
        className="image"
        alt="Angular full color logo.svg"
        src={src}
        decoding="async"
        width="250"
        height="250"
        srcSet={srcset}
        data-file-width="512"
        data-file-height="512"
      />
      <p className="title">{title}</p>
      {/* <span className="desc">{description}</span> */}
    </div>
  );
}
