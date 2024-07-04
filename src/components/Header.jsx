import React from 'react'
import '../style/Header.css'
import logo from '../assets/restaurant_24px.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
        <div className='logoDiv'>
        <img src={logo} className='logo' alt="" srcset="" />
        <h1><Link to={'/'} style={{textDecoration:'none',color:"white"}}>Foods's Restaurant</Link></h1>
        </div>
        <img className='cart' src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="" srcset="" />
    </div>
  )
}
