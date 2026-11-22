import React from 'react'
import MyCard from '../components/MyCard'
import SideMenu from '../components/SideMenu'
import { FaReact, FaFigma, FaHtml5, FaGithub } from 'react-icons/fa6'
import { SiNextdotjs } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io5'

export default function Skill() {
  const skills = [
    {
      name: 'React',
      percent: '60 %',
      icon: <FaReact />,
      iconColor: '#00D8FF',
      isActive: true, // orange outline in mockup
    },
    {
      name: 'Figma',
      percent: '85 %',
      icon: <FaFigma />,
      iconColor: '#A259FF',
      isActive: false,
    },
    {
      name: 'HTML/CSS',
      percent: '80 %',
      icon: <FaHtml5 />,
      iconColor: '#E34F26',
      isActive: false,
    },
    {
      name: 'Next.js',
      percent: '80 %',
      icon: <SiNextdotjs />,
      iconColor: '#FFFFFF',
      isActive: false,
    },
    {
      name: 'Java Script',
      percent: '60 %',
      icon: <IoLogoJavascript />,
      iconColor: '#F7DF1E',
      isActive: false,
    },
    {
      name: 'GitHub',
      percent: '90 %',
      icon: <FaGithub />,
      iconColor: '#FFFFFF',
      isActive: false,
    },
  ]

  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-card">
        <MyCard />

        <main className="portfolio-content skill-content">
          <h2 className="page-title">
            My <span className="text-orange">Skills</span>
          </h2>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div
                  className={`skill-capsule ${skill.isActive ? 'active-capsule' : ''}`}
                >
                  <div
                    className="skill-icon"
                    style={{ color: skill.iconColor }}
                  >
                    {skill.icon}
                  </div>
                  <div className="skill-percent text-orange">
                    {skill.percent}
                  </div>
                </div>
                <div className="skill-label">{skill.name}</div>
              </div>
            ))}
          </div>
        </main>

        <SideMenu />
      </div>
    </div>
  )
}
