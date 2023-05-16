import React from "react";
import { Link, useLocation } from "react-router-dom";
import SvgMaker from "../components/SvgMaker";

const Presentation = () => {
  const location = useLocation();
  return (
    <section id="presentation">
      <h2>Bienvenue sur mon Portfolio !</h2>
      <div>
        <p>
          A l'origine, j'étais dans le commerce, la vente. <br />
          Déjà à l'époque je regardais avec envie ces metiers du web, qui
          concevaient dans l'ombre des sites ou des applications en ligne de A à
          Z. Je me demandais alors : <br />
          "Mais comment ils ont fait ça ? c'est trop stylé, ce site !" ou alors
          : <br />
          "si seulement je savais faire un site web moderne pour mon groupe de
          zikos, ou sur la permaculture... <br />
          Au début, je me pensais incapable de réaliser ce genre de chose. Trop
          compliqué. ...Et puis... Après quelques années de réflexions... j'ai
          fini par sauter dedans. A pieds joints. <br />
          C'était devenu une évidence. Même pas peur.
        </p>
        <p>
          Après avoir passé un an à étudier le web dans tout ses aspects,
          d'abord en autodidacte, puis en formation à distance pour éprouver mes
          connaissances et mes motivations... Me voilà ! Continuellement en
          train d'apprendre un truc ou un autre sur Javascript, React, NodeJS,
          Mais aussi sur d'autre technos, Je met aujourd'hui à disposition mes
          compétences, mon sens du service et ma soif d'apprendre auprès des
          entreprises.
        </p>
        <p>
          Création et intégration de maquette, site vitrine, blog, création ou
          utilisation d'API / DataBase, audit pour référencement SEO ou
          optimisation des performances, mise en ligne, ou gestion d'un VPS sous
          Linux... N'hésitez pas à me contacter pour discuter de vos projets !
        </p>
        <p>
          Si vous voulez en savoir plus sur ma stack technique, mes skills, ou
          mes apprentissages du moment, cliquez ici
          <Link
            className={`${location.pathname === "/stack" ? "active-link" : ""}`}
            to="/stack"
          >
            <SvgMaker item="construction" />
          </Link>
        </p>
        <p>
          Si vous voulez jeter un oeil à mes réalisations, cliquez ici
          <Link
            className={`${
              location.pathname === "/portfolio" ? "active-link" : ""
            }`}
            to="/portfolio"
          >
            <SvgMaker item="image" />
          </Link>
        </p>
      </div>
    </section>
  );
};
export default Presentation;
