import { Input } from '@mui/material';
import { ChangeEvent } from 'react';

export const Search = ({
  handleSearch,
}: {
  handleSearch: (value: string) => void;
}) => {
  const InputHandler = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    handleSearch(e.target.value);
  };

  return (
    <Input onChange={(e) => InputHandler(e)} placeholder="Search by title..." />
  );
};
