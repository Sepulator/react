import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form/dist/types';

import { IFormInputs } from '../form';

interface Props {
  register: UseFormRegister<IFormInputs>;
  errors: FieldErrorsImpl<IFormInputs>;
}

export const RadioInput = ({ register, errors }: Props) => {
  return (
    <>
      <label className="form-label">Select promo discount</label>
      <div>
        <div className="form-check form-check-inline">
          <input
            {...register('radio', { required: 'Choose desired discount.' })}
            type="radio"
            className={`form-check-input  ${errors.radio ? 'is-invalid' : ''}`}
            id="promo1"
            name="radio"
            value="5% promo"
            data-testid="radio-input"
          />
          <label className="form-check-label" htmlFor="promo1">
            5% promo
          </label>
          <div className="invalid-feedback">Choose desired discount.</div>
        </div>
        <div className="form-check form-check-inline">
          <input
            {...register('radio', { required: 'Choose desired discount.' })}
            type="radio"
            className={`form-check-input  ${errors.radio ? 'is-invalid' : ''}`}
            id="promo2"
            name="radio"
            value="10% promo"
            data-testid="radio-input"
          />
          <label className="form-check-label" htmlFor="promo2">
            10% promo
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            {...register('radio', { required: 'Choose desired discount.' })}
            type="radio"
            className={`form-check-input  ${errors.radio ? 'is-invalid' : ''}`}
            id="promo3"
            name="radio"
            value="15% promo"
            data-testid="radio-input"
          />
          <label className="form-check-label" htmlFor="promo3">
            15% promo
          </label>
        </div>
      </div>
    </>
  );
};
