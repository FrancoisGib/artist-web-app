import Divprojet from "../components/Divprojet.jsx";
import Menu from '../components/Menu';

import { v4 as uuidv4 } from 'uuid';

export default function Photographie({ items }) {
  const presentation =
    "Mes recherches plastiques s’appuient sur l’existence et questionnent le rapport que l’être humain entretient avec l’environnement, au sens écologique comme au sens d’un lieu dans lequel il interagit. À travers mon art, je propose de repenser la biodiversité affectée par la pollution ou l’impact humain qui se transmue ou disparaît. Je conçois ainsi des photographies, où la couleur est un enjeu de ma pratique, qui mettent en jeu des avenirs hypothétiques sous la forme de métaphores visuelles. Celles-ci permettent d’amorcer des réflexions sur le présent et de s’éveiller sur ce qui se joue actuellement et les conséquences pour le futur.";

  return (
    <><Menu />
      <div className="photographie">
        <h1 className="photographie-title" >Photographie</h1>
        <p className="photographie-text">{presentation}</p>
        <div className="photographie-container">
          {items.map(item =>
            <Divprojet
              key={uuidv4()}
              keyDiv={uuidv4()}
              id={item.name}
              title={item.title}
              src={`./Images/${item.name}/${item.src[0]}`} // item.name = folder path
            />
          )}
        </div>
      </div>
    </>
  );
}
