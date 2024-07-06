import React from 'react';
import '../style/carousel.scss';

function Crousel({ data }) {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators experience py-0">
          {data &&
            data.map((item, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={`${index}`}
                  className={index === 0 ? ' active' : ''}
                  aria-current="true"
                  aria-label={`Slide ${index}`}
                ></button>
              );
            })}
        </div>
        <div className="carousel-inner">
          {data &&
            data.map((image, index) => {
              return (
                <div
                  key={index}
                  className={
                    index === 0 ? 'carousel-item active' : 'carousel-item'
                  }
                >
                  <img
                    style={{
                      maxHeight: '400px',
                      background: 'white',
                      minHeight: '400px',
                    }}
                    src={process.env.PUBLIC_URL + '/' + image.slide}
                    alt=""
                    className="d-block w-100"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="experience">{image.place}</h5>
                  </div>
                </div>
              );
            })}
        </div>
        <button
          className="carousel-control-prev experience"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next experience"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Crousel;
