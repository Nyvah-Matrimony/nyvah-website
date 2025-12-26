import React from "react";

function App() {
  return (
    <div className="page">
      <header className="hero">
        <img src="/header.jpg" alt="Couple holding hands by the sea" className="hero-image" />

        <nav className="nav">
          <div className="nav-links">
            <a href="#waitlist">Join waitlist</a>
            <a href="#contact">Contact</a>
            <a href="#careers">Careers</a>
          </div>
        </nav>

        <div className="hero-logo logo-text">nyvah</div>

        <div className="hero-overlay">
          <div className="hero-tagline">Where marriage meets values</div>
        </div>
      </header>

      <main>
        <section id="about" className="section section-light intro">
          <div className="section-inner">
            <div className="section-eyebrow">With nyvah</div>
            <h2>
              Meet people who
              <br />
              share your <span className="accent">values</span>
            </h2>
            <p className="body-text body-text-wide">
              We believe that strong and healthy relationships start with aligned
              core values. With Nyvah, you&apos;re matched based on what truly
              matters to you.
            </p>
          </div>
        </section>

        <section className="section section-dark limited-matches">
          <div className="section-inner">
            <h2>
              Get a Limited Number of
              <br />
              Quality Matches Every cycle
            </h2>
            <p className="body-text body-text-narrow">
              Nyvah is designed to save your time, not waste it with endless
              swiping. You receive a curated set of meaningful matches each
              cycle, helping you build deeper, more genuine connections.
            </p>
          </div>
        </section>

        <section className="section section-light photos">
          <div className="section-inner">
            <h2>
              View Photos After One Week of
              <br />
              Conversation with your match
            </h2>
            <p className="body-text body-text-wide">
              We believe in getting to know someone before focusing on
              appearance. With Nyvah, you connect first, then see photos,
              ensuring you meet matches who are truly compatible with you.
            </p>
          </div>
        </section>

        <section className="section section-dark safety" id="support">
          <div className="section-inner section-inner-center">
            <h2>
              We dont believe in second chances
              <br />
              when it comes to your safety
            </h2>
            <p className="body-text body-text-narrow">
              At Nyvah, we thoroughly verify every profile, and any safety
              concern results in a permanent ban — no second chances.
            </p>
          </div>
        </section>

        <section className="section section-light contact" id="contact">
          <div className="section-inner section-inner-center">
            <h2>Any questions? Ask away.</h2>
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <label className="field">
                <span className="field-label">E-mail address</span>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
              </label>
              <label className="field">
                <span className="field-label">Message</span>
                <textarea
                  rows="5"
                  placeholder="Write your message to us"
                  required
                />
              </label>
              <button type="submit" className="button-primary">
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">
            <div className="footer-logo">nyvah</div>
            <div className="footer-bottom">
              <div className="footer-copy">All rights reserved</div>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-links-container">
              <div className="footer-links">
                <a href="#team">Our team</a>
                <a href="#mission">Mission</a>
                <a href="#faq">FAQ</a>
                <a href="#contact">Contact</a>
              </div>
              <div className="footer-links secondary">
                <a href="#terms">Terms and conditions</a>
                <a href="#privacy">Privacy policy</a>
              </div>
              <div className="footer-social footer-social-right">
                <a href="https://www.instagram.com/nyvah.in/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm11.25 1.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0ZM12 8.5A3.5 3.5 0 1 1 8.5 12A3.5 3.5 0 0 1 12 8.5Zm0 2a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 12 10.5Z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/nyvah/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3A2.99 2.99 0 0 1 22 6v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14ZM7.35 10.01H5.16V18h2.19v-7.99Zm.2-2.83a1.29 1.29 0 0 0-1.32-1.29a1.3 1.3 0 1 0 .01 2.59a1.29 1.29 0 0 0 1.31-1.3ZM18 18v-4.6c0-2.47-1.32-3.61-3.07-3.61a2.66 2.66 0 0 0-2.38 1.32h-.05V10h-2.2V18h2.19v-4.33c0-1.14.22-2.24 1.63-2.24c1.39 0 1.41 1.3 1.41 2.32V18H18Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


