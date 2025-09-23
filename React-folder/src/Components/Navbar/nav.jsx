import React from 'react';
import dollar from '../../assets/dollar 1.png';
import logo from '../../assets/logo.png';

const Nav = ({availibleBalance}) => {
    return (
        <div className='mx-w[1280px] mx-auto my-0'>
        <div class="navbar">
  <div class="flex-1">
   <img src={logo} alt="" />
  </div>
  <div className="flex items-center justify-around gap-10 font-medium">
      <p class="text-xl"><a href="">Home</a></p>
      <p class="text-xl"><a href="">Fixture</a></p>
      <p class="text-xl"><a href="">Teams</a></p>
      <p class="text-xl"><a href="">Schedules</a></p>
   <button class="btn rounded-1xl">{availibleBalance} <span><img src={dollar} alt="" /></span></button>
  </div>
</div>
        </div>
    );
};

export default Nav;