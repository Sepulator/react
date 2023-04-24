import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form/dist/types';

import { IFormInputs } from '../form';

interface Props {
  register: UseFormRegister<IFormInputs>;
  errors: FieldErrorsImpl<IFormInputs>;
}

export const CheckboxInput = ({ register, errors }: Props) => {
  return (
    <>
      <label className="form-label mt-2">Choose one or more options</label>
      <div className="">
        <div className="form-check form-check-inline">
          <input
            {...register('checkbox', { required: 'Please select promotions' })}
            className={`form-check-input  ${errors.checkbox ? 'is-invalid' : ''}`}
            type="checkbox"
            value="Very exclusive"
            id="exclusive"
            data-testid="checkbox-input"
          />
          <label className="form-check-label" htmlFor="exclusive">
            Very exclusive
          </label>
          <div className="invalid-feedback">{errors.checkbox?.message}</div>
        </div>

        <div className="form-check form-check-inline">
          <input
            {...register('checkbox', { required: 'Please select promotions' })}
            className={`form-check-input  ${errors.checkbox ? 'is-invalid' : ''}`}
            type="checkbox"
            value="New arrival"
            id="arrival"
            data-testid="checkbox-input"
          />
          <label className="form-check-label" htmlFor="arrival">
            New arrival
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            {...register('checkbox', { required: 'Please select promotions' })}
            className={`form-check-input  ${errors.checkbox ? 'is-invalid' : ''}`}
            type="checkbox"
            value="Best Seller"
            id="best"
            data-testid="checkbox-input"
          />
          <label className="form-check-label" htmlFor="best">
            Best Seller
          </label>
        </div>
      </div>
    </>
  );
};
