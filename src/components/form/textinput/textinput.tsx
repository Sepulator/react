import { Component } from 'react';

interface Props {
  text: React.RefObject<HTMLInputElement>;
  validate: boolean;
}

export class TextInput extends Component<Props> {
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
        <div className="invalid-feedback">
          Title contain from 3 to 12 character, latin letters or numbers .
        </div>
      </div>
    );
  }
}
