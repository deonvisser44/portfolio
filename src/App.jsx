import "./App.css";

import AboutAndSkillsPage from "./pages/AboutAndSkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <HomePage />
      <AboutAndSkillsPage />
      <ProjectsPage />
      <ContactPage />
    </>
  );
}

export default App;
