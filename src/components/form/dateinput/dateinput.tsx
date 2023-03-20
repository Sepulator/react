import { Component } from 'react';

interface Props {
  date: React.RefObject<HTMLInputElement>;
  validate: boolean;
}

interface State {
  value: string;
}

export class DateInput extends Component<Props, State> {
  render() {
    return (
      <div className="md-form mb-2 col-md">
        <label className="form-label" htmlFor="date">
          Choose date
        </label>
        <input
          ref={this.props.date}
          type="date"
          name="date"
          id="date"
          className={`form-control  ${this.props.validate ? '' : 'is-invalid'}`}
        />
      </div>
    );
  }
}
