import * as React from 'react';
import moment from 'moment';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

function ImgMediaCard({ img, title, code, demo, tags, createdAt }) {
  const stack = tags;
  const date = moment(createdAt, 'YYYY-MM-DDTHH:mm:ss.SSS[Z]').format(
    'DD MMMM YYYY'
  );

  return (
    <div class="col-12 col-md-6 col-xl-4">
      <div class="card h-100">
        <div className="img-wrap">
          <img src={img} class="card-img-top" alt={title} />
        </div>
        <div class="card-body">
          <h5 class="card-title text-dark"> {title}</h5>
          <p className="created d-flex align-items-center">
            <QueryBuilderIcon /> <span className="ms-2 me-2">Created at :</span>
            <span> {date !== 'Invalid date' ? date : 'NA'}</span>
          </p>
          <div className="row card-stack">
            {stack &&
              stack.map((item, index) => {
                return (
                  <p className="stack-pill" key={index}>
                    {item}
                  </p>
                );
              })}
          </div>
          <div className="d-flex card-btns justify-content-between">
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
