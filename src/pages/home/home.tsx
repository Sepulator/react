import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ChangeEvent, useState } from 'react';

import { Card } from '../../components/card/card';
import { Spinner } from '@/components/icons';
import { useFetch } from '@/hooks/useFetch';

const search = `/products/search?q=`;
const limit = 12;

export const Home = () => {
  const [text, setText] = useLocalStorage<string>('text', '');
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState<string>(
    `${search}${text}&limit=${limit}&skip=${page * limit}`
  );
  const { data, total, isPending, error } = useFetch(searchQuery);
  const items = data?.products.map((item) => <Card {...item} key={item.id} />);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setSearchQuery(`${search}${text}&limit=${limit}&skip=${page * limit}`);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark mt-3 mb-3 shadow p-2 bg-color">
        <form className="input-group w-auto py-1" onSubmit={onSubmit}>
          <div className="bg-light">
            <input
              type="search"
              className="form-control rounded-0"
              placeholder="Search"
              value={text}
              onInput={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" id="search-button">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </nav>
      {error && <div>{error}</div>}
      {isPending && (
        <div className="modal modal-additional">
          <Spinner className="modal-dialog modal-dialog-centered" />
        </div>
      )}

      <div className="text-center mb-2">
        <div className="row">
          {items?.length ? items : <h3 className="center-content">Nothing to display</h3>}
        </div>
      </div>
      {Boolean(items?.length) && (
        <nav aria-label="pagination" className="d-flex justify-content-center mt-2">
          <ul className="pagination">
            <li className="page-item ">
              <button className="page-link">Previous</button>
            </li>
            <li className="page-item ">
              <button className="page-link">1</button>
            </li>
            <li className="page-item active" aria-current="page">
              <button className="page-link">2</button>
            </li>
            <li className="page-item">
              <button className="page-link">3</button>
            </li>
            <li className="page-item">
              <button className="page-link">Next</button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
