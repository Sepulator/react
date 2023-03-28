import { Component } from 'react';

interface Props {
  showToast: boolean;
}

export class Toast extends Component<Props> {
  render() {
    return (
      <div
        className={`toast fade text-white text-center bg-info ${
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
