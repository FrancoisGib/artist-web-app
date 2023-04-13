import Menu from '../components/Menu';
import data from '../json/accueil-data.json';

export default function Accueil() {
  const PATH = "./Images/"+data.path;

  let accueilImages = [];  
  
  data.src.forEach((element, i) => {
    accueilImages.push(<label className="item" htmlFor={"t-" + (i+1)} key={i} >
      <img src={PATH + element} alt={i+1} />
    </label>)
  });


  return (
    <>
      <Menu />
      <div className="accueil">
        <div className="accueil-titles">
          <h1 className="accueil-h1">Amande Gibier</h1>
          <h2 className="accueil-h2">Artiste Photographe</h2>
        </div>
        <div className="accueil-panorama">
          <input type="radio" name="input-panorama" id="t-1" />
          <input type="radio" name="input-panorama" id="t-2" />
          <input type="radio" name="input-panorama" id="t-3" defaultChecked="true" />
          <input type="radio" name="input-panorama" id="t-4" />
          <input type="radio" name="input-panorama" id="t-5" />
          <div className="accueil-images">
            {accueilImages}
          </div>
          <div className="dots">
            <label htmlFor="t-1"></label>
            <label htmlFor="t-2"></label>
            <label htmlFor="t-3"></label>
            <label htmlFor="t-4"></label>
            <label htmlFor="t-5"></label>
          </div>
        </div>
      </div>
    </>
  );
}
