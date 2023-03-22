import React from 'react';

type CheckboxList = {
  exclusive: string;
  arrival: string;
  best: string;
};

interface Props {
  file: string;
  title: string;
  date: Date;
  select: string;
  radio: string;
  checkbox: CheckboxList;
}

export class FormCard extends React.Component<Props, never> {
  render() {
    const { file, title, date, select, radio, checkbox } = this.props;
    return (
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img
              src={file}
              className="w-100"
              style={{ height: '300px', width: '300px' }}
              alt={title}
            />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span className="badge sale-badge ms-2">{-`${radio}`}</span>
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
              <p className="mb-0">{select}</p>
              <p className="mb-2">{checkbox.arrival}</p>
              <p className="mb-2">{checkbox.best}</p>
              <p className="mb-2">{checkbox.exclusive}</p>
            </div>
            <h5 className="price">
              <label>{`${date}$`}</label>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
