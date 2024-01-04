/* eslint-disable react/prop-types */
import * as React from "react";

import Dialog from "@mui/material/Dialog";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import bg4 from "./assets/6.png";
import bg1 from "./assets/3.png";
import bg2 from "./assets/4.png";
import bg3 from "./assets/5.png";

/// lift images
import lift1 from './assets/lift/lift1.jpeg';
import lift2 from "./assets/lift/lift2.jpeg";
import lift3 from './assets/lift/lift3.jpeg';
import lift4 from "./assets/lift/lift4.jpeg";
import lift5 from './assets/lift/lift5.jpeg';
import lift6 from "./assets/lift/lift6.jpeg";
import lift7 from "./assets/lift/lift7.jpeg";

const imageLift = [lift1, lift2, lift3, lift4, lift5, lift6, lift7];

// Network images
import Net1 from './assets/Network/Net1.jpeg';
import Net2 from "./assets/Network/Net2.jpeg";
import Net3 from "./assets/Network/Net3.jpeg";
import Net4 from "./assets/Network/Net4.jpeg";
import Net5 from "./assets/Network/Net5.jpeg";
import Net6 from "./assets/Network/Net6.jpeg";

const imageNet = [Net1, Net2, Net3, Net4, Net5, Net6];

// Sat images
import Sat1 from './assets/Sat/Sat1.jpeg';
import Sat2 from "./assets/Sat/Sat2.jpeg";
import Sat3 from "./assets/Sat/Sat3.jpeg";

const imageSat = [Sat1, Sat2, Sat3];

// intelggence digital
import IT1 from './assets/IT/IT1.jpeg';
import IT2 from "./assets/IT/IT2.jpeg";
import IT3 from "./assets/IT/IT3.jpeg";

const imageIT = [IT1, IT2, IT3];

// ACCESS CONTROLL
import ACC1 from './assets/ACCESS/ACCESS1.jpeg';
import ACC2 from "./assets/ACCESS/ACCESS2.jpeg";
import ACC3 from "./assets/ACCESS/ACCESS3.jpeg";

