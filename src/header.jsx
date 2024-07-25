 import React from 'react'
 import './assets/header.css'
 const Header = ({title}) => {
   return (
    <h1 
    className='header'
    >
      {title.toUpperCase()}
      
    </h1>
   )
 }
 
 export default Header