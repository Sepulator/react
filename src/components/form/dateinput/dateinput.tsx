interface Props {
  date: React.RefObject<HTMLInputElement>;
  validate: boolean;
}

export const DateInput = ({ date, validate }: Props) => {
  return (
    <div className="md-form mb-2 col-md">
      <label className="form-label" htmlFor="date">
        Choose date
      </label>
      <input
        ref={date}
        type="date"
        name="date"
        id="date"
        data-testid="date-input"
        className={`form-control  ${validate ? '' : 'is-invalid'}`}
      />
      <div className="invalid-feedback">Select manufacture date below current one.</div>
    </div>
  );
};
