export interface ICheckboxList {
  exclusive: React.RefObject<HTMLInputElement>;
  arrival: React.RefObject<HTMLInputElement>;
  best: React.RefObject<HTMLInputElement>;
}

interface Props {
  checkbox: ICheckboxList;
  validate: boolean;
}

export const CheckboxInput = ({ checkbox, validate }: Props) => {
  return (
    <>
      <label className="form-label mt-2">Choose one or more options</label>
      <div className="">
        <div className="form-check form-check-inline">
          <input
            ref={checkbox.exclusive}
            className={`form-check-input  ${validate ? '' : 'is-invalid'}`}
            type="checkbox"
            value="Very exclusive"
            name="exclusive"
            id="exclusive"
          />
          <label className="form-check-label" htmlFor="exclusive">
            Very exclusive
          </label>
          <div className="invalid-feedback">Choose at least one checkbox.</div>
        </div>

        <div className="form-check form-check-inline">
          <input
            ref={checkbox.arrival}
            className={`form-check-input  ${validate ? '' : 'is-invalid'}`}
            type="checkbox"
            value="New arrival"
            name="arrival"
            id="arrival"
          />
          <label className="form-check-label" htmlFor="arrival">
            New arrival
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            ref={checkbox.best}
            className={`form-check-input  ${validate ? '' : 'is-invalid'}`}
            type="checkbox"
            value="Best Seller"
            name="best"
            id="best"
          />
          <label className="form-check-label" htmlFor="best">
            Best Seller
          </label>
        </div>
      </div>
    </>
  );
};
