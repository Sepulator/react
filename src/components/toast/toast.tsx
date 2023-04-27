export const Toast = () => {
  return (
    <div
      className="toast fade text-white text-center bg-info show"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-testid="toast-form"
    >
      <div className="toast-body" data-testid="toast-id">
        Card succesfully added.
      </div>
    </div>
  );
};
