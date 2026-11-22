import React from 'react'
import MyCard from '../components/MyCard'
import SideMenu from '../components/SideMenu'

export default function EduExp() {
  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-card">
        <MyCard />

        <main className="portfolio-content eduexp-content">
          <h2 className="page-title">
            Education &amp; <span className="text-orange">Experience</span>
          </h2>

          <div className="eduexp-list">
            <div className="eduexp-item">
              <div className="eduexp-year text-orange">2022 - Present</div>
              <div className="eduexp-role">UI/UX Designer</div>
              <div className="eduexp-place">Freelance</div>
              <div className="eduexp-role" style={{ marginTop: '12px' }}>
                Fullstack Web Developer
              </div>
              <div className="eduexp-place">Freelance</div>
            </div>

            <div className="eduexp-item">
              <div className="eduexp-year text-muted">2022- 2025</div>
              <div className="eduexp-role">
                Bachelor Degree in Technology Digital and Innovation
              </div>
              <div className="eduexp-place">Southeast Asia University</div>
            </div>

            <div className="eduexp-item">
              <div className="eduexp-year text-muted">2016- 2021</div>
              <div className="eduexp-role">High school</div>
              <div className="eduexp-place">Taweethapiseck School</div>
            </div>
          </div>
        </main>

        <SideMenu />
      </div>
    </div>
  )
}
