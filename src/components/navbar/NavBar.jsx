import React, { useState } from 'react'
import './navBar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'

const NavBar = () => {

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wgpt3">What is GPT3?</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
  </>
); 
  
const [toggle, setToggle] = useState(false);1

  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu/>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
    <div className="gpt3__navbar-menu">
      {toggle 
      ? <RiCloseLine size={27} color='#fff' onClick={() => {setToggle(false)}} className='tooggle'/>
      :<RiMenu3Line size={27} color='#fff' onClick={() => {setToggle(true)}} className='tooggle'/>
     }
     {toggle && (
      <div className="gpt3__navbar-menu_container scale-up-center">
        <div className="gpt3__navbar-menu_container-links">
          <Menu/>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type='button'>Sign up</button>
          </div>
        </div>
      </div> 
     )}
    </div>
    </div>
  )
}

export default NavBar