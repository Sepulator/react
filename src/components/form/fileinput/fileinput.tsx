import { Component } from 'react';

interface Props {
  file: React.RefObject<HTMLInputElement>;
  validate: boolean;
}

export class FileInput extends Component<Props> {
  render() {
    return (
      <div
        className="card-header border-0 text-center p-5"
        style={{ backgroundColor: 'hsl(210, 26%, 84%)' }}
      >
        <i className="fas fa-image fa-5x text-white d-block mb-4"></i>

        <label className="btn btn-white btn-rounded shadow-3 form-check " id="file">
          <i className="fas fa-plus me-2 "></i>Add a photo
          <input
            ref={this.props.file}
            type="file"
            name="file"
            className={`form-control d-none ${this.props.validate ? '' : 'is-invalid'}`}
            id="file"
            accept=".png, .jpg, .jpeg"
          />
          <div className="invalid-feedback mt-2">Image file needed.</div>
        </label>
      </div>
    );
  }
}
