import React from 'react';
import {
  FaGooglePlay,
  FaApple,
  FaCcPaypal,
  FaCcVisa,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCcApplePay ,FaFacebookF, FaTwitter, FaInstagram
} from 'react-icons/fa'; // Icons for Google Play, Apple, Contacts, and Payment methods

export const Footer = () => {
  return (
    <footer className="bg-slate-200 text-gray-900 py-10 border-t-2 border-black">
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {/* Logo Section */}
        <div>
          <h2 className="text-2xl font-bold">Fresh Harvest</h2>
        </div>

        {/* Quick Links 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links 1</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-green-400">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">Shop</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-400">About</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-400">Blog</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-400">Daily Blog</a>
            </li>
          </ul>
        </div>

        {/* Quick Links 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links 2</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-green-400">Favorites</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">Cart</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-400">Login</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-400">Register</a>
            </li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacts</h3>
          <ul>
            <li className="flex items-center mb-2">
              <FaPhone className="mr-3 text-green-500" />
              <span>+1 (123) 456-7890</span>
            </li>
            <li className="flex items-center mb-2">
              <FaEnvelope className="mr-3 text-green-500" />
              <span>info@freshharvest.com</span>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-3 text-green-500" />
              <span>123 Fresh Street, Healthy City, USA</span>
            </li>
          </ul>
          <div className='mt-5'>
          <h3 className="text-lg font-semibold mb-4">We Accept</h3>
          <div className="flex gap-2 items-center text-3xl">
            <div className='bg-white px-4 rounded-lg py-2 shadow-sm'>
            <FaCcPaypal className="" />

            </div>
            <div className='bg-white px-3 rounded-lg py-2 shadow-sm'>
            <FaCcVisa className="" />

            </div>
            <div className='bg-white px-3 rounded-lg py-2 shadow-sm'>
            <FaCcApplePay className="" />

            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Additional Section: Download and Payment Methods */}
      <div className="container mx-auto mt-10 flex flex-wrap justify-between items-center">
        <div className="mb-6 lg:mb-0">
          <p className="text-lg font-semibold">Download App</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="flex items-center bg-black text-white shadow-md p-2 rounded-md hover:shadow-lg transition">
              <FaGooglePlay className="mr-2 text-white" />
              <div>
                <p className="text-xs">GET IT ON</p>
                <p className="font-bold">Google Play</p>
              </div>
            </a>
            <a href="#" className="flex items-center bg-black text-white shadow-md p-2 rounded-md hover:shadow-lg transition">
              <FaApple className="mr-2 text-white" />
              <div>
                <p className="text-xs">Download on the</p>
                <p className="font-bold">App Store</p>
              </div>
            </a>
          </div>
        </div>
        
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 container flex justify-between border-t-[0.5px] py-3 border-black">
        <div>
        &copy; 2024 Fresh Harvest. All Rights Reserved.

        </div>
        <div>
        <div className="flex justify-center gap-6 ">
          <a href="#" className=" rounded-full p-2 bg-dark-bg text-white">
            <FaFacebookF />
          </a>
          <a href="#" className=" rounded-full p-2 bg-dark-bg text-white">
            <FaTwitter />
          </a>
          <a href="#" className=" rounded-full p-2 bg-dark-bg text-white">
            <FaInstagram />
          </a>
        </div>

        </div>
      </div>
    </footer>
  );
};
