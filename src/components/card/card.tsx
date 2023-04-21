import './card.scss';
import { Product } from '../../types/data';

interface Props {
  handleOpen: (id: number) => void;
  data: Product;
}

export const Card = ({ data, handleOpen }: Props) => {
  const { id, title, price, discountPercentage, brand, category, thumbnail } = data;
  return (
    <div className="col-lg-3 col-md-6 mb-4" onClick={() => handleOpen(id)}>
      <div className="card" data-testid="card-body">
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
          <div className="text-reset">
            <h6 className="card-title mb-2">{title}</h6>
          </div>
          <div className="text-reset ">
            <p className="mb-0">{category}</p>
            <p className="mb-2">{brand}</p>
          </div>
          <h5 className="price">
            <s>{`${price}$`}</s>
            <strong className="ms-2 sale">
              {`${((price * (100 - discountPercentage)) / 100).toFixed(2)}$`}
            </strong>
          </h5>
        </div>
      </div>
    </div>
  );
};
