import React from 'react'
import profileImg from '../assets/profile.jpg'
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaGoogle } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function MyCard({
  name = 'Phanuwat',
  stuId = '6XXXXXXXXX',
  role = 'Fullstack Web Developer'
}) {
  return (
    <div className="mycard-container">
      {/* Name at top left with first letter in orange */}
      <div className="mycard-header">
        <span className="text-orange">{name.charAt(0)}</span>
        <span>{name.slice(1)}</span>
      </div>

      {/* User profile image */}
      <div className="mycard-avatar-wrapper">
        <img
          src={profileImg}
          alt={name}
          className="mycard-avatar-img"
        />
      </div>

      {/* Student ID & Role */}
      <div className="mycard-info">
        <div className="mycard-stuid">STU ID: {stuId}</div>
        <div className="mycard-role">{role}</div>
      </div>

      {/* Social Media Links */}
      <div className="mycard-socials">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="X">
          <FaXTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href="mailto:phanuwat.goon@gmail.com" className="social-icon" aria-label="Google">
          <FaGoogle />
        </a>
      </div>

      {/* HIRE ME Button */}
      <Link to="/contactme" className="mycard-btn-hire">
        HIRE ME !
      </Link>
    </div>
  )
}
