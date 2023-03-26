import { Component } from 'react';

interface Props {
  file: React.RefObject<HTMLInputElement>;
  validate: boolean;
}

interface State {
  file: string;
}

export class FileInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      file: '',
    };
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0] && e.target.files[0].type.includes('image')) {
      const file = URL.createObjectURL(e.target.files[0]);
      this.setState({ file: file });
    }
  }

  render() {
    const isImage =
      this.props.file.current?.value && this.props.file.current?.files![0].type.includes('image');
    return (
      <div
        className="card-header border-0 text-center p-5"
        style={{
          backgroundColor: 'hsl(210, 26%, 84%)',
        }}
      >
        {isImage ? (
          <img
            className="d-block w-auto"
            style={{ height: '300px', margin: '0 auto' }}
            src={this.state.file}
            alt=""
          />
        ) : (
          <i className="fas fa-image fa-5x text-white d-block mb-4"></i>
        )}

        <label className="btn btn-white btn-rounded shadow-3 form-check " id="file">
          <i className="fas fa-plus me-2 "></i>Add a photo
          <input
            ref={this.props.file}
            type="file"
            name="file"
            className={`form-control d-none ${this.props.validate ? '' : 'is-invalid'}`}
            id="file"
            data-testid="file-input"
            accept=".png, .jpg, .jpeg"
            onChange={(e) => this.onChange(e)}
          />
          <div className="invalid-feedback mt-2">Image file needed.</div>
        </label>
      </div>
    );
  }
}
