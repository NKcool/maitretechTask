import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data/Feeds.json'
import '../style/Menu.css'
import Hamburger from '../assets/burger.jpeg'
import Coke from '../assets/coke.jpeg'
import Fries from '../assets/fries.jpeg'
import Pepsi from '../assets/pepsi.jpeg'
import { useState } from 'react'



export default function Menu() {
  const [items, setItems] = useState(data);
  const [cartcount, setCartcount] = useState(0);
  const [isopen, setIsopen] = useState(false);
  const addHandler = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
    setCartcount(cartcount + 1)
  };
  const minusHandler = (id) => {
    setItems(items.map(item =>
      item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    ));
    if (cartcount > 0) {
      setCartcount(cartcount - 1)
    }
  };

  const getImage = (name) => {
    switch (name) {
      case 'Hamburger':
        return Hamburger;
      case 'Coke':
        return Coke;
      case 'Fries':
        return Fries;
      case 'Pepsi':
        return Pepsi;
      default:
        return 'Hamburger';
    }
  };
  const countHandler = () => {
    const test = <div onClick={() => cartItemHandler()} className="cartItem">
      {cartcount}
    </div>
    if (cartcount > 0) {
      return test;
    }
    else {
      return '';
    }
  };

  const cartItemHandler = () => {
    setIsopen(!isopen)
  }

  const checkoutItemHandler = (item) => {
    if (item.quantity > 0) {
      return (
        <div style={{position:'relative'}}>
          <p>{item.name}:<span style={{paddingLeft:'400px'}}>{item.quantity}</span>
          
          <button onClick={() => addHandler(item.id)} style={{ background: '#3f51b5', color: 'white' }}>+</button>
          <button onClick={() => minusHandler(item.id)}>-</button>
          </p>
          <div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className='menu'>
      <ol>
        {items.map((listItems) => {
          return (
            <li key={listItems.id}>
              <img src={getImage(listItems.name)} alt="" srcset="" />
              <div>
                <h4>{listItems.name}</h4>
                <p>Price = {listItems.price}</p>
                <p>cost : {listItems.price * listItems.quantity === 0 ? '' : listItems.price * listItems.quantity}</p>
                <p>Total :{listItems.quantity === 0 ? '' : listItems.quantity}</p>
                <div className="btnDiv">
                  <button onClick={() => addHandler(listItems.id)} style={{ background: '#3f51b5', color: 'white' }}>+</button>
                  <button onClick={() => minusHandler(listItems.id)}>-</button>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
      {countHandler()}
      {isopen ? <div className="checkOutDiv">

        <div className="checkOutCont">


          <h2>Order Summary</h2>
          {items.map((item) => {
            return (
              checkoutItemHandler(item)
            );
          })}
          <div className="check">

          </div>
          <div style={{display:'flex',justifyContent:'right',marginTop:'30px'}}>
          <button style={{ background: '#3f51b5', color: 'white',width:'210px',fontSize:'18px' }}><Link  style={{textDecoration:'none',color:"white"}}  to={'/checkout'}>
          save and checkout</Link></button>
          <button onClick={()=>cartItemHandler()} style={{fontSize:'16px',width:'100px'}}>cancel</button>
          </div>
        </div>

      </div> : ''}
    </div>
  )
}
