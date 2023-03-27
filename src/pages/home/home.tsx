import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ChangeEvent } from 'react';

import { Card } from '../../components/card/card';
import products from '../../data/products.json';

export const Home = () => {
  const [text, setText] = useLocalStorage<string>('text', '');

  const items = products.map((item) => <Card {...item} key={item.id} />);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark mt-3 mb-3 shadow p-2 bg-color">
        <div className="input-group w-auto py-1">
          <div className="bg-light">
            <input
              type="search"
              className="form-control rounded-0"
              placeholder="Search"
              value={text}
              onInput={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
            />
          </div>
          <button id="search-button" type="button" className="btn btn-primary">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </nav>
      <div className="text-center mb-2">
        <div className="row">{items}</div>
      </div>
    </>
  );
};
