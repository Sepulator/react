interface Props {
  showToast: boolean;
}

export const Toast = ({ showToast }: Props) => {
  return (
    <div
      className={`toast fade text-white text-center bg-info ${showToast ? 'show' : ''}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-body" data-testid="toast-id">
        Card succesfully added.
      </div>
    </div>
  );
};
