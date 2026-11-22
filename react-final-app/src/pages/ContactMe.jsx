import React, { useState } from 'react'
import MyCard from '../components/MyCard'
import SideMenu from '../components/SideMenu'

export default function ContactMe() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
    adress: '',
    content: '',
    newsletter: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        email: '',
        phone: '',
        name: '',
        adress: '',
        content: '',
        newsletter: false,
      })
    }, 4000)
  }

  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-card">
        <MyCard />

        <main className="portfolio-content contact-content">
          <h2 className="page-title">
            Contact <span className="text-orange">Me</span>
          </h2>
          <p className="contact-subtitle">Let's get in touch!</p>

          {submitted && (
            <div className="contact-success-msg">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-grid">
              <div className="form-group">
                <label htmlFor="email" className="form-label text-orange">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label text-orange">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="name" className="form-label text-orange">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="adress" className="form-label text-orange">
                  Adress
                </label>
                <input
                  type="text"
                  id="adress"
                  name="adress"
                  value={formData.adress}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="content" className="form-label text-orange">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                rows="3"
                required
                value={formData.content}
                onChange={handleChange}
                className="form-textarea"
              ></textarea>
            </div>

            <div className="form-checkbox-row">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className="form-checkbox"
              />
              <label htmlFor="newsletter" className="checkbox-label">
                I would like to receive the newsletter.
              </label>
            </div>

            <button type="submit" className="contact-btn-submit">
              Submit
            </button>
          </form>
        </main>

        <SideMenu />
      </div>
    </div>
  )
}
