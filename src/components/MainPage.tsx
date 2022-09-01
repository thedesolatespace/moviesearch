import React, { useDeferredValue, useState } from 'react';
import { useGetSearchResultPageQuery } from '../store/services/MovieAPI';
import { Search } from './Input';
import { StyledMainPage } from './MainPage.styles';
import { MoviesList } from './MoviesList';

export const MainPage = () => {
  const [search, setSearch] = useState('');

  const debounce = useDeferredValue(search);

  const { data, isLoading } = useGetSearchResultPageQuery(debounce);

  if (isLoading) {
    return (
      <StyledMainPage>
        <p>loading...</p>
      </StyledMainPage>
    );
  }

  return (
    <StyledMainPage>
      <Search setSearch={setSearch} />
      <MoviesList results={data?.results} />
    </StyledMainPage>
  );
};
