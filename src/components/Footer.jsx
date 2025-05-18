import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { CgMail } from 'react-icons/cg';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { LiaAddressBookSolid } from 'react-icons/lia';


const Footer = () => {
  return (
    <footer className=" bg-footer-img   text-white py-8 ">
      <div className="w-11/12 mx-auto flex flex-col md:flex-col lg:flex-row justify-between gap-9 px-6 py-20">
        {/* Left Section - Website Name and Contact Info */}
        <div className="text-center md:text-left lg:w-2/6 ">
        <NavLink to="/" className="text-2xl md:text-3xl font-bold flex items-center">
          <span className="text-[#9B5DE5] font-[Bebas_Neue] tracking-wider">Movie</span>
          <span className="text-[#00A8E8] font-[Pacifico]"> Mania</span>
        </NavLink>
          <p className="mt-2 text-sm text-gray-300 text-start ">
          Movie Mania is your go-to platform for discovering, exploring, and managing movies. Whether you are looking for the latest blockbusters, classic films, or hidden gems, our portal brings you all the information you need with ease and style.
          </p>
         
        </div>

        {/* Middle Section - Useful Links */}
        <div className="mt-6 md:mt-0 ">
          <h3 className="text-lg font-semibold text-[#9B5DE5]">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-[#00A8E8]">Home</Link>
            </li>
            <li>
              <Link to="/movies" className="hover:text-[#00A8E8]">All Movies</Link>
            </li>
            <li>
              <Link to="/tv-shows" className="hover:text-[#00A8E8]">Tv Shows
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-[#00A8E8]">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        {/* address */}
        <div className="footer-contact ">
        <h3 className="text-lg font-semibold text-[#9B5DE5] mb-4">Contact Us</h3>
  <div className="contact-item flex items-center gap-2">
  <MdOutlineLocalPhone className='text-[#9B5DE5] text-2xl' /> <p className='text-gray-300 text-sm'>+123 456 7890 </p>
  </div>
  <div className="contact-item flex items-center gap-2">
  <CgMail className='text-[#9B5DE5] text-2xl' /> <p className='text-gray-300 text-sm'>support@movieportal.com</p>
  </div>
  <div className="contact-item flex items-center gap-2">
  <LiaAddressBookSolid className='text-[#9B5DE5] text-2xl'/><p className='text-gray-300 text-sm'>123 Movie St., Film City, XYZ</p>
  </div>
</div>

        {/* Right Section - Social Media Links */}
        <div className="mt-6 md:mt-0 ">
          <h3 className="text-lg font-semibold text-[#9B5DE5]">Follow Us</h3>
          <div className="mt-4 flex space-x-4">
            <a href="https://www.facebook.com/mahin.otakulimited" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl text-[#00A8E8] hover:text-[#9B5DE5]" />
            </a>
            <a href="https://www.youtube.com/@animeguybd954" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-2xl text-[#00A8E8] hover:text-[#9B5DE5]" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-[#00A8E8] hover:text-[#9B5DE5]" />
            </a>
            <a href="https://www.linkedin.com/in/md-mojadded-al-mahin-782906326/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-[#00A8E8] hover:text-[#9B5DE5]" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="text-center mt-8">
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Your Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
