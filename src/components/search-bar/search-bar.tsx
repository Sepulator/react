import { ChangeEvent, FormEvent } from 'react';

interface Props {
  text: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({ text, onSubmit, onInput }: Props) => {
  return (
    <form className="input-group w-auto py-1" onSubmit={onSubmit}>
      <div className="bg-light">
        <input
          type="search"
          className="form-control rounded-0"
          placeholder="Search"
          value={text}
          onInput={onInput}
        />
      </div>
      <button type="submit" className="btn btn-primary" id="search-button" data-testid="search-btn">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};
