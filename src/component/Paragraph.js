import React from "react";

function Paragraph({ text }) {
  return (
    <div>
      <p className="text-start px-1 px-lg-4">{text}</p>
    </div>
  );
}

export default Paragraph;
