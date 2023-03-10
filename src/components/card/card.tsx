import './card.scss';
import React from 'react';
import { Product } from '../../data/type';

export class Card extends React.Component<Product, never> {
  render() {
    const { title, price, discountPercentage, brand, category, thumbnail } = this.props;
    return (
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img src={thumbnail} className="w-100" style={{ height: '300px' }} alt={title} />
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
          <div className="card-body">
            <div className="text-reset">
              <h6 className="card-title mb-2">{title}</h6>
            </div>
            <div className="text-reset ">
              <p className="mb-0">{category}</p>
              <p className="mb-2">{brand}</p>
            </div>
            <h6 className="price">
              <s>{`${price}$`}</s>
              <strong className="ms-2 sale">
                {`${((price * (100 - discountPercentage)) / 100).toFixed(2)}$`}
              </strong>
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
