import React from 'react';
import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setSearchValue,
}) {
    return (
      <div className='search-container'>
        <input 
          placeholder="Estudiar"
          className = 'TodoSearch'
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
        <span className="material-symbols-outlined search-icon">
          search
        </span>
      </div>
    );
};
export {TodoSearch};