import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content mt-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact: support@suncart.com</a>
        <a className="link link-hover">Privacy Policy</a>
      </nav> 
      <nav>
        <div className="grid grid-flow-col gap-4 text-2xl text-orange-500">
          <a href="#" className="hover:scale-110 transition-transform"><FaTwitter /></a>
          <a href="#" className="hover:scale-110 transition-transform"><FaFacebook /></a>
          <a href="#" className="hover:scale-110 transition-transform"><FaInstagram /></a>
        </div>
      </nav> 
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by SunCart Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;