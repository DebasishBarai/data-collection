import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className={styles.ul}>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/settings'>Settings</Link>
          </li>
          <li>
            <Link href='/configure'>configure</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
