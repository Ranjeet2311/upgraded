import React, { useState } from 'react';
function ContactForm() {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '8f73314e-621e-43c7-bff3-69fa455e78bf');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you for writing me. I'll write back to you ASAP.");
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <div className="row">
            <div className="col">
              <label for="exampleFormControlInput1" className="form-label">
                First name*
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Bruce"
                name="firstname"
                required
              />
            </div>
            <div className="col">
              <label for="exampleFormControlInput1" className="form-label">
                Last name*
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Wayne "
                name="lastname"
                required
              />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Contact number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="+44 000 000 00"
            name="contact"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Your email address*
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="brucewayne@example.com"
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Topic*
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Let's work together"
            name="topic"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Short description (Optional)
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="textarea"
          ></textarea>
        </div>
        <div className="mb-3">
          <button
            type="submit"
            className="btn btn-bg w-100 border-0 text-white"
          >
            Send
          </button>
        </div>
      </form>
      <h5>
        <span>{result}</span>
      </h5>
    </div>
  );
}

export default ContactForm;
