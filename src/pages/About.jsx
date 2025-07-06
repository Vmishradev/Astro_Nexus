import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="hero-background-overlay"></div>
        <div className="hero-content">
          <h1 className="about-main-title">About Astro Nexus</h1>
          <p className="hero-subtitle">
            Pioneering the future of space exploration and cosmic discovery
          </p>
        </div>
      </div>

      <div className="about-content">
        <div className="content-container">
          <section className="mission-section">
            <div className="section-icon">🎯</div>
            <h2 className="section-title">Our Mission</h2>
            <div className="section-content">
              <p>
                At Astro Nexus, our mission is to democratize space exploration and
                make the wonders of the universe accessible to everyone. We strive
                to advance scientific understanding through cutting-edge research,
                innovative technology, and collaborative exploration while inspiring
                the next generation of space scientists and astronomers.
              </p>
            </div>
          </section>

          <section className="vision-section">
            <div className="section-icon">🌌</div>
            <h2 className="section-title">Our Vision</h2>
            <div className="section-content">
              <p>
                We envision a future where space exploration transcends boundaries
                and unites humanity in the pursuit of cosmic knowledge. By fostering
                international collaboration and citizen science initiatives, we aim
                to unlock the mysteries of the universe and expand human
                understanding of our place in the cosmos.
              </p>
            </div>
          </section>

          <section className="team-section">
            <div className="section-icon">👥</div>
            <h2 className="section-title">Meet Our Team</h2>
            <div className="section-content">
              <p>
                Our team comprises world-renowned astrophysicists, mission
                specialists, data scientists, and space technology engineers
                dedicated to advancing human knowledge of the universe. From
                seasoned astronauts to brilliant theoretical physicists, everyone at
                Astro Nexus is committed to pushing the boundaries of space
                exploration and discovery.
              </p>
            </div>
          </section>

          <section className="stats-section">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Space Missions</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">200+</div>
                <div className="stat-label">Research Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">25+</div>
                <div className="stat-label">Countries</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Scientists</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;