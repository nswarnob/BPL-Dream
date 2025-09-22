import React from 'react';
import dollar from '../../assets/dollar 1.png';
import logo from '../../assets/logo.png';

const Nav = () => {
    return (
        <div>
        <div class="navbar">
  <div class="flex-1">
   <img src={logo} alt="" />
  </div>
  <div class="flex items-center justify-around gap-10">
      <p class="text-xl"><a href="">Home</a></p>
      <p class="text-xl"><a href="">Fixture</a></p>
      <p class="text-xl"><a href="">Teams</a></p>
      <p class="text-xl"><a href="">Schedules</a></p>
   <button class="btn rounded-1xl">600000 Coin <img src={dollar} alt="" /></button>
  </div>
</div>
        </div>
    );
};

export default Nav;