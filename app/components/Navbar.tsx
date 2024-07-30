import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md w-full">
      <div className="text-2xl font-bold text-yellow-500">FoodHouse</div>
      <ul className="flex space-x-6 text-lg">
        <li><a href="#" className="hover:text-yellow-500">Home</a></li>
        <li><a href="#" className="hover:text-yellow-500">Restaurant</a></li>
        <li><a href="#" className="hover:text-yellow-500">Services</a></li>
        <li><a href="#" className="hover:text-yellow-500">Cart</a></li>
        <li><a href="#" className="hover:text-yellow-500">Sign In</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
