import { Product } from '@/types/data';
import { Spinner } from '../icons';

interface Props {
  handleClose: () => void;
  handleModal: (e: React.MouseEvent<HTMLDivElement>) => void;
  data: Product | undefined;
  isPending: boolean;
}

interface PropsCard {
  handleClose: () => void;
  data: Product;
}

export const CardExpanded = ({ data, handleClose, handleModal, isPending }: Props) => {
  return (
    <div className="modal modal-additional" tabIndex={-1} onClick={(e) => handleModal(e)}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {isPending && <Spinner className="modal-dialog modal-dialog-centered" />}
          {!isPending && data && <Card data={data} handleClose={handleClose} />}
        </div>
      </div>
    </div>
  );
};

const Card = ({ data, handleClose }: PropsCard) => {
  const { title, price, discountPercentage, brand, category, thumbnail, description } = data;
  return (
    <>
      <div className="modal-header">
        <button
          type="button"
          className="btn-close"
          data-mdb-dismiss="modal"
          aria-label="Close"
          onClick={handleClose}
        ></button>
      </div>
      <div className="modal-body">
        <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
          <img
            src={thumbnail}
            className="w-100"
            style={{ height: '250px', objectFit: 'contain' }}
            alt={title}
          />
          <a href="#!">
            <div className="mask">
              <div className="d-flex justify-content-start align-items-end h-100">
                <h5>
                  <span className="badge sale-badge ms-2">{-`${discountPercentage}`}</span>
                </h5>
              </div>
            </div>
            <div className="hover-overlay bg-color-hover">
              <div className="mask"></div>
            </div>
          </a>
        </div>
        <div className="card-body p-2">
          <div className="text-reset text-center">
            <h6 className="card-title mb-2">{title}</h6>
          </div>
          <div className="text-reset text-center">
            <p className="mb-0">{category}</p>
            <p className="mb-2">{brand}</p>
          </div>
          <h5 className="price text-center">
            <s>{`${price}$`}</s>
            <strong className="ms-2 sale">
              {`${((price * (100 - discountPercentage)) / 100).toFixed(2)}$`}
            </strong>
          </h5>
          <div className="text-reset">
            <p className="mb-2">{description}</p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-mdb-dismiss="modal"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </>
  );
};
