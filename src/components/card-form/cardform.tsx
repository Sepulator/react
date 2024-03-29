import { ICardForm } from '@/store/cardsSlice';

export const CardForm = ({ image, text, date, select, radio, checkbox }: ICardForm) => {
  const checkboxList = checkbox.map((el, index) => (
    <span className="mb-2" key={index}>
      {index === checkbox.length - 1 ? `${el}` : `${el},  `}
    </span>
  ));

  return (
    <div className="col-lg-3 col-md-6 mb-4" data-testid="card-form">
      <div className="card">
        <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
          <img src={image} className="" style={{ height: '300px', width: '300px' }} alt={text} />
          <a href="#!">
            <div className="mask">
              <div className="d-flex justify-content-start align-items-end h-100">
                <h5>
                  <span className="badge sale-badge ms-2">{`${radio}`}</span>
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
            <h6 className="card-title mb-2">{text}</h6>
          </div>
          <div className="text-reset ">
            <p className="mb-0">{select}</p>
            {checkboxList}
          </div>
          <h5 className="price">
            <label>{`${date}`}</label>
          </h5>
        </div>
      </div>
    </div>
  );
};
