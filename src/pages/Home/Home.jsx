import { Link } from "react-router-dom";
import HeroImg from "../../assets/images/hero-img.webp";
import Img1 from "../../assets/images/galaxy-nebula.webp";
import Img2 from "../../assets/images/exoplanet-system.webp";
import Img3 from "../../assets/images/space-mission-control.webp";
import Img4 from "../../assets/images/astronaut.webp";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="cosmic-hero">
        <div className="cosmic-hero__container">
          <div className="cosmic-hero__content">
            <h1 className="cosmic-hero__title">
              Welcome to&nbsp;
              <span className="cosmic-hero__brand-text">Astro Nexus!</span>
            </h1>
            <p className="cosmic-hero__description">
              Embark on an extraordinary journey through space and time. Access
              cutting-edge astronomical discoveries, interactive star maps, and
              real-time data from telescopes around the world. Join thousands of
              explorers mapping the mysteries of our universe.
            </p>
            <div className="cosmic-hero__actions">
              <Link to="/missions" className="cosmic-hero__cta-link">
                <button className="cosmic-hero__cta-button">
                  <span className="cosmic-hero__cta-text">
                    Start Your Mission
                  </span>
                  <span className="cosmic-hero__cta-icon">🚀</span>
                </button>
              </Link>
            </div>
            <div className="cosmic-hero__statistics">
              <div className="statistic-card">
                <span className="statistic-card__number">2.4M+</span>
                <span className="statistic-card__label">Celestial Objects</span>
              </div>
              <div className="statistic-card">
                <span className="statistic-card__number">150+</span>
                <span className="statistic-card__label">Observatories</span>
              </div>
              <div className="statistic-card">
                <span className="statistic-card__number">24/7</span>
                <span className="statistic-card__label">Live Data</span>
              </div>
            </div>
          </div>
          <div className="cosmic-hero__visual">
            <div className="cosmic-hero__image-container">
              <img
                src={HeroImg}
                className="cosmic-hero__image"
                alt="Space exploration hero"
              />
              <div className="cosmic-hero__image-overlay"></div>
            </div>
          </div>
        </div>
        <div className="cosmic-hero__background-effect"></div>
      </section>

      <section className="feature-showcase">
        <div className="feature-showcase__container">
          <article className="feature-card feature-card--discovery">
            <div className="feature-card__content">
              <h2 className="feature-card__title">Why Explore Space?</h2>
              <p className="feature-card__description">
                Space exploration represents humanity's greatest adventure,
                bringing countless discoveries and innovations to our world.
              </p>
              <div className="feature-card__highlights">
                <div className="highlight-item">
                  <span className="highlight-item__icon">🔬</span>
                  <div className="highlight-item__content">
                    <strong className="highlight-item__title">
                      Scientific Discovery
                    </strong>
                    <p className="highlight-item__text">
                      Every mission expands our understanding of the universe,
                      from distant galaxies to the origins of life itself.
                    </p>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-item__icon">💡</span>
                  <div className="highlight-item__content">
                    <strong className="highlight-item__title">
                      Technological Innovation
                    </strong>
                    <p className="highlight-item__text">
                      Space exploration drives breakthrough technologies that
                      benefit life on Earth, from GPS systems to medical
                      devices.
                    </p>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-item__icon">✨</span>
                  <div className="highlight-item__content">
                    <strong className="highlight-item__title">
                      Inspiring Future
                    </strong>
                    <p className="highlight-item__text">
                      Astronomical discoveries ignite imagination and inspire
                      the next generation of scientists, engineers, and
                      explorers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-card__visual">
              <img
                src={Img1}
                className="feature-card__image"
                alt="Galaxy nebula"
              />
            </div>
          </article>

          <article className="feature-card feature-card--exploration">
            <div className="feature-card__visual">
              <img
                src={Img2}
                className="feature-card__image"
                alt="Exoplanet system"
              />
            </div>
            <div className="feature-card__content">
              <h2 className="feature-card__title">Our Exploration Areas</h2>
              <p className="feature-card__description">
                We cover the vast expanse of space, offering detailed insights
                into multiple cosmic domains.
              </p>
              <div className="feature-card__highlights">
                <div className="highlight-item">
                  <span className="highlight-item__icon">🌌</span>
                  <div className="highlight-item__content">
                    <strong className="highlight-item__title">
                      Deep Space Objects
                    </strong>
                    <p className="highlight-item__text">
                      From distant quasars to magnificent nebulae, explore the
                      most spectacular phenomena in the universe.
                    </p>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-item__icon">🪐</span>
                  <div className="highlight-item__content">
                    <strong className="highlight-item__title">
                      Planetary Systems
                    </strong>
                    <p className="highlight-item__text">
                      Discover exoplanets, study our solar system, and learn
                      about worlds beyond our imagination.
                    </p>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-item__icon">⭐</span>
                  <div className="highlight-item__content">
                    <strong className="highlight-item__title">
                      Stellar Phenomena
                    </strong>
                    <p className="highlight-item__text">
                      Witness the birth and death of stars, explore black holes,
                      and understand the cosmic forces that shape our universe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="feature-card feature-card--process">
            <div className="feature-card__content">
              <h2 className="feature-card__title">Exploration Process</h2>
              <p className="feature-card__description">
                Our systematic approach to space exploration ensures
                comprehensive understanding and discovery.
              </p>
              <div className="process-steps">
                <div className="process-step">
                  <div className="process-step__number">1</div>
                  <div className="process-step__content">
                    <strong className="process-step__title">
                      Select Your Focus
                    </strong>
                    <p className="process-step__text">
                      Choose from our curated collection of astronomical targets
                      and phenomena to study.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="process-step__number">2</div>
                  <div className="process-step__content">
                    <strong className="process-step__title">
                      Access Mission Data
                    </strong>
                    <p className="process-step__text">
                      Review detailed information, images, and scientific data
                      from space missions and telescopes.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="process-step__number">3</div>
                  <div className="process-step__content">
                    <strong className="process-step__title">
                      Interactive Analysis
                    </strong>
                    <p className="process-step__text">
                      Use our advanced tools to analyze celestial objects and
                      understand their properties.
                    </p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="process-step__number">4</div>
                  <div className="process-step__content">
                    <strong className="process-step__title">
                      Join the Discovery
                    </strong>
                    <p className="process-step__text">
                      Contribute to ongoing research and share your findings
                      with the global astronomical community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-card__visual">
              <img
                src={Img3}
                className="feature-card__image"
                alt="Space mission control"
              />
            </div>
          </article>

          <article className="feature-card feature-card--community">
            <div className="feature-card__visual">
              <img src={Img4} className="feature-card__image" alt="Astronaut" />
            </div>
            <div className="feature-card__content">
              <h2 className="feature-card__title">Get Involved</h2>
              <p className="feature-card__description">
                Join our community of space enthusiasts and contribute to
                astronomical discovery.
              </p>
              <div className="feature-card__highlights">
                <div className="highlight-item">
                  <span className="highlight-item__icon">🔬</span>
                  <div className="highlight-item__content">
                    <strong className="highlight-item__title">
                      Citizen Science
                    </strong>
                    <p className="highlight-item__text">
                      Participate in real space research projects and help
                      professional astronomers make groundbreaking discoveries.
                    </p>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-item__icon">🎓</span>
                  <div className="highlight-item__content">
                    <strong className="highlight-item__title">
                      Educational Outreach
                    </strong>
                    <p className="highlight-item__text">
                      Support space education initiatives and inspire others to
                      explore the wonders of the universe.
                    </p>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-item__icon">🤝</span>
                  <div className="highlight-item__content">
                    <strong className="highlight-item__title">
                      Research Collaboration
                    </strong>
                    <p className="highlight-item__text">
                      Connect with scientists and researchers working on
                      cutting-edge space exploration projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="engagement-section">
        <div className="engagement-section__container">
          <div className="engagement-cards">
            <div className="engagement-card">
              <div className="engagement-card__icon">🌟</div>
              <h3 className="engagement-card__title">
                Join Our Cosmic Community
              </h3>
              <p className="engagement-card__description">
                Follow us on social media for the latest space discoveries,
                mission updates, and astronomical events. Together, we can
                unlock the mysteries of the universe!
              </p>
            </div>

            <div className="engagement-card">
              <div className="engagement-card__icon">📡</div>
              <h3 className="engagement-card__title">
                Contact Mission Control
              </h3>
              <p className="engagement-card__description">
                Have questions about space exploration? Our team of experts is
                ready to assist you on your cosmic journey. Reach out through
                our contact page!
              </p>
            </div>

            <div className="engagement-card">
              <div className="engagement-card__icon">🚀</div>
              <h3 className="engagement-card__title">
                Begin Your Space Adventure Today!
              </h3>
              <p className="engagement-card__description">
                Explore our mission catalog and take the first step toward
                understanding the infinite wonders of the cosmos!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
