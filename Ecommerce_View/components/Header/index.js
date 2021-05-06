import React from 'react';
import styles from './Header.module.scss';
const Header = () => {
  return (
    <div className={styles.headLineWrapper}>
      <div className={'nava'}>
        <a href="#home">Home</a>
        <a className={'new'} href="#news">
          News
        </a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Header;
