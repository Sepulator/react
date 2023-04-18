import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form/dist/types';
import { IFormInputs } from '../form';

interface Props {
  register: UseFormRegister<IFormInputs>;
  errors: FieldErrorsImpl<IFormInputs>;
}
export const selectOptions = ['Perfume', 'Skincare', 'Groceries', 'Home Decoration'];

export const SelectInput = ({ register, errors }: Props) => {
  const items = selectOptions.map((el, index) => (
    <option value={el} key={index}>
      {el}
    </option>
  ));
  return (
    <div className="col-md">
      <label htmlFor="select" className="form-label">
        Category
      </label>
      <select
        {...register('select', {
          required: 'Select one of available category',
          validate: {
            select: (value) => selectOptions.includes(value) || 'Select one of available category',
          },
        })}
        name="select"
        className={`form-select mb-3  ${errors.select ? 'is-invalid' : ''}`}
        defaultValue="default"
        data-testid="select-input"
      >
        <option hidden value="default">
          Select one...
        </option>
        {items}
      </select>
      <div className="invalid-feedback" style={{ position: 'relative' }}>
        {errors.select?.message}
      </div>
    </div>
  );
};
