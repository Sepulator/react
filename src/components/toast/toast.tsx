import { Component } from 'react';

interface Props {
  showToast: boolean;
}

export class Toast extends Component<Props> {
  render() {
    return (
      <div
        className={`toast fade text-white bg-info position-absolute top-5 end-0 ${
          this.props.showToast ? 'show' : ''
        }`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-body" data-testid="toast-id">
          Card succesfully added.
        </div>
      </div>
    );
  }
}
