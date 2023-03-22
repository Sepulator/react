import { ICheckboxList } from '@/components/form/checkboxinput/checkboxinput';
import { IFormInputs } from '@/components/form/form';
import { IRadioList } from '@/components/form/radioinput/radioinput';
import { selectOptions } from '@/components/form/selectinput/selectinut';

export const validateFile = (file: React.RefObject<HTMLInputElement>) => {
  const { current } = file;
  if (current === null) return false;
  const { files } = current;
  if (files && files[0] && files[0].type.split('/')[0] === 'image') return true;
  return false;
};

export const validateText = (text: React.RefObject<HTMLInputElement>) => {
  const regexp = /^[a-zA-Z0-9-_.]{3,12}$/;
  const { current } = text;
  if (current === null) return false;
  const { value } = current;
  if (regexp.test(value)) return true;
  return false;
};

export const validateDate = (date: React.RefObject<HTMLInputElement>) => {
  const { current } = date;
  if (current === null) return false;
  const { value } = current;
  if (value === null) return false;
  if (Date.parse(value) <= Date.now()) return true;
  return false;
};

export const validateSelect = (select: React.RefObject<HTMLSelectElement>) => {
  const { current } = select;
  if (current === null) return false;
  const { value } = current;
  if (value === null) return false;
  if (selectOptions.includes(value)) return true;
  return false;
};

export const validateRadio = (radio: IRadioList) => {
  const checked = Object.values(radio).some((el) => el.current.checked === true);
  if (checked) return true;
  return false;
};

export const validateCheckbox = (radio: ICheckboxList) => {
  const checked = Object.values(radio).some((el) => el.current.checked === true);
  if (checked) return true;
  return false;
};

export const validateForm = (form: IFormInputs) => {
  const result = [
    validateFile(form.file),
    validateText(form.text),
    validateDate(form.date),
    validateSelect(form.select),
    validateRadio(form.radio),
    validateCheckbox(form.checkbox),
  ];
  return result.every((el) => el === true);
};
