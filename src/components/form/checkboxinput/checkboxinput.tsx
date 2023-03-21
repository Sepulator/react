import { Component } from 'react';

interface Props {
  checkbox: ICheckboxList;
}

export interface ICheckboxList {
  exclusive: React.RefObject<HTMLInputElement>;
  arrival: React.RefObject<HTMLInputElement>;
  best: React.RefObject<HTMLInputElement>;
}

interface State {
  value: string;
}

export class CheckboxInput extends Component<Props, State> {
  render() {
    return (
      <div className="">
        <h6 className="text-center mt-2">Choose one or more options</h6>

        <div className="form-check form-check-inline">
          <input
            ref={this.props.checkbox.exclusive}
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
            ref={this.props.checkbox.arrival}
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
            ref={this.props.checkbox.best}
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
    );
  }
}
