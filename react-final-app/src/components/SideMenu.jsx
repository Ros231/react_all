import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineCodeBracket,
  HiOutlineChatBubbleOvalLeft
} from 'react-icons/hi2'
import { LuBookOpen } from 'react-icons/lu'
import { RiListSettingsLine } from 'react-icons/ri'

export default function SideMenu() {
  const menuItems = [
    { to: '/', icon: <HiOutlineHome />, label: 'Home' },
    { to: '/about', icon: <HiOutlineUser />, label: 'About Me' },
    { to: '/eduexp', icon: <LuBookOpen />, label: 'Education & Experience' },
    { to: '/spec', icon: <RiListSettingsLine />, label: 'Specializations' },
    { to: '/projects', icon: <HiOutlineBriefcase />, label: 'Projects' },
    { to: '/skills', icon: <HiOutlineCodeBracket />, label: 'Skills' },
    { to: '/contactme', icon: <HiOutlineChatBubbleOvalLeft />, label: 'Contact Me' },
  ]

  return (
    <nav className="sidemenu-container" aria-label="Sidebar Menu">
      <div className="sidemenu-capsule">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            title={item.label}
            className={({ isActive }) =>
              `sidemenu-link ${isActive ? 'active' : ''}`
            }
          >
            {item.icon}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
