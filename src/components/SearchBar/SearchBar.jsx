import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/reduxSlices';
import css from './SearchBar.module.css';

export default function SearchBar({ search_input }) {
  const dispatch = useDispatch();

  // отримала значеняя filter стану сховища
  const filter = useSelector(state => state.filter);

  const handleFilterChange = e => {
    const filterValue = e.target.value;
    //  відправила нове значення у сховище
    dispatch(setFilter(filterValue));
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleFilterChange}
        value={filter}
        className={css.search_input}
      />
    </div>
  );
}
