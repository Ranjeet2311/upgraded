import React from 'react';

function Paragraph({ text }) {
  return (
    <div>
      <p className="text-center text-md-start  p-1">{text}</p>
    </div>
  );
}

export default Paragraph;
