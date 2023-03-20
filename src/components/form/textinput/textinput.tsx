import { Component } from 'react';

interface Props {
  text: React.RefObject<HTMLInputElement>;
  validate: boolean;
}

interface State {
  value: string;
}

export class TextInput extends Component<Props, State> {
  render() {
    return (
      <div className="md-form mb-2">
        <label className="form-label" htmlFor="name">
          Product title
        </label>
        <input
          ref={this.props.text}
          type="text"
          id="name"
          name="text"
          className={`form-control ${this.props.validate ? '' : 'is-invalid'}`}
          placeholder="Enter title of product"
        />
      </div>
    );
  }
}
