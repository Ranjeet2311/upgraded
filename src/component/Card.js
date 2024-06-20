import * as React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

function ImgMediaCard({ img, title, code, demo, tags, createdAt }) {
  const stack = tags;
  const date = moment(createdAt, 'YYYY-MM-DDTHH:mm:ss.SSS[Z]').format(
    'DD MMMM YYYY'
  );

  return (
    <div className="col-12 col-md-6 col-xl-4">
      <Link to={`/projects/${title}`} className="card-link">
        <div className="card h-100">
          <div className="img-wrap">
            <img src={img} class="card-img-top" alt={title} />
          </div>
          <div className="card-body">
            <h5 className="card-title text-dark"> {title}</h5>
            <p className="created d-flex align-items-center">
              <span className="ms-2 me-2">Created at :</span>
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
            <div className=" d-flex card-btns  justify-content-between">
              <a
                rel="noreferrer"
                href={demo}
                target="_blank"
                class="btn btn-bg text-light w-100 more"
                type="button"
              >
                More Details
              </a>
              {/* <a
                target="_blank"
                rel="noreferrer"
                href={code}
                class="btn btn-primary ms-2"
              >
                Source Code
              </a> */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ImgMediaCard;
