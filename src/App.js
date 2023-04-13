import data from './json/projects-data.json'
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Accueil from './pages/Accueil';
import Photographie from './pages/Photographie';
import Expositions from './pages/Expositions';
import Collectif from './pages/Collectif';
import Contact from './pages/Contact';
import ProjectDisplayer from './pages/ProjectDisplayer';
import Footer from './components/Footer';

export default function App() {
  const PATH = "/artist-web-app";
  const items = data.filter(fold => fold.title !== "Accueil");

  return (
    <>
      <Routes>
        <Route exact path={PATH} element={<Accueil />} />
        <Route path={`${PATH}/photo/`} element={<Photographie items={items} />} />
        <Route path={`${PATH}/expo/`} element={<Expositions />} />
        <Route path={`${PATH}/collectif/`} element={<Collectif />} />
        <Route path={`${PATH}/contact/`} element={<Contact />} />
        {data.map(item => <Route path={`${PATH}/photo/${item.name}/`} key={uuidv4()} element={<ProjectDisplayer path={"../Images/"+item.name+"/"} item={item} />} />)}
      </Routes>
      <Footer />
    </>
  );
}