import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { Card } from '@/components/card/card';
import { Spinner } from '@/components/icons';
import { Product } from '@/types/data';
import { CardExpanded } from '@/components/card-expanded/card-expanded';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSearchText, fetchProducts } from '@/store/producstSlice';
import { SearchBar } from '@/components/search-bar/search-bar';

export const Home = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const text = useAppSelector((state) => state.products.searchText);
  const apiState = useAppSelector((state) => state.products.apiState);

  const [showModal, setShowModal] = useState(false);
  const [isClicked, setIsClicked] = useState<Product | null>(null);

  useEffect(() => {
    if (products.length && text) {
      localStorage.setItem('search-text', text);
      return;
    }
    const promise = dispatch(fetchProducts(''));
    return () => {
      promise.abort();
      localStorage.setItem('search-text', text);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchProducts(text));
  };

  const handleOpen = (id: number) => {
    if (id) {
      const findId = products.find((el) => el.id === id);
      if (findId) {
        setIsClicked(findId);
        setShowModal(true);
      }
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const items = Object.values(products).map((item) => (
    <Card data={item} key={item.id} handleOpen={handleOpen} />
  ));

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark mt-3 mb-3 shadow p-2 bg-color">
        <SearchBar
          text={text}
          onSubmit={onSubmit}
          onInput={(e: ChangeEvent<HTMLInputElement>) => dispatch(setSearchText(e.target.value))}
        />
      </nav>

      {apiState === 'LOADING' && (
        <div className="modal modal-additional">
          <Spinner className="modal-dialog modal-dialog-centered" />
        </div>
      )}

      <div className="text-center mb-2">
        <div className="row">{items}</div>
      </div>

      {apiState === 'READY' && !Boolean(items?.length) && (
        <h3 className="center-content">{'Nothing to display'}</h3>
      )}

      {showModal && isClicked && (
        <CardExpanded
          data={isClicked}
          handleClose={handleClose}
          isPending={false}
          error={'false'}
        />
      )}
    </>
  );
};
