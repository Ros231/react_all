import React from 'react'
import MyCard from '../components/MyCard'
import SideMenu from '../components/SideMenu'

export default function Home() {
  const authorName = 'Phanuwat'

  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-card">
        <MyCard name={authorName} />

        <main className="portfolio-content home-content">
          <div className="home-tag">
            Lets Work <span className="text-orange">Together !</span>
          </div>

          <h1 className="home-heading">
            Hi From <span className="text-orange">{authorName}</span> ,
            <span className="home-role-title">
              Interactive Designer &amp; Fullstack Web Developer
            </span>
          </h1>

          <p className="home-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
            tempora at neque a adipisci nulla voluptatem? Mollitia, officiis,
            architecto earum voluptates obcaecati corrupti voluptatem .
          </p>

          <div className="home-stats">
            <div className="stat-item">
              <span className="stat-number text-orange">3 +</span>
              <span className="stat-label">
                Years of<br />Experience
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-number text-orange">10 +</span>
              <span className="stat-label">
                Projects<br />Completed
              </span>
            </div>
          </div>
        </main>

        <SideMenu />
      </div>
    </div>
  )
}
