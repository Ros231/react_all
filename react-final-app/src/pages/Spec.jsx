import React from 'react'
import MyCard from '../components/MyCard'
import SideMenu from '../components/SideMenu'
import { FiCode } from 'react-icons/fi'
import { TbWorld } from 'react-icons/tb'
import { FaPenNib } from 'react-icons/fa6'

export default function Spec() {
  const specs = [
    {
      title: 'Front end-developer',
      icon: <FiCode />,
      desc: 'Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.',
    },
    {
      title: 'UI/UX Designer',
      icon: <TbWorld />,
      desc: 'UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.',
    },
    {
      title: 'Graphic designer',
      icon: <FaPenNib />,
      desc: 'As a graphic designer, I transform ideas into visually striking and impactful designs.',
    },
  ]

  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-card">
        <MyCard />

        <main className="portfolio-content spec-content">
          <h2 className="page-title">
            My <span className="text-orange">Specializations</span>
          </h2>

          <div className="spec-cards">
            {specs.map((item, index) => (
              <div className="spec-card" key={index}>
                <div className="spec-card-header">
                  <h3 className="spec-card-title">{item.title}</h3>
                  <span className="spec-card-icon">{item.icon}</span>
                </div>
                <p className="spec-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </main>

        <SideMenu />
      </div>
    </div>
  )
}
