import React from 'react'
import styles from './header.module.scss'

export default function BEMExampleHeader() {
  return (
    <div className={styles.header}>
      <div className={styles['header__logo']}>zadanie4 Logo</div>
      <nav className={styles['header__nav']}>
        <a href="/" className={styles['header__navElement']}>Home Page</a>
        <a href="/" className={`${styles['header__navElement']} ${styles['header__navElement--red']}`}>Contact</a>
      </nav>
    </div>
  )
}
