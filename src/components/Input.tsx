import { Input } from '@mui/material';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

export const Search = ({
  setSearch,
}: {
  setSearch: Dispatch<SetStateAction<string>>;
}) => {
  const [value, setValue] = useState('');

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <Input
      sx={{ marginBottom: '20px', minWidth: '200px' }}
      value={value}
      onChange={inputHandler}
      placeholder="Search by title..."
    />
  );
};
