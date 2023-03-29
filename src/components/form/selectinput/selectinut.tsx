import { Component } from 'react';

interface Props {
  select: React.RefObject<HTMLSelectElement>;
  validate: boolean;
}

export const selectOptions = ['Perfume', 'Skincare', 'Groceries', 'Home Decoration'];

export class SelectInput extends Component<Props> {
  render() {
    const items = selectOptions.map((el, index) => (
      <option value={el} key={index}>
        {el}
      </option>
    ));
    return (
      <div className="col-md">
        <label htmlFor="select" className="form-label">
          Category
        </label>
        <select
          name="select"
          ref={this.props.select}
          className={`form-select mb-3  ${this.props.validate ? '' : 'is-invalid'}`}
          defaultValue="default"
        >
          <option hidden value="default">
            Select one...
          </option>
          {items}
        </select>
        <div className="invalid-feedback" style={{ position: 'relative' }}>
          Select one of available category.
        </div>
      </div>
    );
  }
}
