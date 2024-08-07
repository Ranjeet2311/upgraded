import "animate.css";

function Heading({ text, align }) {
  return (
    <div
      className={align ? "text-center text-lg-start head" : "text-center head"}
    >
      <h2 className="heading animate__animated animate__flipInX">{text}</h2>
    </div>
  );
}

export default Heading;
