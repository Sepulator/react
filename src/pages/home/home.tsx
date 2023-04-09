import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ChangeEvent, FormEvent, useState } from 'react';

import { Card } from '@/components/card/card';
import { Spinner } from '@/components/icons';
import { useFetch } from '@/hooks/useFetch';
import { Product } from '@/types/data';
import { CardExpanded } from '@/components/card-expanded/card-expanded';

const search = `/products/search?q=`;
const limit = 24;
const skip = 0;

export const Home = () => {
  const [text, setText] = useLocalStorage('text', '');
  const [showModal, setShowModal] = useState(false);
  const [isClicked, setIsClicked] = useState(1);
  const [searchQuery, setSearchQuery] = useState(`/products/?limit=${limit}&skip=${skip}`);
  const { data, isPending, error } = useFetch(searchQuery);
  const {
    data: product,
    isPending: isPendingCard,
    error: errorCard,
  } = useFetch(`/products/${isClicked}`);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(`${search}${text}&limit=${limit}&skip=${skip}`);
  };

  const handleOpen = (id: number) => {
    if (id) {
      setIsClicked(id);
      setShowModal(true);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const items = data?.products.map((item) => (
    <Card data={item} key={item.id} handleOpen={handleOpen} />
  ));

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
        <div className="row">{items}</div>
      </div>

      {!isPending && !Boolean(items?.length) && (
        <h3 className="center-content">Nothing to display</h3>
      )}

      {showModal && isClicked && (
        <CardExpanded
          data={product as unknown as Product | null}
          isPending={isPendingCard}
          error={errorCard}
          handleClose={handleClose}
        />
      )}
    </>
  );
};
