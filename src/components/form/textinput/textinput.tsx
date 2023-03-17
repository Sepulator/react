import { Component } from 'react';

export class TextInput extends Component {
  render() {
    return (
      <div className="md-form mb-2">
        <label className="form-label" htmlFor="name">
          Product title
        </label>
        <input
          type="text"
          id="name"
          name="text"
          className="form-control"
          placeholder="Enter title of product"
        />
      </div>
    );
  }
}
