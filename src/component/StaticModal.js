import TextsmsIcon from '@mui/icons-material/Textsms';
import '../style/modal.scss';

function StaticModal({ title, children }) {
  return (
    <div>
      <button
        type="button"
        class="btn btn btn-bg w-100 text-light"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <TextsmsIcon /> Message me
      </button>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                {title}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body"> {children} </div>
            {/* <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
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
