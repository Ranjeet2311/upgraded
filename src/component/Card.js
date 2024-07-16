import { useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

function ImgMediaCard({
  img,
  title,
  code,
  demo,
  tags,
  createdAt,
  description,
  pageLink,
  showBtn,
  list,
  secBtnText,
  primeBtnText,
  type,
}) {
  const [hide, setHide] = useState(false);
  const stack = tags && tags.slice(0, 5);
  const date = moment(createdAt, 'YYYY-MM-DDTHH:mm:ss.SSS[Z]').format(
    'DD MMMM YYYY'
  );

  return (
    // <div className="col-12 col-md-6 col-xl-4">
    <Link to={pageLink} className="card-link">
      <div
        className="card h-100"
        onMouseEnter={() => setHide(true)}
        onMouseLeave={() => {
          setHide(false);
        }}
      >
        {img && (
          <div className="img-wrap">
            <img
              src={process.env.PUBLIC_URL + '/' + img}
              className="card-img-top"
              alt={title}
            />
          </div>
        )}
        <div className="card-body">
          <h5 className="card-title text-dark">
            <span className={type === 'general' ? 'inline me-1' : 'd-none'}>
              🟢
            </span>
            {title}
          </h5>
          {createdAt && (
            <p className="created d-flex align-items-center">
              <span className="me-2">Last updated :</span>
              <span>
                {date !== 'Invalid date' ? date : 'Checkout github for date'}
              </span>
            </p>
          )}
          <p className="description d-flex align-items-center">
            {description && description.substr(0, 130)}{' '}
            {description && '....Read more....'}
          </p>
          {stack && (
            <div className="row card-stack">
              {stack &&
                stack.map((item, index) => {
                  return (
                    <p className="stack-pill" key={index}>
                      {item}
                    </p>
                  );
                })}
              {stack && <p className="stack-pill">more....</p>}
            </div>
          )}

          <ul className="desc-list">
            {list &&
              list.map((description, i) => {
                return <li> {description} </li>;
              })}
          </ul>
          {/* <div className=" d-flex card-btns  justify-content-between"> */}
          {showBtn && (
            <a
              rel="noreferrer"
              href={demo}
              target="_blank"
              className="btn btn-bg text-light w-100 more card-btns"
              type="button"
            >
              {hide ? secBtnText : primeBtnText}
            </a>
          )}

          {/* <a
                target="_blank"
                rel="noreferrer"
                href={code}
                className="btn btn-primary ms-2"
              >
                Source Code
              </a> */}
          {/* </div> */}
        </div>
      </div>
    </Link>
    // </div>
  );
}

export default ImgMediaCard;
