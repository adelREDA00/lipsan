import * as React from 'react';

import Dialog from '@mui/material/Dialog';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import bg4 from "./assets/6.png"
import bg1 from "./assets/3.png"
import bg2 from "./assets/4.png"
import bg3 from "./assets/5.png"




const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({open,handleClose,clickedText}) {
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
        Notre entreprise est spécialisée dans la 
fourniture d'équipements pour les ascenseurs. 
Nous fournissons une large gamme de 
produits, allant des pièces de rechange aux 
systèmes d'ascenseurs complets. Nous 
sommes fiers de notre expertise dans 
l'industrie de l'ascenseur, avec une équipe de 
professionnels qualifiés qui travaillent dur pour 
répondre aux besoins de nos clients.
<br />
<br />

Nous offrons une large gamme de services 
pour nos clients, y compris la maintenance, la 
réparation, la modernisation et la conception 
d'ascenseurs. Notre équipe de techniciens 
expérimentés est capable de fournir des 
services de maintenance réguliers pour 
maintenir la performance de vos ascenseurs et 
prolonger leur durée de vie. Nous offrons 
également des services de réparation pour 
résoudre tout problème que vous pourriez 
rencontrer avec vos ascenseurs.
<br /><br />
Si vous envisagez de moderniser vos ascenseurs 
pour les rendre plus efficaces et plus sûrs, notre 
équipe peut vous aider. Nous proposons une 
gamme complète de solutions de modernisation 
pour les ascenseurs existants, afin d'améliorer les 
performances, la sécurité et la fiabilité de vos ascenseurs. Nous sommes également en mesure de 
concevoir et de fournir des ascenseurs sur mesure 
pour répondre aux besoins spécifiques de nos 
clients.
<br /><br />
Notre objectif est de fournir des produits et des services de qualité supérieure à nos clients, avec un engagement envers l'excellence et la satisfaction du 
client. Nous sommes  <strong> passionnés par notre métier et 
nous nous efforçons de fournir un service exceptionnel à chaque fois</strong> . Si vous avez des questions sur 
nos services ou si vous souhaitez en savoir plus sur 
notre entreprise, n'hésitez pas à nous contacter

        </p>
      </div>
    ),
   1: (
    <div className="service-card">
  
  <div className="card-icon det">
      <img src={bg2} width="120" height="120" loading="lazy" alt="Ship"/>
    </div>

    <h3 className="h3 card-title det">
      <span className="span">02</span> Lipsan Sat
    </h3>
    <br /> 
    <p className="card-text">
    Notre entreprise est fière de proposer un 
service d'installation de la télévision par 
satellite de qualité supérieure. Nous 
sommes conscients de l'importance de la 
télévision pour de nombreux foyers et 
nous nous engageons à fournir un service rapide et efficace pour répondre aux 
besoins de nos clients.<br /><br /> À votre écoute, 
nous travaillons en mode projet, en mettant à votre disposition nos compétences 
techniques affin d’élaborer ensemble une 
offresur-mesure.Notre équipe de professionnels expérimentés est capable de 
fournir des services d'installation pour 
une large gamme de systèmes de télévision par satellite, y compris les systèmes 
de télévision par satellite numérique.Nous nous efforçons de fournir un 
service de haute qualité, en utilisant les 
dernières technologies pour garantir des 
performances optimales. <br /><br />

Nous offrons une gamme complète de services pour nos clients, y compris <strong>l'installation d'antennes paraboliques, de décodeurs 
et de systèmes de câblage pour la télévision 
par satellite</strong> . Nous sommes également en 
mesure de fournir des conseils d'experts sur 
les produits et les services pour aider nos 
clients à trouver la meilleure solution pour 
leurs besoins de télévision par satellite.<br />Si 
vous envisagez d'installer un système de 
télévision par satellite chez vous ou si vous 
avez des questions sur nos services, n'hésitez pas à nous contacter. Nous serons ravis 
de discuter de vos besoins en matière de 
télévision par satellite et de vous offrir une 
solution sur mesure pour répondre à vos besoins
 
    </p>

 

  </div>
    ),

    2: (
      <div className="service-card">
  
  <div className="card-icon det">
        <img src={bg3} width="120" height="120" loading="lazy" alt="Airplane"/>
      </div>

      <h3 className="h3 card-title det">
        <span className="span">03</span>  Intelligence digitale
      </h3>
      <br />
      <p className="card-text">
      Notre entreprise est spécialisée dans l'équipement de maisons intelligentes, offrant une gamme complète de solutions technologiques pour améliorer les maisons et simplifier la vie quotidienne. Nous sommes passionnés par la technologie et nous avons pour mission de proposer des solutions innovantes pour rendre les maisons plus efficaces, plus pratiques et plus confortables. <br /><br />
      <strong>Notre équipe d'experts en domotique possède une vaste expérience dans l'installation de solutions intelligentes pour les maisons.</strong> 
 Nous sommes fiers de notre expertise et de notre capacité à comprendre les besoins spécifiques de chaque client. Nous travaillons en étroite collaboration avec nos clients pour créer des solutions personnalisées qui répondent à leurs besoins et à leur style de vie. <br /><br />
Nous offrons une large gamme de produits pour la maison intelligente, tels que des systèmes de domotique, des capteurs de mouvement, des thermostats intelligents, des caméras de sécurité, des interrupteurs connectés, des assistants vocaux et bien plus encore. Nous ne proposons que les meilleurs produits de qualité supérieure, conçus pour offrir des performances exceptionnelles, une durabilité et une fiabilité à long terme. <br /><br />
Notre entreprise est également fière de ses services d'installation professionnels. Nous nous engageons à fournir des services de qualité supérieure et à garantir la satisfaction de nos clients. Nous sommes également disponibles pour offrir des services de soutien après-vente, y compris la maintenance et la réparation.<br /><br />
En résumé, notre entreprise est le choix idéal pour ceux qui cherchent à rendre leur maison plus intelligente. Nous sommes passionnés par la technologie et nous sommes fiers de notre expertise dans ce domaine. Nous sommes convaincus que nos produits et services offriront à nos clients une expérience de maison plus efficace, plus pratique et plus confortable. Contactez-nous dès aujourd'hui pour en savoir plus sur nos produits et services pour la maison intelligente.

      </p>

    

    </div>
    ),

    3: (
      <div className="service-card">
  
                  <div className="card-icon det">
                    <img src={bg4} width="120" height="120" loading="lazy" alt="Train"/>
                  </div>
  
                  <h3 className="h3 card-title det">
                    <span className="span">04</span> Access control
                  </h3>
                  <br />
                  <p className="card-text">
                  Notre entreprise est dédiée à la sécurité et à la tranquillité d'esprit de nos clients. 
Spécialisés dans le contrôle d'accès, nous offrons des solutions de pointe pour garantir que seules les personnes autorisées entrent dans vos locaux. Que ce soit 
pour un immeuble résidentiel, un complexe commercial ou une entreprise, nous 
mettons en place des systèmes de contrôle d'accès fiables et personnalisés.Nos 
technologies de pointe, combinées à notre expertise, garantissent une gestion 
efficace des accès. De la biométrie aux cartes d'accès, en passant par les systèmes 
de vidéosurveillance, nous offrons une gamme complète de solutions pour 
répondre à vos besoins spéciffiques. <br /><br />
 <strong>La sécurité est notre priorité </strong> , et nous nous engageons à maintenir un niveau élevé 
de protection pour vous, vos biens et vos employés. Faites conffiance à notre 
équipe expérimentée pour assurer un contrôle d'accès sans faille. Contactez-nous 
dès aujourd'hui pour discuter de la meilleure solution pour votre entreprise .Notre 
entreprise est votre partenaire de conffiance pour tous vos besoins en matière de 
services réseau. Nous comprenons l'importance cruciale de la connectivité et de la 
communication dans le monde moderne des affaires.<br /><br /> C'est pourquoi nous offrons 
une gamme complète de services réseau pour répondre à vos exigences spécifiques.Que vous soyez une petite entreprise cherchant à améliorer votre 
infrastructure réseau ou une grande entreprise ayant besoin d'une mise à l'échelle 
et d'une gestion réseau sophistiquée, nous avons l'expertise nécessaire pour vous 
soutenir. Notre équipe expérimentée travaille en étroite collaboration avec vous 
pour concevoir, déployer et maintenir des solutions réseau robustes et évolutives.<br /><br />La fiabilité et la performance sont au cœur de notre approche. Nous veillons 
à ce que votre réseau fonctionne sans interruption, vous permettant ainsi de 
rester concentré sur votre activité principale. Avec notre support technique dédié, 
vous pouvez avoir l'assurance que votre infrastructure réseau est entre de bonnes 
mains.Faites conffiance à notre expertise en services réseau pour stimuler votre entreprise vers de nouveaux sommets. Contactez-nous aujourd'hui pour discuter de 
la manière dont nous pouvons renforcer votre réseau.
                  </p>
  
          
  
                </div>
    ),
    // Add JSX content for Text 3 and Text 4 as needed
  };

  return (
    <div>
  
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative',backgroundColor:'#253243' }}>
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