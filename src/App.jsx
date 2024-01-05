/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import shape1 from "./assets/images/hero-shape.png";
import img1 from "./assets/images/about-banner.jpg";
import shape2 from "./assets/images/about-shape-1.png";
import img2 from "./assets/c1.png";
import img3 from "./assets/c2.png";
import img4 from "./assets/c3.png";
import img5 from "./assets/c4.png";
import img6 from "./assets/c5.png";
import img7 from "./assets/c6.png";

import icon1 from "./assets/images/feature-icon-1.png";
import icon2 from "./assets/images/feature-icon-2.png";
import icon3 from "./assets/images/feature-icon-3.png";

import blog1 from "./assets/images/blog-1.jpg";
import blog2 from "./assets/images/blog-2.jpg";

import Modal from "./Modal.jsx";

import bg01 from "./assets/images/newsletter-banner.png";

import bg from "./assets/images/1.png";

import L from "./assets/L1.png";
import Lb from "./assets/L2.png";
import LW from "./assets/lip.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import shape3 from "./assets/images/about-shape-2.png";
import logo from "./assets/logy.png";
import SegmentIcon from "@mui/icons-material/Segment";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { navBarItem, featureCard } from "./App.helper.js";

function App() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("[data-header]");
      // const backTopBtn = document.querySelector("[data-back-top-btn]");

      if (window.scrollY >= 100) {
        header.classList.add("active");
        // backTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        // backTopBtn.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [open, setOpen] = useState(false);

  const [clickedText, setClickedText] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };
  const handleModal = (num) => {
    setOpen(true);
    setClickedText(num);
  };

  return (
    <>
      <header
        className={`header ${isHeaderActive ? "active" : ""}`}
        data-header
      >
        <div className="container">
          <h1>
            <a href="#" className="logo">
              <img className="svg" src={logo} alt="" />
            </a>
          </h1>

          <nav className={`navbar ${isNavActive ? "active" : ""}`} data-navbar>
            <div className="navbar-top">
              <a href="#" className="logo">
                <h3>Lipsan</h3>
              </a>

              <button
                className="nav-close-btn"
                aria-label="Close menu"
                onClick={toggleNav}
              >
                <CloseIcon />
              </button>
            </div>

            <ul className="navbar-list">
              {navBarItem.map((item, index) => (
                <li key={index} className="navbar-item">
                  <a
                    href={item.href}
                    className="navbar-link"
                    onClick={toggleNav}
                  >
                    <span>{item.name}</span>
                    <ion-icon name="chevron-forward"></ion-icon>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-contact">
            <div className="contact-icon">
              <ion-icon name="call-outline"></ion-icon>
            </div>
          </div>

          <button
            className="nav-open-btn"
            aria-label="Open menu"
            onClick={toggleNav}
            data-nav-toggler
          >
            <SegmentIcon className="open-icon" />
          </button>

          <div
            className="overlay"
            data-nav-toggler
            data-overlay
            onClick={toggleNav}
          ></div>
        </div>
      </header>

      <main>
        <article>
          <section className="section hero" aria-label="home" id="home">
            <div className="container">
              <div className="hero-content">
                <h2 className="h1 hero-title">
                  <span className="span">Lipsan </span>
                </h2>
                <p className="hero-text">
                  Quand l'expertise rencontre l'engagement
                </p>
                <a href="#service" className="btn-outline">
                  Découvrir nos services
                </a>
                <img
                  src={shape1}
                  width="116"
                  height="116"
                  loading="lazy"
                  className="hero-shape shape-1"
                />
                <img
                  src={shape1}
                  width="116"
                  height="116"
                  loading="lazy"
                  className="hero-shape shape-2"
                />
              </div>
            </div>
          </section>

          <section className="section about" id="about" aria-label="about">
            <div className="container">
              <figure
                className="about-banner img-holder"
                style={{ "--width": "400px", "--height": "720px" }}
              >
                <img
                  src={img1}
                  width="400"
                  height="720"
                  loading="lazy"
                  alt=""
                  className="img-cover"
                />

                <img
                  src={LW}
                  width="260"
                  height="170"
                  loading="lazy"
                  alt=""
                  className="abs-img abs-img-1"
                />
              </figure>

              <div className="about-content">
                <h2 className="h2 section-title"> Qui sommes nous !</h2>

                <p className="section-text">
                  La société LIPSAN solution apporte à votre entreprise une
                  offre unique au meilleur prix s'appuyant sur des compétences
                  élargies dans le secteur de la protection et confort validées
                  par l'expérience. L'offre globale s'appuie sur l'analyse des
                  besoins et l'étude du site, la conception et la mise en œuvre
                  sont renforcées par une offre d'équipements professionnels
                  d'une qualité exceptionnelle issus des meilleurs constructeurs
                </p>

                <p className="section-subtitle">Nos services :</p>

                <ul className="about-list">
                  <li className="about-item">
                    <div className="about-icon">
                      <ArrowForwardIosIcon />
                    </div>

                    <p className="about-text">
                      <strong>Montage et maintenance ascenseur</strong>
                    </p>
                  </li>

                  <li className="about-item">
                    <div className="about-icon">
                      <ArrowForwardIosIcon />
                    </div>

                    <p className="about-text">
                      <strong>
                        Télésurveillance alarme anti intrusion et anti incendie{" "}
                      </strong>
                    </p>
                  </li>

                  <li className="about-item">
                    <div className="about-icon">
                      <ArrowForwardIosIcon />
                    </div>

                    <p className="about-text">
                      <strong>Parabol Collective et station numérique</strong>
                    </p>
                  </li>

                  <li className="about-item">
                    <div className="about-icon">
                      <ArrowForwardIosIcon />
                    </div>

                    <p className="about-text">
                      <strong>Contrôle d’accès et intercom</strong>
                    </p>
                  </li>

                  <li className="about-item">
                    <div className="about-icon">
                      <ArrowForwardIosIcon />
                    </div>

                    <p className="about-text">
                      <strong>
                        Reseau informatique torsadé et fibre optique
                      </strong>
                    </p>
                  </li>
                  <br />
                  <p className="section-subtitle sec ">
                    LIPSAN solution vous propose son expertise et propose
                    plusieurs modalités d'intervention :
                  </p>

                  <li className="about-item">
                    <div className="about-icon">
                      <ArrowForwardIosIcon />
                    </div>

                    <p className="about-text">
                      <strong>Analyse conception et installation</strong>
                    </p>
                  </li>

                  <li className="about-item">
                    <div className="about-icon">
                      <ArrowForwardIosIcon />
                    </div>

                    <p className="about-text">
                      <strong>Suivi et maintenance</strong>
                    </p>
                  </li>

                  <li className="about-item">
                    <div className="about-icon">
                      <ArrowForwardIosIcon />
                    </div>

                    <p className="about-text">
                      <strong>Conseil</strong>
                    </p>
                  </li>

                  <li className="about-item">
                    <div className="about-icon">
                      <ArrowForwardIosIcon />
                    </div>

                    <p className="about-text">
                      <strong>Innovation et expérience</strong>
                    </p>
                  </li>
                </ul>

                <a href="#" className="btn">
                  Learn More
                </a>
              </div>
            </div>
          </section>

          <section
            className="section service"
            id="service"
            aria-label="service"
          >
            <div className="container">
              <p className="section-subtitle">Tous nos services </p>

              <h2 className="h2 section-title sectitle">
                Fiables pour nos services.
              </h2>

              <p className="section-text"></p>

              <ul className="service-list grid-list">
                {featureCard.map((item, index) => (
                  <li key={index}>
                    <div className="service-card sc">
                      <div className="card-icon">
                        <img
                          src={item.img.icon}
                          width="70"
                          height="70"
                          loading="lazy"
                          alt="Truck"
                        />
                      </div>

                      <h3 className="h3 card-title">
                        <span className="span">0{item.id + 1}</span>{" "}
                        {item.CardTitle}
                      </h3>

                      <p className="card-text">{item.CardText}</p>

                      <a
                        onClick={() => handleModal(item.id)}
                        href="#"
                        className="btn-link"
                      >
                        <ArrowForwardIosIcon />
                        <span className="span light">View Detail</span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <Modal
              open={open}
              handleClose={handleClose}
              clickedText={clickedText}
            />
          </section>

          <section className="section feature" aria-label="feature">
            <div className="container">
              <div className="title-wrapper">
                <div>
                  <p className="section-subtitle">
                    Ce qui nous rend différents
                  </p>

                  <h2 className="h2 section-title"> Vipsan en trois mots</h2>

                  <p className="section-text"></p>
                </div>

                <a href="#" className="btn">
                  Read More
                </a>
              </div>

              <ul className="feature-list grid-list">
                <li>
                  <div
                    className="feature-card"
                    style={{ "--card-number": "'01'" }}
                  >
                    <div className="card-icon">
                      <img src={icon1} width="72" height="91" alt="" />
                    </div>

                    <h3 className="h3 card-title">
                      Fournisseur de Solutions Réseau
                    </h3>

                    <p className="card-text">
                      Expert en réseaux fiables et évolutifs pour entreprises,
                      offrant des solutions haut débit sur mesure, surveillance
                      proactive et maintenance continue.
                    </p>

                    <a href="#" className="card-btn" aria-label="Read more">
                      <ArrowForwardIosIcon />
                    </a>
                  </div>
                </li>

                <li>
                  <div
                    className="feature-card"
                    style={{ "--card-number": "'02'" }}
                  >
                    <div className="card-icon">
                      <img src={icon2} width="94" height="94" alt="" />
                    </div>

                    <h3 className="h3 card-title">
                      Expertise en Technologie de Fibre Optique
                    </h3>

                    <p className="card-text">
                      Spécialiste des connexions ultra-rapides en fibre optique
                      pour données volumineuses, garantissant stabilité et
                      performance maximale du réseau.
                    </p>

                    <a href="#" className="card-btn" aria-label="Read more">
                      <ArrowForwardIosIcon />
                    </a>
                  </div>
                </li>

                <li>
                  <div
                    className="feature-card"
                    style={{ "--card-number": "'03'" }}
                  >
                    <div className="card-icon">
                      <img src={icon3} width="93" height="93" alt="" />
                    </div>

                    <h3 className="h3 card-title">
                      Fournisseur Professionnel de Solutions de Surveillance
                    </h3>

                    <p className="card-text">
                      Installe des systèmes de vidéosurveillance sur mesure,
                      fiables et durables, avec service après-vente complet pour
                      une sécurité renforcée.
                    </p>

                    <a href="#" className="card-btn" aria-label="Read more">
                      <ArrowForwardIosIcon />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="clt" className="section project" aria-label="project">
            <div className="container">
              <p className="section-subtitle">PROJETS</p>

              <h2 className="h2 section-title">NOS CLIENTS</h2>

              <p className="section-text">La Force de Notre Réussite</p>

              <ul className="project-list">
                <li className="project-item">
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": 397, "--height": 352 }}
                    >
                      <img
                        src={img2}
                        width="397"
                        height="352"
                        loading="lazy"
                        alt="Warehouse inventory"
                        className="img-cover"
                      />
                    </figure>

                    <button className="action-btn" aria-label="View image">
                      <ion-icon name="expand-outline"></ion-icon>
                    </button>

                    <div className="card-content">
                      <p className="card-tag">ascenceur , lift</p>

                      <h3 className="h3">
                        <a href="#" className="card-title">
                          NAFTAL
                        </a>
                      </h3>

                      <a href="#" className="card-link">
                        Read More
                      </a>
                    </div>
                  </div>
                </li>

                <li className="project-item">
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": 397, "--height": 352 }}
                    >
                      <img
                        src={img3}
                        width="397"
                        height="352"
                        loading="lazy"
                        alt="Warehouse inventory"
                        className="img-cover"
                      />
                    </figure>

                    <button className="action-btn" aria-label="View image">
                      <ion-icon name="expand-outline"></ion-icon>
                    </button>

                    <div className="card-content">
                      <p className="card-tag">ascenceur , lift</p>

                      <h3 className="h3">
                        <a href="#" className="card-title">
                          HOTEL RYM EL DJAMIL
                        </a>
                      </h3>

                      <a href="#" className="card-link">
                        Read More
                      </a>
                    </div>
                  </div>
                </li>

                <li className="project-item">
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": 397, "--height": 352 }}
                    >
                      <img
                        src={img4}
                        width="397"
                        height="352"
                        loading="lazy"
                        alt="Warehouse inventory"
                        className="img-cover"
                      />
                    </figure>

                    <button className="action-btn" aria-label="View image">
                      <ion-icon name="expand-outline"></ion-icon>
                    </button>

                    <div className="card-content">
                      <p className="card-tag">ascenceur , lift</p>

                      <h3 className="h3">
                        <a href="#" className="card-title">
                          SOUHA
                        </a>
                      </h3>

                      <a href="#" className="card-link">
                        Read More
                      </a>
                    </div>
                  </div>
                </li>

                <li className="project-item">
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": 397, "--height": 352 }}
                    >
                      <img
                        src={img5}
                        width="397"
                        height="352"
                        loading="lazy"
                        alt="Warehouse inventory"
                        className="img-cover"
                      />
                    </figure>

                    <button className="action-btn" aria-label="View image">
                      <ion-icon name="expand-outline"></ion-icon>
                    </button>

                    <div className="card-content">
                      <p className="card-tag">ascenceur , lift</p>

                      <h3 className="h3">
                        <a href="#" className="card-title">
                          ALG POSTE
                        </a>
                      </h3>

                      <a href="#" className="card-link">
                        Read More
                      </a>
                    </div>
                  </div>
                </li>

                <li className="project-item">
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": 397, "--height": 352 }}
                    >
                      <img
                        src={img6}
                        width="397"
                        height="352"
                        loading="lazy"
                        alt="Warehouse inventory"
                        className="img-cover"
                      />
                    </figure>

                    <button className="action-btn" aria-label="View image">
                      <ion-icon name="expand-outline"></ion-icon>
                    </button>

                    <div className="card-content">
                      <p className="card-tag">ascenceur , lift</p>

                      <h3 className="h3">
                        <a href="#" className="card-title">
                          HOTEL D ORIENT{" "}
                        </a>
                      </h3>

                      <a href="#" className="card-link">
                        Read More
                      </a>
                    </div>
                  </div>
                </li>

                <li className="project-item">
                  <div className="project-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": 397, "--height": 352 }}
                    >
                      <img
                        src={img7}
                        width="397"
                        height="352"
                        loading="lazy"
                        alt="Warehouse inventory"
                        className="img-cover"
                      />
                    </figure>

                    <button className="action-btn" aria-label="View image">
                      <ion-icon name="expand-outline"></ion-icon>
                    </button>

                    <div className="card-content">
                      <p className="card-tag">ascenceur , lift</p>

                      <h3 className="h3">
                        <a href="#" className="card-title">
                          CITA
                        </a>
                      </h3>

                      <a href="#" className="card-link">
                        Read More
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <iframe
            id="cont"
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d550.1909097581283!2d7.748237814920299!3d36.893744761399034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f007c9c29ea47b%3A0x19f603658870cffa!2sRue%20Bouzerad%20Hocine%2C%20Annaba%2C%20Algeria!5e1!3m2!1sen!2sfr!4v1700647002840!5m2!1sen!2sfr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <section className="section newsletter" aria-label="newsletter">
            <div className="container">
              <div className="yl">
                <ul className="social-list">
                  <li>
                    <a href="#" className="social-link">
                      <FacebookIcon />
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link">
                      <WhatsAppIcon />
                    </a>
                  </li>

                  <li>
                    <a href="tel:2130560342531" className="social-link">
                      <PhoneIcon />
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto: b.ahmed@lipsan-solution.com"
                      className="social-link"
                    >
                      <EmailIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-top section">
            <div className="footer-brand">
              <a href="#" className="logo">
                Lipsan
              </a>

              <p className="footer-text">
                Contactez-nous dès aujourd'hui pour découvrir nos services
                exceptionnels. Nous sommes là pour répondre à toutes vos
                questions et vous aider à concrétiser vos projets
              </p>
            </div>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Quick Links</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <PhoneIcon /> +213 560 34 25 31
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <PhoneIcon /> +213 773 12 11 81
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <EmailIcon /> b.ahmed@lipsan-solution.com
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  {" "}
                  <FacebookIcon /> SARL LIPSAN SOLUTIO
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  01 rue zemouri ahmed , Annaba Kalitoussa berrahal , Annaba Rue
                  bouzerad Hocine , Annaba
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Services</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  {" "}
                  Access control{" "}
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Lipsan Lift
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Lipsan Sat
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Intelligence digitale
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              &copy; 2023 Lipsan. All Rights Reserved by{" "}
              <a href="#" className="copyright-link">
                Lipsan
              </a>
            </p>
          </div>
        </div>
      </footer>

      <a href="#top" className="back-top-btn" aria-label="Back to top">
        <KeyboardArrowUpIcon />
      </a>
    </>
  );
}

export default App;
