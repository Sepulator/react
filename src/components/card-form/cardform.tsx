import React from 'react';

export interface IFormResult {
  file: File;
  text: string;
  date: string;
  select: string;
  radio: string;
  checkbox: string[];
}

export class CardForm extends React.Component<IFormResult> {
  render() {
    const { file, text, date, select, radio, checkbox } = this.props;
    const checkboxList = checkbox.map((el, index) => (
      <p className="mb-2" key={index}>
        {el}
      </p>
    ));
    return (
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img
              src={URL.createObjectURL(file)}
              className="w-100"
              style={{ height: '300px', width: '300px' }}
              alt={text}
            />
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
  }
}
