import Navigation from "./components/Navigation";
import Accueil from "./components/Accueil";
import APropos from "./components/A-Propos";
import Competences from "./components/Competences";
import Projets from "./components/Projets";
import Parcours from "./components/Parcours";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Accueil />
        <APropos />
        <Competences />
        <Projets />
        <Parcours />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
