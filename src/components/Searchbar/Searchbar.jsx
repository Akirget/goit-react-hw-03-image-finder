import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';
// import { toast } from 'react-toastify'

class Searchbar extends React.Component {
  state = {};
  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm}>
          <input
            className={styles.searchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            // value={}
            // onInput={}
          />
          <button className={styles.searchFormButton} type="submit">
            <img
              className={styles.icon}
              src="https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-search-vector-icon-png-image_1824209.jpg"
              width="40"
              alt="icon"
            />
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;
