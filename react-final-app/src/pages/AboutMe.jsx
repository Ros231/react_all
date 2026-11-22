import React from 'react'
import MyCard from '../components/MyCard'
import SideMenu from '../components/SideMenu'

export default function AboutMe() {
  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-card">
        <MyCard />

        <main className="portfolio-content about-content">
          <h2 className="page-title">
            About <span className="text-orange">Me</span>
          </h2>

          <h3 className="about-quote">
            I find fulfillment in blending visual design with the power of coding to create meaningful experiences.
          </h3>

          <p className="page-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
            tempora at neque a adipisci nulla voluptatem? Mollitia, officiis,
            architecto earum voluptates obcaecati corrupti voluptatem . Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Iusto maxime
            tempora at neque a adipisci nulla voluptatem? Mollitia, officiis,
            architecto earum voluptates obcaecati corrupti voluptatem .
          </p>
        </main>

        <SideMenu />
      </div>
    </div>
  )
}
