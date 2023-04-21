import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { Card } from '@/components/card/card';
import { Spinner } from '@/components/icons';
import { CardExpanded } from '@/components/card-expanded/card-expanded';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSearchText } from '@/store/producstSlice';
import { SearchBar } from '@/components/search-bar/search-bar';
import { useGetAllProductsQuery, useGetProductQuery } from '@/store/api';

export const Home = () => {
  const [id, setId] = useState(1);
  const [queryText, setQueryText] = useState('');
  const text = useAppSelector((state) => state.products.searchText);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useAppDispatch();
  const {
    data: productsApi,
    error: errorProducts,
    isFetching: isFetchingProducts,
  } = useGetAllProductsQuery(queryText);
  const { data, isFetching } = useGetProductQuery(id);

  useEffect(() => {
    if (!text) return;
    setQueryText(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQueryText(text);
  };

  const handleOpen = (id: number) => {
    if (id) {
      setId(id);
      setShowModal(true);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const isCard = target.closest('.modal-content');
    if (!isCard) setShowModal(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark mt-3 mb-3 shadow p-2 bg-color">
        <SearchBar
          text={text}
          onSubmit={onSubmit}
          onInput={(e: ChangeEvent<HTMLInputElement>) => dispatch(setSearchText(e.target.value))}
        />
      </nav>

      {isFetchingProducts && (
        <div className="modal modal-additional">
          <Spinner className="modal-dialog modal-dialog-centered" />
        </div>
      )}

      <div className="text-center mb-2">
        <div className="row">
          {productsApi &&
            productsApi.products.map((item) => (
              <Card key={item.id} data={item} handleOpen={handleOpen} />
            ))}
        </div>
      </div>

      {!isFetchingProducts && productsApi && !Boolean(productsApi.products?.length) && (
        <h3 className="center-content">{'Nothing to display'}</h3>
      )}

      {errorProducts && <h3 className="center-content">{`${errorProducts}`}</h3>}

      {showModal && (
        <CardExpanded
          data={data}
          handleClose={handleClose}
          handleModal={handleModal}
          isPending={isFetching}
        />
      )}
    </>
  );
};