const imageAcces = [ACC1, ACC2, ACC3];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ open, handleClose, clickedText }) {
  const contentMap = {
    0: (
      <div className="service-card">
        <div className="card-icon det">
          <img src={bg1} width="120" height="120" loading="lazy" alt="Truck" />
        </div>
        <h3 className="h3 card-title det">
          <span className="span">01</span> Lipsan Lift
        </h3>
        <br />
        <p className="card-text det">
          Notre entreprise est spécialisée dans la fourniture d&#39;équipements
          pour les ascenseurs. Nous fournissons une large gamme de produits,
          allant des pièces de rechange aux systèmes d&#39;ascenseurs complets.
          Nous sommes fiers de notre expertise dans l&#39;industrie de
          l&#39;ascenseur, avec une équipe de professionnels qualifiés qui
          travaillent dur pour répondre aux besoins de nos clients.
          <br />
          <br />
          Nous offrons une large gamme de services pour nos clients, y compris
          la maintenance, la réparation, la modernisation et la conception
          d&#39;ascenseurs. Notre équipe de techniciens expérimentés est capable
          de fournir des services de maintenance réguliers pour maintenir la
          performance de vos ascenseurs et prolonger leur durée de vie. Nous
          offrons également des services de réparation pour résoudre tout
          problème que vous pourriez rencontrer avec vos ascenseurs.
          <br />
          <br />
          Si vous envisagez de moderniser vos ascenseurs pour les rendre plus
          efficaces et plus sûrs, notre équipe peut vous aider. Nous proposons
          une gamme complète de solutions de modernisation pour les ascenseurs
          existants, afin d&#39;améliorer les performances, la sécurité et la
          fiabilité de vos ascenseurs. Nous sommes également en mesure de
          concevoir et de fournir des ascenseurs sur mesure pour répondre aux
          besoins spécifiques de nos clients.
          <br />
          <br />
          Notre objectif est de fournir des produits et des services de qualité
          supérieure à nos clients, avec un engagement envers l&#39;excellence
          et la satisfaction du client. Nous sommes{" "}
          <strong>
            {" "}
            passionnés par notre métier et nous nous efforçons de fournir un
            service exceptionnel à chaque fois
          </strong>{" "}
          . Si vous avez des questions sur nos services ou si vous souhaitez en
          savoir plus sur notre entreprise, n&#39;hésitez pas à nous contacter
        </p>
        <div className="imageList">
          {imageLift.map((item, index) => (
            <img key={index} src={item} height="200" width="200" />
          ))}
        </div>
      </div>
    ),
    1: (
      <div className="service-card">
        <div className="card-icon det">
          <img src={bg2} width="120" height="120" loading="lazy" alt="Ship" />
        </div>

        <h3 className="h3 card-title det">
          <span className="span">02</span> Lipsan Sat
        </h3>
        <br />
        <p className="card-text">
          Notre entreprise est fière de proposer un service d&#39;installation
          de la télévision par satellite de qualité supérieure. Nous sommes
          conscients de l&#39;importance de la télévision pour de nombreux
          foyers et nous nous engageons à fournir un service rapide et efficace
          pour répondre aux besoins de nos clients.
          <br />
          <br /> À votre écoute, nous travaillons en mode projet, en mettant à
          votre disposition nos compétences techniques affin d’élaborer ensemble
          une offresur-mesure.Notre équipe de professionnels expérimentés est
          capable de fournir des services d&#39;installation pour une large
          gamme de systèmes de télévision par satellite, y compris les systèmes
          de télévision par satellite numérique.Nous nous efforçons de fournir
          un service de haute qualité, en utilisant les dernières technologies
          pour garantir des performances optimales. <br />
          <br />
          Nous offrons une gamme complète de services pour nos clients, y
          compris{" "}
          <strong>
            l&#39;installation d&#39;antennes paraboliques, de décodeurs et de
            systèmes de câblage pour la télévision par satellite
          </strong>{" "}
          . Nous sommes également en mesure de fournir des conseils
          d&#39;experts sur les produits et les services pour aider nos clients
          à trouver la meilleure solution pour leurs besoins de télévision par
          satellite.
          <br />
          Si vous envisagez d&#39;installer un système de télévision par
          satellite chez vous ou si vous avez des questions sur nos services,
          n&#39;hésitez pas à nous contacter. Nous serons ravis de discuter de
          vos besoins en matière de télévision par satellite et de vous offrir
          une solution sur mesure pour répondre à vos besoins
        </p>
        <div className="imageList">
          {imageSat.map((item, index) => (
            <img key={index} src={item} height="200" width="200" />
          ))}
        </div>
      </div>
    ),
    2: (
      <div className="service-card">
        <div className="card-icon det">
          <img
            src={bg3}
            width="120"
            height="120"
            loading="lazy"
            alt="Airplane"
          />
        </div>

        <h3 className="h3 card-title det">
          <span className="span">03</span> Intelligence digitale
        </h3>
        <br />
        <p className="card-text">
          Notre entreprise est spécialisée dans l&#39;équipement de maisons
          intelligentes, offrant une gamme complète de solutions technologiques
          pour améliorer les maisons et simplifier la vie quotidienne. Nous
          sommes passionnés par la technologie et nous avons pour mission de
          proposer des solutions innovantes pour rendre les maisons plus
          efficaces, plus pratiques et plus confortables. <br />
          <br />
          <strong>
            Notre équipe d&#39;experts en domotique possède une vaste expérience
            dans l&#39;installation de solutions intelligentes pour les maisons.
          </strong>
          Nous sommes fiers de notre expertise et de notre capacité à comprendre
          les besoins spécifiques de chaque client. Nous travaillons en étroite
          collaboration avec nos clients pour créer des solutions personnalisées
          qui répondent à leurs besoins et à leur style de vie. <br />
          <br />
          Nous offrons une large gamme de produits pour la maison intelligente,
          tels que des systèmes de domotique, des capteurs de mouvement, des
          thermostats intelligents, des caméras de sécurité, des interrupteurs
          connectés, des assistants vocaux et bien plus encore. Nous ne
          proposons que les meilleurs produits de qualité supérieure, conçus
          pour offrir des performances exceptionnelles, une durabilité et une
          fiabilité à long terme. <br />
          <br />
          Notre entreprise est également fière de ses services
          d&#39;installation professionnels. Nous nous engageons à fournir des
          services de qualité supérieure et à garantir la satisfaction de nos
          clients. Nous sommes également disponibles pour offrir des services de
          soutien après-vente, y compris la maintenance et la réparation.
          <br />
          <br />
          En résumé, notre entreprise est le choix idéal pour ceux qui cherchent
          à rendre leur maison plus intelligente. Nous sommes passionnés par la
          technologie et nous sommes fiers de notre expertise dans ce domaine.
          Nous sommes convaincus que nos produits et services offriront à nos
          clients une expérience de maison plus efficace, plus pratique et plus
          confortable. Contactez-nous dès aujourd&#39;hui pour en savoir plus
          sur nos produits et services pour la maison intelligente.
        </p>
        <div className="imageList">
          {imageIT.map((item, index) => (
            <img key={index} src={item} height="200" width="200" />
          ))}
        </div>
      </div>
    ),
    3: (
      <div className="service-card">
        <div className="card-icon det">
          <img src={bg4} width="120" height="120" loading="lazy" alt="Train" />
        </div>

        <h3 className="h3 card-title det">
          <span className="span">04</span> Access control
        </h3>
        <br />
        <p className="card-text">
          Notre entreprise est dédiée à la sécurité et à la tranquillité
          d&#39;esprit de nos clients. Spécialisés dans le contrôle d&#39;accès,
          nous offrons des solutions de pointe pour garantir que seules les
          personnes autorisées entrent dans vos locaux. Que ce soit pour un
          immeuble résidentiel, un complexe commercial ou une entreprise, nous
          mettons en place des systèmes de contrôle d&#39;accès fiables et
          personnalisés.Nos technologies de pointe, combinées à notre expertise,
          garantissent une gestion efficace des accès. De la biométrie aux
          cartes d&#39;accès, en passant par les systèmes de vidéosurveillance,
          nous offrons une gamme complète de solutions pour répondre à vos
          besoins spéciffiques. <br />
          <br />
          <strong>La sécurité est notre priorité </strong> , et nous nous
          engageons à maintenir un niveau élevé de protection pour vous, vos
          biens et vos employés. Faites conffiance à notre équipe expérimentée
          pour assurer un contrôle d&#39;accès sans faille. Contactez-nous dès
          aujourd&#39;hui pour discuter de la meilleure solution pour votre
          entreprise .Notre entreprise est votre partenaire de conffiance pour
          tous vos besoins en matière de services réseau. Nous comprenons
          l&#39;importance cruciale de la connectivité et de la communication
          dans le monde moderne des affaires.
          <br />
          <br /> C&#39;est pourquoi nous offrons une gamme complète de services
          réseau pour répondre à vos exigences spécifiques.Que vous soyez une
          petite entreprise cherchant à améliorer votre infrastructure réseau ou
          une grande entreprise ayant besoin d&#39;une mise à l&#39;échelle et
          d&#39;une gestion réseau sophistiquée, nous avons l&#39;expertise
          nécessaire pour vous soutenir. Notre équipe expérimentée travaille en
          étroite collaboration avec vous pour concevoir, déployer et maintenir
          des solutions réseau robustes et évolutives.
          <br />
          <br />
          La fiabilité et la performance sont au cœur de notre approche. Nous
          veillons à ce que votre réseau fonctionne sans interruption, vous
          permettant ainsi de rester concentré sur votre activité principale.
          Avec notre support technique dédié, vous pouvez avoir l&#39;assurance
          que votre infrastructure réseau est entre de bonnes mains.Faites
          conffiance à notre expertise en services réseau pour stimuler votre
          entreprise vers de nouveaux sommets. Contactez-nous aujourd&#39;hui
          pour discuter de la manière dont nous pouvons renforcer votre réseau.
        </p>
        <div className="imageList">
          {imageAcces.map((item, index) => (
            <img key={index} src={item} height="200" width="200" />
          ))}
        </div>
      </div>
    ),
    // Add JSX content for Text 3 and Text 4 as needed
    4: (
      <div className="service-card">
        <div className="card-icon det">
          <img src={bg4} width="120" height="120" loading="lazy" alt="Train" />
        </div>

        <h3 className="h3 card-title det">
          <span className="span">05</span> Network
        </h3>
        <br />
        <p className="card-text">##############</p>
        <div className="imageList">
          {imageNet.map((item, index) => (
            <img key={index} src={item} height="200" width="200" />
          ))}
        </div>
      </div>
    ),
    5: (
      <div className="service-card">
        <div className="card-icon det">
          <img src={bg4} width="120" height="120" loading="lazy" alt="Train" />
        </div>

        <h3 className="h3 card-title det">
          <span className="span">06</span> Protect
        </h3>
        <br />
        <p className="card-text">###############</p>
      </div>
    ),
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "#253243" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {contentMap[clickedText]}
      </Dialog>
    </div>
  );
}
