import React, { useState } from "react";
import { FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
import Hero from "../../components/hero/Hero";
import { Link } from "react-router-dom";
import hero from "../../assets/hero.jpg";
import logo1 from "../../assets/Logo.png";
import Login from  '../../pages/auth/Login'
import Register from "../../pages/auth/Register";



export const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(true); // State to toggle between Login and Register

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const switchToRegister = () => setIsLoginModal(false); // Switch to Register modal
  const switchToLogin = () => setIsLoginModal(true); // Switch to Login modal
 


  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen font-primary"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="container">
        <nav className="flex justify-between items-center py-5">
       <div className="flex gap-2 items-center ">
       <img src={logo1} alt="Logo" />

{/* Logo */}
<h3 className="text-2xl font-bold text-dark-bh">Fresh Fruit</h3>
       </div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden flex gap-3 items-center" >
          <div className="relative flex items-center gap-3 ">
                {/* Cart Icon */}
                <div className="relative flex items-center">
                  <span className="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                  <FaShoppingCart className="text-xl text-white" />
                </div>
              </div>             <FaBars onClick={toggleMenu} className="text-2xl text-black cursor-pointer" />
          </div>

          <div className='hidden lg:block'>
          <ul className={`flex gap-6 text-lg font-[500]`}>
            <li className="relative group">
              <Link to="/" className="relative group">
                Home
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 border-b-2 -mb-2 border-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            </li>
            <li className="relative group">
              <a href="#shop" className="relative group">
                Shop
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 border-b-2 -mb-2 border-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </a>
            </li>
            <li className="relative group">
              <a href="#about" className="relative group">
                About Us
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 border-b-2 -mb-2 border-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </a>
            </li>
            <li className="relative group">
              <a href="#blog" className="relative group">
                Blog
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 border-b-2 -mb-2 border-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </a>
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
                    <FaHeart className="text-2xl text-white" />
                  </div>
                </div>
                <span className="text-lg text-white">Favorite</span>
              </li>

              <li className="relative flex items-center gap-3">
                {/* Cart Icon */}
                <div className="relative flex items-center">
                  <span className="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
                  <FaShoppingCart className="text-xl text-white" />
                </div>
                <span className="text-lg text-white">Cart</span>
              </li>

              <li>
                <button
                  onClick={toggleModal}
                  className="text-lg text-white px-3 py-[5px] border-[2px]"
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
              <li><a href="">Home</a></li>
              <li><a href="">Shop</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Blog</a></li>
              <li
               
               onClick={toggleModal}
       
             >
               Sign In
          
           </li>
            </ul>
          </div>
        )}

{isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            {isLoginModal ? (
              <Login toggleModal={toggleModal} switchToRegister={switchToRegister} />
            ) : (
              <Register toggleModal={toggleModal} switchToLogin={switchToLogin} />
            )}
          </div>
        )}

        {/* Hero Section */}
        <div>
          <Hero />
        </div>
      </div>
    </div>
  );
};
