import React from "react";
import "./section.scss";

export default function Section(props) {
  return <div className="section">{props.children}</div>;
}
