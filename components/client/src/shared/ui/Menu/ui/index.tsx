import React from 'react';

import styles from './styles.module.sass';

type Props = {
  children: Array<React.ReactChild>;
};

const Menu = ({ children }: Props) => {
  return (
    <nav className={styles.menu}>
      <ol>
        <li className={styles['left-container']}>
          <div className={styles['left-container-logo']}>
            <div className={styles['left-container-logo-title']}>SNETWORK</div>
          </div>
        </li>
        <li className={styles['menu-item']}>
          <a href="#0">Home</a>
        </li>
        <li className={styles['menu-item']}>
          <a href="#0">About</a>
        </li>
        <li className={styles['menu-item']}>
          <a href="#0">Widgets</a>
          <ol className={styles['sub-menu']}>
            <li className={styles['menu-item']}>
              <a href="#0">Big Widgets</a>
            </li>
            <li className={styles['menu-item']}>
              <a href="#0">Bigger Widgets</a>
            </li>
            <li className={styles['menu-item']}>
              <a href="#0">Huge Widgets</a>
            </li>
          </ol>
        </li>
        <li className={styles['menu-item']}>
          <a href="#0">Contact</a>
        </li>
        <li className={styles['right-container']}>{children}</li>
      </ol>
    </nav>
  );
};

export default Menu;
