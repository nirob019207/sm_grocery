import React, { useState } from 'react';
import { FaHeart, FaShoppingCart, FaBars } from 'react-icons/fa'; // Importing cart, wishlist, and hamburger icons
import { Link } from 'react-router-dom';
import Login from '../../pages/auth/Login'
import Register from '../../pages/auth/Register';
import logo from '../../assets/Logo.png'



export const Topbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(true); // State to toggle between Login and Register

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const switchToRegister = () => setIsLoginModal(false); // Switch to Register modal
  const switchToLogin = () => setIsLoginModal(true); // Switch to Login modal

  return (
    <div className='bg-center'>
      <div className='container'>
        <nav className="flex justify-between items-center py-5">
          {/* Logo */}
          <div className="flex gap-2 items-center ">
            <img src={logo} alt="Logo" />

            {/* Logo */}
            <h3 className="text-2xl font-bold text-dark-bh">Fresh Fruit</h3>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden flex gap-3 items-center" onClick={toggleMenu}>
            <ul>


              <li className="relative flex items-center gap-3">
                {/* Cart Icon */}
                <div className="relative flex items-center">
                  <span className="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                  <FaShoppingCart className="text-xl text-yellow-500" />
                </div>
              </li>
            </ul>
            <FaBars className="text-2xl text-black cursor-pointer" />

          </div>

          <div className='hidden lg:block'>
            <ul className={`flex gap-6 text-lg `}>
              <li className="relative group">
                <Link to="/" className="relative group">
                  Home
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 border-b-2 -mb-2 border-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </Link>
              </li>
              <li className="relative group">
                <Link to="/" className="relative group">
                  Shop
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 border-b-2 -mb-2 border-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </Link>
              </li>
              <li className="relative group">
                <Link to="/" className="relative group">
                  About Us
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 border-b-2 -mb-2 border-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </Link>
              </li>
              <li className="relative group">
                <Link to="/" className="relative group">
                  Blog
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 border-b-2 -mb-2 border-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div className='hidden lg:block'>
            <ul className='flex gap-6 items-center'>
              <li className="relative flex items-center gap-3 ">
                {/* Wishlist Icon */}
                <div>
                  <div className="relative flex items-center">
                    <span className="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                    <FaHeart className="text-2xl text-black" />
                  </div>
                </div>
                <span className="text-lg hover:text-green-500">Favorite</span>
              </li>

              <li className="relative flex items-center gap-3">
                {/* Cart Icon */}
                <div className="relative flex items-center">
                  <span className="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                  <FaShoppingCart className="text-xl text-yellow-500" />
                </div>
                <span className="text-lg hover:text-green-500">Cart</span>
              </li>

              <li>
                <button
                  onClick={toggleModal}
                  className="text-lg text-black px-3 py-[5px] border-[2px]"
                >
                  Sign In
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden p-4">
            <ul className="flex flex-col gap-4 text-lg">
              <li><a href="" className="text-black">Home</a></li>
              <li><a href="" className="text-black">Shop</a></li>
              <li><a href="" className="text-black">About Us</a></li>
              <li><a href="" className="text-black">Blog</a></li>
              <li
               
                  onClick={toggleModal}
          
                >
                  Sign In
             
              </li>
            </ul>
          </div>
        )}
        {/* Login Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            {isLoginModal ? (
              <Login toggleModal={toggleModal} switchToRegister={switchToRegister} />
            ) : (
              <Register toggleModal={toggleModal} switchToLogin={switchToLogin} />
            )}
          </div>
        )}



      </div>
    </div>
  );
};
