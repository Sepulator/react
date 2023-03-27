import { useState } from 'react';

interface Props {
  file: React.RefObject<HTMLInputElement>;
  validate: boolean;
}

export const FileInput = ({ file, validate }: Props) => {
  const [path, setPath] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && e.target.files[0].type.includes('image')) {
      const file = URL.createObjectURL(e.target.files[0]);
      setPath(file);
    }
  };

  const isImage = file.current?.value && file.current?.files![0].type.includes('image');
  return (
    <div
      className="card-header border-0 text-center p-5"
      style={{
        backgroundColor: 'hsl(210, 26%, 84%)',
      }}
    >
      {isImage ? (
        <img
          className="d-block w-auto"
          style={{ height: '300px', margin: '0 auto' }}
          src={path}
          alt=""
        />
      ) : (
        <i className="fas fa-image fa-5x text-white d-block mb-4"></i>
      )}

      <label className="btn btn-white btn-rounded shadow-3 form-check " id="file">
        <i className="fas fa-plus me-2 "></i>Add a photo
        <input
          ref={file}
          type="file"
          name="file"
          className={`form-control d-none ${validate ? '' : 'is-invalid'}`}
          id="file"
          data-testid="file-input"
          accept=".png, .jpg, .jpeg"
          onChange={(e) => onChange(e)}
        />
        <div className="invalid-feedback mt-2">Image file needed.</div>
      </label>
    </div>
  );
};
