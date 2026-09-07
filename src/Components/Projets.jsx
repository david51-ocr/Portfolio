import kasa1 from "../assets/Kasa1.png";
import kasa2 from "../assets/kasa2.png"
import monVieuxGrimoire from "../assets/MonVieuxGrimoire.png";
import MVG from "../assets/MVGExemple.png";



function Projets() {
  return (
    <section id="projets">
      <h2>Projets</h2>
      <article>
        <h3>Kasa</h3>
        <div className="project-images">
  <img src={kasa1} alt="Page d'accueil de l'application Kasa" />
  <img src={kasa2} alt="Page de logement de l'application Kasa" />
</div>
        <h4>Contexte</h4>
        <p>
          Développement de l'interface web de Kasa, une plateforme de location
          de logements de vacances, à partir de maquettes fournies.
        </p>
        <h4>Objectifs</h4>
        <p>
          Créer une application permettant d'afficher les logements et leurs
          informations dynamiquement grâce aux données récupérées depuis une
          API, avec une navigation entre les différentes pages.
        </p>
        <h4>Stack Technique</h4>
        <ul>
            <li>React</li>
            <li>Vite</li>
            <li>JavaScript</li>
            <li>SCSS</li>
            <li>React Router</li>
            <li>API</li>
        </ul>
        <h4>Compétences développées</h4>
        <ul>
            <li>Création de composants réutilisables</li>
            <li>Utilisation des props et des states</li>
            <li>Gestion du routing</li>
            <li>Récupération de données depuis une Api</li>
        </ul>
        <h4>Résultats et impact</h4>
        <p>Application fonctionnelle et responsive, affichage dynamique
     des logements et de leurs détails, navigation et page 404.</p>
        <h4>Perspectives d'amélioration</h4>
        <p>Ajout de filtres de recherche et amélioration de
     l'accessibilité, notamment clavier et focus.</p>
      </article>
      <article>
        <h3>Mon Vieux Grimoire</h3>
        <div className="project-images">
  <img
    src={monVieuxGrimoire}
    alt="Page d'accueil de l'application Mon Vieux Grimoire"
  />
  <img
    src={MVG}
    alt="Exemple de livre présenté dans l'application Mon Vieux Grimoire"
  />
</div>
        <h4>Contexte</h4>
        <p>
             Développement du back-end de Mon Vieux Grimoire, une plateforme de
  référencement et de notation de livres dont le front-end de l'application
  était déjà fourni.
        </p>
        <h4>Objectifs</h4>
        <p>
            Créer une API REST permettant de gérer les utilisateurs et les livres,
  de sécuriser l'authentification et de permettre aux utilisateurs
  d'ajouter, modifier, supprimer et noter des livres selon leurs autorisations.
        </p>
        <h4>Stack Technique</h4>
        <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>JWT</li>
            <li>Bcrypt</li>
            <li>Multer</li>
        </ul>
        <h4>Compétences développées</h4>
        <ul>
            <li>Création d'un serveur avec Node.js et Express</li>
            <li>Création et gestion d'une API REST</li>
            <li>Gestion et persistance des données avec MongoDB</li>
            <li>Mise en place d'un système d'authentification sécurisé</li>
        </ul>
        <h4>Résultats et impact</h4>
        <p>
            API fonctionnelle permettant l'authentification des utilisateurs, l'ajout,
  la modification et la suppression de livres selon les autorisations, ainsi
  que leur notation avec calcul de la note moyenne.
        </p>
        <h4>Perspectives d'amélioration</h4>
        <p>
             Renforcer la gestion des erreurs et la sécurité de l'API, et ajouter des
  fonctionnalités de recherche et de filtrage des livres par auteur ou par genre.
        </p>
      </article>
    </section>
  );
}

export default Projets;
