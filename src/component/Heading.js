import "animate.css";
import Typewriter from "typewriter-effect";
function Heading({ text, align, secondText }) {
  return (
    <div
      className={align ? "text-center text-lg-start head" : "text-center head"}
    >
      <h2 className="heading animate__animated animate__flipInX">
        {/* <Typewriter
          options={{
            strings: [text, secondText && secondText],
            autoStart: true,
            loop: true,
            pauseFor: 15000,
          }}
        /> */}
        {text}
      </h2>
    </div>
  );
}

export default Heading;
