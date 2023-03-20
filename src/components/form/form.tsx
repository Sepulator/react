import React from 'react';
import { DateInput } from './dateinput/dateinput';
import { TextInput } from './textinput/textinput';

interface Props {
  className: string;
}

interface FormInputs {
  text: React.RefObject<HTMLInputElement>;
  date: React.RefObject<HTMLInputElement>;
}

interface FormValidate {
  text: boolean;
  date: boolean;
}

export class Form extends React.Component<Props> {
  form: FormInputs;
  validate: FormValidate;
  constructor(props: Props) {
    super(props);
    this.form = {
      text: React.createRef(),
      date: React.createRef(),
    };
    this.validate = {
      text: true,
      date: true,
    };
  }
  render() {
    return (
      <div className="d-flex justify-content-center my-3">
        <div className="col-lg-5">
          <div className="card">
            <form action="">
              <div
                className="card-header border-0 text-center p-5"
                style={{ backgroundColor: 'hsl(210, 26%, 84%)' }}
              >
                <i className="fas fa-image fa-5x text-white d-block mb-4"></i>

                <label className="btn btn-white btn-rounded shadow-3" id="file">
                  <i className="fas fa-plus me-2"></i>Add a photo
                  <input type="file" name="file" className="form-control d-none" id="file" />
                </label>
              </div>

              <div className="card-body">
                <div className="row">
                  <TextInput validate={this.validate.text} text={this.form.text} />
                  <DateInput validate={this.validate.date} date={this.form.date} />

                  <div className="col-md">
                    <label htmlFor="select" className="form-label">
                      Category
                    </label>
                    <select name="select" className="form-select mb-3" defaultValue="default">
                      <option hidden value="default">
                        Select one...
                      </option>
                      <option value="perfume">Perfume</option>
                      <option value="skincare">Skincare</option>
                      <option value="groceries">Groceries</option>
                      <option value="decoration">Home Decoration</option>
                    </select>
                  </div>
                  <label className="form-label">Select promo discount</label>
                  <div className="btn-group shadow-0">
                    <input
                      type="radio"
                      className="btn-check"
                      name="radio"
                      id="promo1"
                      value="promo1"
                    />
                    <label className="btn btn-secondary" htmlFor="promo1">
                      5% promo
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="radio"
                      id="promo2"
                      value="promo2"
                    />
                    <label className="btn btn-secondary" htmlFor="promo2">
                      10% promo
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="radio"
                      id="promo3"
                      value="promo3"
                    />
                    <label className="btn btn-secondary" htmlFor="promo3">
                      15% promo
                    </label>
                  </div>

                  <div className="">
                    <h6 className="text-center mt-2">Choose one or more options</h6>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="exclusive"
                        name="exclusive"
                        id="exclusive"
                      />
                      <label className="form-check-label" htmlFor="exclusive">
                        Very exclusive
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="arrival"
                        name="arrival"
                        id="arrival"
                      />
                      <label className="form-check-label" htmlFor="arrival">
                        New arrival
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="best"
                        name="best"
                        id="best"
                      />
                      <label className="form-check-label" htmlFor="best">
                        Best Seller
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center card-footer border-0 bg-light py-3 text-end">
                <button type="submit" className="btn btn-primary btn-rounded me-1">
                  Submit
                </button>
                <button type="reset" className="btn btn-warning btn-rounded ms-1">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
