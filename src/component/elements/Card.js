import * as React from 'react';

function ImgMediaCard({ img, title, code, demo }) {
  return (
    <div class="col-12 col-md-6 col-xl-4">
      <div class="card h-100">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-dark"> {title}</h5>
          <div className="d-flex justify-content-between">
            <a
              target="_blank"
              rel="noreferrer"
              href={demo}
              class="btn btn-primary "
            >
              Live Demo
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={code}
              class="btn btn-primary ms-2"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImgMediaCard;
