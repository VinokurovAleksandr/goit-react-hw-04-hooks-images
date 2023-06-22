
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

import style from './Searchbar.module.css';



export function Searchbar({onSubmit}) {
  const [SearchQuery, setSearchQuery] = useState('');

  const handleQueryChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase())
  
  };

  const handleSubmit = e => {
    e.preventDefault();
   
    if (SearchQuery.trim() === '') {
      return toast.error('Query is not correct', {
      });
      
    }

    onSubmit(SearchQuery)
    setSearchQuery('')
    
  };

  
  return (
    <header
    className={style.Searchbar}>
    <form
      onSubmit={handleSubmit}
      className={style.SearchForm}>
      <button
        type="submit"
        className={style.button}>
        <ImSearch />
        <span
        className={style.button_label}>Search</span>
    </button>

    <input
      className={style.input}
      type="text"
      autoComplete="off"
      autoFocus
        placeholder="Search images and photos"
        onChange={handleQueryChange}
        // value={SearchQuery}
    />
    </form>
  </header> 
  )
};


