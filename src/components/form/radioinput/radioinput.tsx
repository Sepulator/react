import { Component } from 'react';

interface Props {
  radio: IRadioList;
}

export interface IRadioList {
  promo1: React.RefObject<HTMLInputElement>;
  promo2: React.RefObject<HTMLInputElement>;
  promo3: React.RefObject<HTMLInputElement>;
}

interface State {
  value: string;
}

export class RadioInput extends Component<Props, State> {
  render() {
    return (
      <>
        <label className="form-label">Select promo discount</label>
        <div className="">
          <div className="form-check form-check-inline">
            <input
              ref={this.props.radio.promo1}
              type="radio"
              className="form-check-input"
              id="promo1"
              name="radio"
              value="5% promo"
            />
            <label className="form-check-label" htmlFor="promo1">
              5% promo
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              ref={this.props.radio.promo2}
              type="radio"
              className="form-check-input"
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
              className="form-check-input"
              id="promo3"
              name="radio"
              value="15% promo"
            />
            <label className="form-check-label" htmlFor="promo3">
              15% promo
            </label>
          </div>
          <div className="invalid-feedback">Select desired discount.</div>
        </div>
      </>
    );
  }
}
