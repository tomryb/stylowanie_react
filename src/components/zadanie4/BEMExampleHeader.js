import React from 'react'
import './BEMExampleHeader.scss'

export default function BEMExampleHeader() {
  return (
    <div className="header">
      <div className="header__logo">Logo</div>
      <nav className="header__nav">
        <a href="/" className="header_navElement container">Home Page</a>
        <a href="/" className="header_navElement header_navElement--red container">Contact</a>
      </nav>
    </div>
  )
}
