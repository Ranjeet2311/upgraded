import TextsmsIcon from '@mui/icons-material/Textsms';
import '../style/modal.scss';

function StaticModal({ title, children }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn btn-bg w-100 text-light"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <TextsmsIcon /> Message me
      </button>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body"> {children} </div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaticModal;
