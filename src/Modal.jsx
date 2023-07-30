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
        Notre entreprise est spécialisée dans la fourniture d'équipements pour les ascenseurs. Nous fournissons une large gamme de produits, allant des pièces de rechange aux systèmes d'ascenseurs complets. Nous sommes fiers de notre expertise dans l'industrie de l'ascenseur, avec une équipe de professionnels qualifiés qui travaillent dur pour répondre aux besoins de nos clients. <br /> <br />
        <strong>Nous offrons une large gamme de services pour nos clients, y compris la maintenance, la réparation, la modernisation et la conception d'ascenseurs.</strong> 
 Notre équipe de techniciens expérimentés est capable de fournir des services de maintenance réguliers pour maintenir la performance de vos ascenseurs et prolonger leur durée de vie. Nous offrons également des services de réparation pour résoudre tout problème que vous pourriez rencontrer avec vos ascenseurs. <br /> <br />
Si vous envisagez de moderniser vos ascenseurs pour les rendre plus efficaces et plus sûrs, notre équipe peut vous aider. Nous proposons une gamme complète de solutions de modernisation pour les ascenseurs existants, afin d'améliorer les performances, la sécurité et la fiabilité de vos ascenseurs. Nous sommes également en mesure de concevoir et de fournir des ascenseurs sur mesure pour répondre aux besoins spécifiques de nos clients. <br /> <br />
Notre objectif est de fournir des produits et des services de qualité supérieure à nos clients, avec un engagement envers l'excellence et la satisfaction du client. Nous sommes passionnés par notre métier et nous nous efforçons de fournir un service exceptionnel à chaque fois. Si vous avez des questions sur nos services ou si vous souhaitez en savoir plus sur notre entreprise, n'hésitez pas à nous contacter

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
    Notre entreprise est fière de proposer un service d'installation de la télévision par satellite de qualité supérieure. Nous sommes conscients de l'importance de la télévision pour de nombreux foyers et nous nous engageons à fournir un service rapide et efficace pour répondre aux besoins de nos clients.
À votre écoute, nous travaillons en mode projet, en mettant à votre disposition nos compétences techniques afin d’élaborer ensemble une offre sur-mesure. <br /> <br />
<strong>Notre équipe de professionnels expérimentés est capable de fournir des services d'installation pour une large gamme de systèmes de télévision par satellite</strong> 
, y compris les systèmes de télévision par satellite numérique. 
Nous nous efforçons de fournir un service de haute qualité, en utilisant les dernières technologies pour garantir des performances optimales. <br /> <br />
Nous offrons une gamme complète de services pour nos clients, y compris l'installation d'antennes paraboliques, de décodeurs et de systèmes de câblage pour la télévision par satellite. Nous sommes également en mesure de fournir des conseils d'experts sur les produits et les services pour aider nos clients à trouver la meilleure solution pour leurs besoins de télévision par satellite. <br /> <br />
Si vous envisagez d'installer un système de télévision par satellite chez vous ou si vous avez des questions sur nos services, n'hésitez pas à nous contacter. Nous serons ravis de discuter de vos besoins en matière de télévision par satellite et de vous offrir une solution sur mesure pour répondre à vos besoins.
 
    </p>

 

  </div>
    ),

    2: (
      <div className="service-card">
  
  <div className="card-icon det">
        <img src={bg3} width="120" height="120" loading="lazy" alt="Airplane"/>
      </div>

      <h3 className="h3 card-title det">
        <span className="span">03</span> Lipsan Smart
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
                    <span className="span">04</span> Lipsan Security
                  </h3>
                  <br />
                  <p className="card-text">
                  Nous sommes une entreprise spécialisée dans l'installation de caméras de surveillance pour les maisons et les entreprises. Nous avons à cœur d'offrir à nos clients des solutions personnalisées de surveillance vidéo qui répondent à leurs besoins spécifiques.<br /><br />
Nous sommes fiers de notre expertise et de notre passion pour la sécurité. Notre équipe d'experts en sécurité possède une vaste expérience dans l'installation de caméras de surveillance pour diverses applications. Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins en matière de sécurité et leur proposer les meilleures solutions.<br /><br />
 <strong>Nous sommes convaincus que la sécurité ne devrait pas être un luxe</strong> , c'est pourquoi nous proposons des solutions de surveillance vidéo abordables et de qualité supérieure. Nous ne proposons que des produits de qualité exceptionnelle, conçus pour offrir des performances exceptionnelles et une durabilité à long terme.
Nous sommes également fiers de nos services d'installation professionnels. Nos techniciens expérimentés veillent à ce que chaque caméra de surveillance soit installée correctement pour offrir une surveillance vidéo efficace et fiable. Nous sommes disponibles pour offrir des services de soutien après-vente, y compris la maintenance et la réparation.<br /><br />
En somme, nous sommes passionnés par la sécurité et nous sommes déterminés à aider nos clients à renforcer la sécurité de leurs maisons et entreprises grâce à des solutions de surveillance vidéo adaptées à leurs besoins. Nous sommes convaincus que nos produits et services offriront une tranquillité d'esprit à nos clients, tout en protégeant leurs biens et leurs proches. Contactez-nous dès aujourd'hui pour en savoir plus sur nos services d'installation de caméras de surveillance.
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
        <AppBar sx={{ position: 'relative' }}>
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