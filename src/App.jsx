import React, {useEffect,useState} from 'react';
import shape1 from "./assets/images/hero-shape.png"
import img1 from "./assets/images/about-banner.jpg"
import shape2 from "./assets/images/about-shape-1.png"
import img2 from "./assets/images/project-1.jpg"
import img3 from "./assets/images/project-2.jpg"
import img4 from "./assets/images/project-3.jpg"
import img5 from "./assets/images/project-4.jpg"
import img6 from "./assets/images/project-5.jpg"
import img7 from "./assets/images/project-6.jpg"

import icon1 from "./assets/images/feature-icon-1.png"
import icon2 from "./assets/images/feature-icon-2.png"
import icon3 from "./assets/images/feature-icon-3.png"

import blog1 from "./assets/images/blog-1.jpg"
import blog2 from "./assets/images/blog-2.jpg"

import Modal from "./Modal.jsx"

import bg01 from "./assets/images/newsletter-banner.png"

import bg from "./assets/images/1.png"
import bg1 from "./assets/3.png"
import bg2 from "./assets/4.png"

import L from "./assets/L1.png"
import Lb from "./assets/L2.png"
import LW from "./assets/W2.png"




import bg3 from "./assets/5.png"
import bg4 from "./assets/6.png"

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import shape3 from "./assets/images/about-shape-2.png"
import logo from "./assets/log3.png"
import SegmentIcon from '@mui/icons-material/Segment';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function App() {

  const [isNavActive, setIsNavActive] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('[data-header]');
      const backTopBtn = document.querySelector('[data-back-top-btn]');

      if (window.scrollY >= 100) {
        header.classList.add('active');
        backTopBtn.classList.add('active');
      } else {
        header.classList.remove('active');
        backTopBtn.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [open, setOpen] = useState(false);

  const [clickedText, setClickedText] = useState(0);


  const handleClose = () => {
    setOpen(false);
  };
  const handleModal = (num)=>{
    setOpen(true);
    setClickedText(num)
  }
  console.log(clickedText);



  return (
    <>

  
  
<header className={`header ${isHeaderActive ? 'active' : ''}`} data-header>
      <div className="container">
  
        <h1>
          <a href="#" className="logo"><img className='svg' src={logo} alt="" /></a>
        </h1>
  
        <nav className={`navbar ${isNavActive ? 'active' : ''}`} data-navbar>
  
          <div className="navbar-top">
            <a href="#" className="logo">
             <h3>Lipsan</h3>
            </a>
  
            <button className="nav-close-btn" aria-label="Close menu" onClick={toggleNav}>
              <CloseIcon/>
            </button>
          </div>
  
          <ul className="navbar-list">
  
            <li className="navbar-item">
              <a href="#home" className="navbar-link" onClick={toggleNav}>
                <span>ACCUEIL
</span>
  
                <ion-icon name="chevron-forward"></ion-icon>
              </a>
            </li>
  
            <li onClick={toggleNav} className="navbar-item">
              <a href="#about" className="navbar-link" data-nav-link>
                <span>À PROPOS</span>
  
                <ion-icon name="chevron-forward"></ion-icon>
              </a>
            </li>
  
            <li onClick={toggleNav} className="navbar-item">
              <a href="#service" className="navbar-link" data-nav-link>
                <span>SERVICES</span>
  
                <ion-icon name="chevron-forward"></ion-icon>
              </a>
            </li>
  
            <li onClick={toggleNav} className="navbar-item">
              <a href="#clt" className="navbar-link" data-nav-link>
                <span>NOS CLIENTS</span>
  
                <ion-icon name="chevron-forward"></ion-icon>
              </a>
            </li>
  
            <li onClick={toggleNav} className="navbar-item">
              <a href="#cont" className="navbar-link" data-nav-link>
                <span>CONTACT</span>
  
                <ion-icon name="chevron-forward"></ion-icon>
              </a>
            </li>
  
          </ul>
  
        </nav>
  
        <div className="header-contact">
  
        
  
          <div className="contact-icon">
            <ion-icon name="call-outline"></ion-icon>
          </div>
  
        </div>
  
        <button className="nav-open-btn" aria-label="Open menu" onClick={toggleNav} data-nav-toggler>
        <SegmentIcon className='open-icon'/>
        </button>
  
        <div className="overlay" data-nav-toggler data-overlay onClick={toggleNav}></div>
  
      </div>
    </header>
  
  
  
  
  
    <main>
      <article>
  
  
      <section className="section hero" aria-label="home" id="home" >
  <div className="container">
    <div className="hero-content">
      <h2 className="h1 hero-title">
        <span className="span">Lipsan </span> 
      </h2>
      <p className="hero-text">
      Quand l'expertise rencontre l'engagement
      </p>
      <a href="#service" className="btn-outline">Découvrir nos services</a>
      <img src={shape1} width="116" height="116" loading="lazy" className="hero-shape shape-1" />
      <img src={shape1} width="116" height="116" loading="lazy" className="hero-shape shape-2" />
    </div>
  </div>
</section>

  
  
  
  
  
    
  
        <section className="section about" id="about" aria-label="about">
          <div className="container">
          <figure className="about-banner img-holder" style={{ '--width': '400px', '--height': '720px' }}>
  <img src={img1} width="400" height="720" loading="lazy" alt="" className="img-cover" />

  <img src={LW} width="260" height="170" loading="lazy" alt="" className="abs-img abs-img-1" />

  <img src={LW} width="600" height="600" loading="lazy" alt="" className="abs-img abs-img-2" />
</figure>

  
            <div className="about-content">
  
              <p className="section-subtitle">Pourquoi nous choisir?</p>
  
              <h2 className="h2 section-title"> Votre Expert de Confiance pour des Solutions Exceptionnelles !</h2>
  
              <p className="section-text">
              l'expertise passionnée à votre service ! Nos techniciens sont continuellement formés aux nouvelles technologies, garantissant ainsi des solutions adaptées et innovantes. Nous respectons scrupuleusement les délais d'intervention et nous nous engageons à fournir un service rapide, efficace et professionnel.
              </p>
  
              <ul className="about-list">
  
                <li className="about-item">
                  <div className="about-icon">
                    <ArrowForwardIosIcon/>
                  </div>
  
                  <p className="about-text">
                      <strong>RÉACTIVITÉ</strong> <br />
            Nous respectons scrupuleusement nos délais d’interventions.

                  </p>
                </li>
  
                <li className="about-item">
                  <div className="about-icon">
                  <ArrowForwardIosIcon/>
                  </div>
  
                  <p className="about-text">
                                     <strong>EXPERTISE</strong> <br />

Nos techniciens sont formés continuellement aux nouvelles technologies.

                  </p>
                </li>
  
                <li className="about-item">
                  <div className="about-icon">
                  <ArrowForwardIosIcon/>
                  </div>
  
                  <p className="about-text">
                   <strong>FIABILITÉ</strong> <br />
Vipsan est une société qui maîtrise ses domaines et sur laquelle vous pouvez compter

                  </p>
                </li>
  
                <li className="about-item">
                  <div className="about-icon">
                  <ArrowForwardIosIcon/>
                  </div>
  
                  <p className="about-text">
                    <strong>Passion</strong> <br />
Nous sommes passionnés par notre métier et nous nous engageons à fournir un service rapide, efficace et professionnel à chaque fois

                  </p>
                </li>
  
                <li className="about-item">
                  <div className="about-icon">
                  <ArrowForwardIosIcon/>
                  </div>
  
                  <p className="about-text">
                   <strong>Engagement</strong> <br />
Nous fournissons un service exceptionnel à chaque fois, en travaillant avec nos clients et en offrant des solutions sur mesure pour répondre à leurs besoins

                  </p>
                </li>

  
              </ul>
  
              <a href="#" className="btn">Learn More</a>
  
            </div>
  
          </div>
        </section>
  
  

  
        <section className="section service" id="service" aria-label="service">
          <div className="container">
  
            <p className="section-subtitle">Tous nos services </p>
  
            <h2 className="h2 section-title">Fiables pour nos services.</h2>
  
            <p className="section-text">
          
            </p>
  
            <ul className="service-list grid-list">
  
              <li>
                <div className="service-card">
  
                  <div className="card-icon">
                    <img src={bg1} width="70" height="70" loading="lazy" alt="Truck"/>
                  </div>
  
                  <h3 className="h3 card-title">
                    <span className="span">01</span> Lipsan Lift
                  </h3>
  
                  <p className="card-text">
                  Votre partenaire de confiance pour tous vos besoins en équipements d'ascenseurs. De la fourniture de pièces de rechange aux systèmes d'ascenseurs complets
                  </p>
  
                  <a onClick={() => handleModal(0)} href="#" className="btn-link">
                  <ArrowForwardIosIcon/>
  
                    <span className="span">View Detail</span>
                  </a>
  
                </div>
              </li>
  
              <li>
                <div className="service-card">
  
                  <div className="card-icon">
                    <img src={bg2} width="70" height="70" loading="lazy" alt="Ship"/>
                  </div>
  
                  <h3 className="h3 card-title">
                    <span className="span">02</span> Lipsan Sat
                  </h3>
  
                  <p className="card-text">
                  Profitez d'une installation de télévision par satellite de qualité supérieure grâce à notre équipe expérimentée. Nous proposons une large gamme de services, 
                  </p>
  
                  <a onClick={() => handleModal(1)}  href="#" className="btn-link">
                  <ArrowForwardIosIcon/>
  
                    <span className="span">View Detail</span>
                  </a>
  
                </div>
              </li>
  
              <li>
                <div className="service-card">
  
                  <div className="card-icon">
                    <img src={bg3} width="70" height="70" loading="lazy" alt="Airplane"/>
                  </div>
  
                  <h3 className="h3 card-title">
                    <span className="span">03</span> Lipsan Smart
                  </h3>
  
                  <p className="card-text">
                  Une maison intelligente pour une vie plus facile. Nos solutions technologiques avancées transforment votre maison avec des systèmes de domotique,  caméras de sécurité,
                  </p>
  
                  <a onClick={() => handleModal(2)} href="#" className="btn-link">
                  <ArrowForwardIosIcon/>
  
                    <span className="span">View Detail</span>
                  </a>
  
                </div>
              </li>
  
              <li>
                <div className="service-card">
  
                  <div className="card-icon">
                    <img src={bg4} width="70" height="70" loading="lazy" alt="Train"/>
                  </div>
  
                  <h3 className="h3 card-title">
                    <span className="span">04</span> Lipsan Security
                  </h3>
  
                  <p className="card-text">
                  Protégez votre maison ou votre entreprise grâce à nos solutions de surveillance vidéo de qualité. Notre équipe spécialisée installe des caméras de surveillance sur mesure, vous offrant la tranquillité d'esprit et la sécurité dont vous avez besoin,
                  </p>
  
                  <a onClick={() => handleModal(3)} href="#" className="btn-link">
                  <ArrowForwardIosIcon/>
  
                    <span className="span">View Detail</span>
                  </a>
  
                </div>
              </li>
  
        
  
  
            </ul>
  
          </div>
          <Modal open={open} handleClose={handleClose} clickedText={clickedText} />
        </section>
  
  
  
  

  
        <section className="section feature" aria-label="feature">
          <div className="container">
  
            <div className="title-wrapper">
  
              <div>
                <p className="section-subtitle">Ce qui nous rend différents</p>
  
                <h2 className="h2 section-title"> Vipsan en trois mots</h2>
  
                <p className="section-text">
             
                </p>
              </div>
  
              <a href="#" className="btn">Read More</a>
  
            </div>
  
            <ul className="feature-list grid-list">
  <li>
    <div className="feature-card" style={{ '--card-number': "'01'" }}>

      <div className="card-icon">
        <img src={icon1} width="72" height="91" alt="" />
      </div>

      <h3 className="h3 card-title">Expertise Complète</h3>

      <p className="card-text">
      Plusieurs secteurs - ascenseurs, installation satellite, technologie intelligente, sécurité - regroupés en une seule entreprise, offrant des solutions diverses et de haute qualité.
      </p>

      <a href="#" className="card-btn" aria-label="Read more">
      <ArrowForwardIosIcon/>
      </a>

    </div>
  </li>

  <li>
    <div className="feature-card" style={{ '--card-number': "'02'" }}>

      <div className="card-icon">
        <img src={icon2} width="94" height="94" alt="" />
      </div>

      <h3 className="h3 card-title">Engagement Passionné</h3>

      <p className="card-text">
      Animée d'une véritable passion, notre équipe propose des solutions exceptionnelles et un service client de premier ordre. Une formation continue aux technologies de pointe garantit des offres innovantes et fiables.
      </p>

      <a href="#" className="card-btn" aria-label="Read more">
      <ArrowForwardIosIcon/>
      </a>

    </div>
  </li>

  <li>
    <div className="feature-card" style={{ '--card-number': "'03'" }}>

      <div className="card-icon">
        <img src={icon3} width="93" height="93" alt="" />
      </div>

      <h3 className="h3 card-title">Solutions Personnalisées</h3>

      <p className="card-text">
      La compréhension des besoins uniques de nos clients nous distingue. Des conceptions d'ascenseurs sur mesure, des solutions domotiques adaptées et des installations de sécurité personnalisées assurent une satisfaction maximale de nos clients.
      </p>

      <a href="#" className="card-btn" aria-label="Read more">
      <ArrowForwardIosIcon/>
      </a>

    </div>
  </li>
</ul>

  
          </div>
        </section>
  
  
  
  
 
  
        <section id='clt' className="section project" aria-label="project">
          <div className="container">
  
            <p className="section-subtitle">
PROJETS</p>
  
            <h2 className="h2 section-title">NOS CLIENTS</h2>
  
            <p className="section-text">
            La Force de Notre Réussite
            </p>
  
            <ul className="project-list">
  
              <li className="project-item">
                <div className="project-card">
  
                  <figure className="card-banner img-holder" style={{ '--width': 397, '--height': 352 }}>
                    <img src={img2} width="397" height="352" loading="lazy"
                      alt="Warehouse inventory" className="img-cover"/>
                  </figure>
  
                  <button className="action-btn" aria-label="View image">
                    <ion-icon name="expand-outline"></ion-icon>
                  </button>
  
                  <div className="card-content">
                    <p className="card-tag">Warehousing , Distrbution</p>
  
                    <h3 className="h3">
                      <a href="#" className="card-title">Warehouse inventory</a>
                    </h3>
  
                    <a href="#" className="card-link">Read More</a>
                  </div>
  
                </div>
              </li>
  
              <li className="project-item">
                <div className="project-card">
  
                  <figure className="card-banner img-holder" style={{ '--width': 397, '--height': 352 }}>
                    <img src={img3} width="397" height="352" loading="lazy"
                      alt="Warehouse inventory" className="img-cover"/>
                  </figure>
  
                  <button className="action-btn" aria-label="View image">
                    <ion-icon name="expand-outline"></ion-icon>
                  </button>
  
                  <div className="card-content">
                    <p className="card-tag">Logistics, Analytics</p>
  
                    <h3 className="h3">
                      <a href="#" className="card-title">Minimize Manufacturing</a>
                    </h3>
  
                    <a href="#" className="card-link">Read More</a>
                  </div>
  
                </div>
              </li>
  
              <li className="project-item">
                <div className="project-card">
  
                  <figure className="card-banner img-holder" style={{ '--width': 397, '--height': 352 }}>
                    <img src={img4} width="397" height="352" loading="lazy"
                      alt="Warehouse inventory" className="img-cover"/>
                  </figure>
  
                  <button className="action-btn" aria-label="View image">
                    <ion-icon name="expand-outline"></ion-icon>
                  </button>
  
                  <div className="card-content">
                    <p className="card-tag">Warehousing , Distrbution</p>
  
                    <h3 className="h3">
                      <a href="#" className="card-title">Warehouse inventory</a>
                    </h3>
  
                    <a href="#" className="card-link">Read More</a>
                  </div>
  
                </div>
              </li>
  
              <li className="project-item">
                <div className="project-card">
  
                  <figure className="card-banner img-holder" style={{ '--width': 397, '--height': 352 }}>
                    <img src={img5}  width="397" height="352" loading="lazy"
                      alt="Warehouse inventory" className="img-cover"/>
                  </figure>
  
                  <button className="action-btn" aria-label="View image">
                    <ion-icon name="expand-outline"></ion-icon>
                  </button>
  
                  <div className="card-content">
                    <p className="card-tag">Logistics, Analytics</p>
  
                    <h3 className="h3">
                      <a href="#" className="card-title">Minimize Manufacturing</a>
                    </h3>
  
                    <a href="#" className="card-link">Read More</a>
                  </div>
  
                </div>
              </li>
  
              <li className="project-item">
                <div className="project-card">
  
                  <figure className="card-banner img-holder" style={{ '--width': 397, '--height': 352 }}>
                    <img src={img6}  width="397" height="352" loading="lazy"
                      alt="Warehouse inventory" className="img-cover"/>
                  </figure>
  
                  <button className="action-btn" aria-label="View image">
                    <ion-icon name="expand-outline"></ion-icon>
                  </button>
  
                  <div className="card-content">
                    <p className="card-tag">Warehousing , Distrbution</p>
  
                    <h3 className="h3">
                      <a href="#" className="card-title">Warehouse inventory</a>
                    </h3>
  
                    <a href="#" className="card-link">Read More</a>
                  </div>
  
                </div>
              </li>
  
              <li className="project-item">
                <div className="project-card">
  
                  <figure className="card-banner img-holder" style={{ '--width': 397, '--height': 352 }}>
                    <img src={img7}  width="397" height="352" loading="lazy"
                      alt="Warehouse inventory" className="img-cover"/>
                  </figure>
  
                  <button className="action-btn" aria-label="View image">
                    <ion-icon name="expand-outline"></ion-icon>
                  </button>
  
                  <div className="card-content">
                    <p className="card-tag">Logistics, Analytics</p>
  
                    <h3 className="h3">
                      <a href="#" className="card-title">Minimize Manufacturing</a>
                    </h3>
  
                    <a href="#" className="card-link">Read More</a>
                  </div>
  
                </div>
              </li>
  
            </ul>
  
          </div>
        </section>
  
  
  
  
  
  
        <section className="section blog" aria-label="blog" id="blog">
          <div className="container">
  
            <p className="section-subtitle">Our Blogs</p>
  
            <h2 className="h2 section-title">Recent news & events</h2>
  
            <p className="section-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since
              the when an
              printer took.
            </p>
  
            <ul className="blog-list grid-list">
  
              <li>
                <div className="blog-card">
  
                  <figure className="card-banner img-holder" style={{ '--width': 770, '--height': 500 }} >
                    <img src={blog1}  width="770" height="500" loading="lazy"
                      alt="At the end of the day, going forward, a new normal that has evolved from. your only logistic partner."
                      className="img-cover"/>
                  </figure>
  
                  <div className="card-content">
  
                    <time className="card-meta" datetime="2022-08-02">
                      <span className="span">02</span> Aug
                    </time>
  
                    <h3 className="h3 card-title">
                      <a href="#">
                        At the end of the day, going forward, a new normal that has evolved from. your only logistic
                        partner.
                      </a>
                    </h3>
  
                    <p className="card-text">
                      New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit. typesetting
                      industry the standard
                      dummy text ever since the when an printer.
                    </p>
  
                    <a href="#" className="btn-link">
                    <ArrowForwardIosIcon/>
  
                      <span className="span">Read More</span>
                    </a>
  
                  </div>
  
                </div>
              </li>
  
              <li>
                <div className="blog-card">
  
                  <figure className="card-banner img-holder" style={{ '--width': 770, '--height': 500 }}>
                    <img src={blog2}  width="770" height="500" loading="lazy"
                      alt="Going forward, a new normal that has evolved from generation. moving your products across all borders."
                      className="img-cover"/>
                  </figure>
  
                  <div className="card-content">
  
                    <time className="card-meta" datetime="2022-08-21">
                      <span className="span">21</span> Aug
                    </time>
  
                    <h3 className="h3 card-title">
                      <a href="#">
                        Going forward, a new normal that has evolved from generation. moving your products across all
                        borders.
                      </a>
                    </h3>
  
                    <p className="card-text">
                      New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit. typesetting
                      industry the standard
                      dummy text ever since the when an printer.
                    </p>
  
                    <a href="#" className="btn-link">
                    <ArrowForwardIosIcon/>
  
                      <span className="span">Read More</span>
                    </a>
  
                  </div>
  
                </div>
              </li>
  
            </ul>
  
          </div>
        </section>
        
  
  
  
  
        <iframe id='cont'
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d10350.975598510533!2d7.746633393133448!3d36.902558292209854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle%20maps!5e0!3m2!1sen!2sdz!4v1684106576368!5m2!1sen!2sdz"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
  
        <section className="section newsletter" aria-label="newsletter">
          <div className="container">
  
      
  
            <div >
  
              <h2 className="h2 section-title">S'abonner pour les offres et les actualités</h2>
  
              <form action="" className="newsletter-form">
                <input type="email" name="email_address" placeholder="Enter Your Email" aria-label="email"
                  className="email-field"/>
  
                <button type="submit" className="newsletter-btn">Subscribe Now</button>
              </form>
  
            </div>

            
  
          </div>

          
        </section>
  
      </article>
    </main>
  

    <footer className="footer">
      <div className="container">
  
        <div className="footer-top section">
  
          <div className="footer-brand">
  
            <a href="#" className="logo">Lipsan</a>
  
            <p className="footer-text">
            Contactez-nous dès aujourd'hui pour découvrir nos services exceptionnels. Nous sommes là pour répondre à toutes vos questions et vous aider à concrétiser vos projets
            </p>
  
            <ul className="social-list">

              <li>
                <a href="#" className="social-link">
                  <FacebookIcon/>
                </a>
              </li>
  
              <li>
                <a href="#" className="social-link">
                <WhatsAppIcon/>

                </a>
              </li>
  
              <li>
                <a href="#" className="social-link">
                <InstagramIcon/>

                </a>
              </li>
  
              <li>
                <a href="#" className="social-link">
                <PhoneIcon/>

                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                <EmailIcon/>

                </a>
              </li>
  
            </ul>
  
          </div>
  
          <ul className="footer-list">
  
            <li>
              <p className="footer-list-title">Quick Links</p>
            </li>
  
            <li>
              <a href="#" className="footer-link">À PROPOS</a>
            </li>
  
            <li>
              <a href="#" className="footer-link">Services</a>
            </li>
  
            <li>
              <a href="#" className="footer-link">Blog</a>
            </li>
  
            <li>
              <a href="#" className="footer-link">NOS CLIENTS</a>
            </li>
  
            <li>
              <a href="#" className="footer-link">Contact Us</a>
            </li>
  
          </ul>
  
          <ul className="footer-list">
  
            <li>
              <p className="footer-list-title">Services</p>
            </li>
  
            <li>
              <a href="#" className="footer-link"> Lipsan Security</a>
            </li>
  
            <li>
              <a href="#" className="footer-link">Lipsan Lift</a>
            </li>
  
            <li>
              <a href="#" className="footer-link">Lipsan Sat</a>
            </li>
  
            <li>
              <a href="#" className="footer-link">Lipsan Smart</a>
            </li>
  
  
          </ul>
  
   
  
        </div>
  
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2023 Lipsan. All Rights Reserved by <a href="#" className="copyright-link">Lipsan</a>
          </p>
        </div>
  
      </div>
    </footer>
  
  
  
  

    <a href="#top" className="back-top-btn" aria-label="Back to top" >
      <KeyboardArrowUpIcon/>
    </a>
  
  
  
  



  
  </>
  );
}

export default App;
