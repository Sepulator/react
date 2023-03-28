import { useState } from 'react';
import { FieldErrorsImpl, UseFormRegister, UseFormSetValue } from 'react-hook-form/dist/types';
import { IFormInputs } from '../form';

interface Props {
  register: UseFormRegister<IFormInputs>;
  errors: FieldErrorsImpl<IFormInputs>;
  setValue: UseFormSetValue<IFormInputs>;
  picture: boolean;
  showPicture: (show: boolean) => void;
}

export const FileInput = ({ register, errors, setValue, picture, showPicture }: Props) => {
  const [image, setImage] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && e.target.files[0].type.includes('image')) {
      const file = URL.createObjectURL(e.target.files[0]);
      setImage(file);
      setValue('file', e.target.files[0]);
      showPicture(true);
    }
  };

  return (
    <div
      className="card-header border-0 text-center p-3"
      style={{
        backgroundColor: 'hsl(210, 26%, 84%)',
      }}
    >
      {picture && image ? (
        <img
          className="d-block w-auto"
          style={{ height: '300px', margin: '0 auto' }}
          src={image}
          alt=""
        />
      ) : (
        <i className="fas fa-image fa-5x text-white d-block mb-4"></i>
      )}

      <label className="btn btn-white btn-rounded shadow-3 form-check " id="file">
        <i className="fas fa-plus me-2 "></i>Add a photo
        <input
          {...register('file', {
            validate: {
              nonEmpty: (file) => file instanceof File || 'Select image',
              checkType: (file) => (file && file.type.includes('image')) || 'Image file needed',
              lessThan1MB: (file) => file.size < 1000000 || 'Max file size 1MB',
            },
          })}
          type="file"
          name="file"
          className={`form-control d-none ${errors.file ? 'is-invalid' : ''}`}
          id="file"
          data-testid="file-input"
          accept=".png, .jpg, .jpeg"
          onChange={(e) => onChange(e)}
        />
        <div className="invalid-feedback mt-2">{errors.file?.message}</div>
      </label>
    </div>
  );
};
