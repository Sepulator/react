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
        <div className="btn-group shadow-0">
          <input
            type="radio"
            ref={this.props.radio.promo1}
            className="btn-check"
            name="radio"
            id="promo1"
            value="5% promo"
          />
          <label className="btn btn-secondary" htmlFor="promo1">
            5% promo
          </label>

          <input
            type="radio"
            ref={this.props.radio.promo2}
            className="btn-check"
            name="radio"
            id="promo2"
            value="10% promo"
          />
          <label className="btn btn-secondary" htmlFor="promo2">
            10% promo
          </label>

          <input
            type="radio"
            ref={this.props.radio.promo3}
            className="btn-check"
            name="radio"
            id="promo3"
            value="15% promo"
          />
          <label className="btn btn-secondary" htmlFor="promo3">
            15% promo
          </label>
        </div>
      </>
    );
  }
}
