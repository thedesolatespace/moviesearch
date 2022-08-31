import React, { Fragment, useState } from 'react';
import { Search } from './components/Input';
import { MoviesList } from './components/MoviesList';
import { useGetSearchResultPageQuery } from './store/services/MovieAPI';

function App() {
  const [search, setSearch] = useState('');

  const { data, isLoading } = useGetSearchResultPageQuery(search);

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  if (isLoading) {
    return <h1>loading</h1>;
  }
  if (data?.results) {
    return (
      <Fragment>
        <Search handleSearch={handleSearch} />
        {data.results.length > 0 ? (
          <MoviesList results={data.results} />
        ) : (
          <h1>Nothing found</h1>
        )}
      </Fragment>
    );
  } else {
    return <h1>lol</h1>;
  }
}

export default App;
