import React from 'react'
import MyCard from '../components/MyCard'
import SideMenu from '../components/SideMenu'
import calculateIcon from '../assets/calculate.png'
import bmiIcon from '../assets/bmi.png'
import bmrIcon from '../assets/bmr.png'
import carIcon from '../assets/car.png'
import { FiLock, FiSearch, FiBookmark, FiShare2 } from 'react-icons/fi'
import { FaFacebook, FaLine, FaXTwitter } from 'react-icons/fa6'

export default function Projects() {
  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-card">
        <MyCard />

        <main className="portfolio-content projects-content">
          <h2 className="page-title">
            Featured <span className="text-orange">Projects</span>
          </h2>

          <h3 className="project-title">
            Manage Task App - fullstack web development
          </h3>

          <p className="project-desc">
            Here's my latest project built with Next.js and Laravel, using TailwindCSS
            on the front-end. Watch the video to see the responsive landing page in action!
          </p>

          {/* Browser Mockup Window */}
          <div className="browser-mockup">
            {/* Browser Header Bar */}
            <div className="browser-topbar">
              <div className="browser-actions">
                <FiBookmark className="browser-action-icon" />
              </div>
              <div className="browser-address-bar">
                <FiLock className="address-lock-icon" />
                <span className="address-url">localhost:3030</span>
              </div>
              <div className="browser-right-actions">
                <FiSearch className="browser-action-icon" />
                <FiShare2 className="browser-action-icon" />
              </div>
            </div>

            {/* Browser Page Body (Calculate App UI Preview) */}
            <div className="browser-viewport">
              <div className="calc-preview-header">
                <img src={calculateIcon} alt="Calculate" className="calc-header-icon" />
                <h4 className="calc-title">เครื่องคำนวณออนไลน์</h4>
                <p className="calc-subtitle">เลือกการคำนวณที่คุณต้องการจากเมนูด้านล่าง</p>
              </div>

              <div className="calc-cards-row">
                <div className="calc-card">
                  <div className="calc-card-icon-wrap">
                    <img src={bmiIcon} alt="BMI" className="calc-card-img" />
                  </div>
                  <div className="calc-card-name">BMI (ดัชนีมวลกาย)</div>
                  <div className="calc-card-hint">คำนวณดัชนีมวลกายเพื่อดูว่าเหมาะสมหรือไม่</div>
                </div>

                <div className="calc-card">
                  <div className="calc-card-icon-wrap">
                    <img src={bmrIcon} alt="BMR" className="calc-card-img" />
                  </div>
                  <div className="calc-card-name">BMR (อัตราการเผาผลาญร่างกาย)</div>
                  <div className="calc-card-hint">คำนวณอัตราการเผาผลาญพลังงานขั้นพื้นฐาน</div>
                </div>

                <div className="calc-card">
                  <div className="calc-card-icon-wrap">
                    <img src={carIcon} alt="Car" className="calc-card-img" />
                  </div>
                  <div className="calc-card-name">Car (คำนวณค่างวดผ่อน)</div>
                  <div className="calc-card-hint">คำนวณเงินผ่อนรถที่ต้องจ่ายต่อเดือน</div>
                </div>
              </div>

              <div className="calc-preview-footer">
                <span className="footer-copy">
                  &copy; 2024 CAL-SAU. All right Reserved. Created by Ninnin SAU
                </span>
                <div className="footer-socials">
                  <FaFacebook className="footer-social-icon" />
                  <FaLine className="footer-social-icon" />
                  <FaXTwitter className="footer-social-icon" />
                </div>
              </div>
            </div>
          </div>
        </main>

        <SideMenu />
      </div>
    </div>
  )
}
