import Heading from './Heading';

function Accordian({ heading, children, accordianSelect }) {
  return (
    <div className="accordion accordion-flush w-100" id="accordionFlushExample">
      <div className="accordion-item experience py-0">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed bg-transparent py-0 mt-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${accordianSelect}`}
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            <Heading text={heading} />
          </button>
        </h2>
        <div
          id={accordianSelect}
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Accordian;
