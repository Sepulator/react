interface Props {
  text: React.RefObject<HTMLInputElement>;
  validate: boolean;
}

export const TextInput = ({ text, validate }: Props) => {
  return (
    <div className="md-form mb-2">
      <label className="form-label" htmlFor="name">
        Product title
      </label>
      <input
        ref={text}
        type="text"
        id="name"
        name="text"
        className={`form-control ${validate ? '' : 'is-invalid'}`}
        placeholder="Enter title of product"
      />
      <div className="invalid-feedback">
        Title contains from 3 to 12 character, latin letters or numbers .
      </div>
    </div>
  );
};
