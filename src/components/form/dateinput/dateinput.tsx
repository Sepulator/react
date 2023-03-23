import { Component } from 'react';

interface Props {
  date: React.RefObject<HTMLInputElement>;
  validate: boolean;
}

export class DateInput extends Component<Props> {
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
        <div className="invalid-feedback">Select manufacture date below current one.</div>
      </div>
    );
  }
}
