function Accordian({ heading, children, accordianSelect }) {
  const randomNumber = Math.floor(Math.random() * 100000);
  const toggle = accordianSelect.replaceAll(" ", "") + randomNumber;
  return (
    <div
      className="accordion accordion-flush w-100 mb-4"
      id="accordionFlushExample"
    >
      <div className="accordion-item experience py-0">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed bg-transparent pt-2 pb-2 mt-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${toggle}`}
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            <h2>{heading}</h2>
          </button>
        </h2>
        <div
          id={toggle}
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
