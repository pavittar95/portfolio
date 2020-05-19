import React from "react";

export default function CircleCard({
  src = "",
  title = "",
  link = "",
  cls = "",
  parentCls = "",
}) {
  return (
    <div className={`circle-card ${parentCls}`}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className={`image ${cls}`} alt={src} src={src} width="200" />
        <p className="title">{title}</p>
      </a>
    </div>
  );
}
