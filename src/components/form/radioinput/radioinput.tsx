import { Component } from 'react';

interface Props {
  radio: IRadioList;
  validate: boolean;
}

export interface IRadioList {
  promo1: React.RefObject<HTMLInputElement>;
  promo2: React.RefObject<HTMLInputElement>;
  promo3: React.RefObject<HTMLInputElement>;
}

export class RadioInput extends Component<Props> {
  render() {
    return (
      <>
        <label className="form-label">Select promo discount</label>
        <div>
          <div className="form-check form-check-inline">
            <input
              ref={this.props.radio.promo1}
              type="radio"
              className={`form-check-input  ${this.props.validate ? '' : 'is-invalid'}`}
              id="promo1"
              name="radio"
              value="5% promo"
            />
            <label className="form-check-label" htmlFor="promo1">
              5% promo
            </label>
            <div className="invalid-feedback">Choose desired discount.</div>
          </div>
          <div className="form-check form-check-inline">
            <input
              ref={this.props.radio.promo2}
              type="radio"
              className={`form-check-input  ${this.props.validate ? '' : 'is-invalid'}`}
              id="promo2"
              name="radio"
              value="10% promo"
            />
            <label className="form-check-label" htmlFor="promo2">
              10% promo
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              ref={this.props.radio.promo3}
              type="radio"
              className={`form-check-input  ${this.props.validate ? '' : 'is-invalid'}`}
              id="promo3"
              name="radio"
              value="15% promo"
            />
            <label className="form-check-label" htmlFor="promo3">
              15% promo
            </label>
          </div>
        </div>
      </>
    );
  }
}
