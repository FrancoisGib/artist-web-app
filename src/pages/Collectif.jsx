import Menu from '../components/Menu';
import data from '../json/collectif-data.json';

export default function Collectif() {

    const collectifVideos = [];
    data.link.forEach(link => {
        collectifVideos.push(<iframe className='collectif-content-video' width="560" height="314" style={{border: "none"}} loading="lazy" src={link} title={link} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>);
    });

    return (
        <>
            <Menu />
            <h1 className='collectif-title'>Les Petits Doigts</h1>
            <div className='collectif-introducing'>
                <iframe className='collectif-introduce-video' loading="eager" width="840" height="472" style={{border: "none"}} src={data.introducing} title="Présentation du collectif Les Petits Doigts" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <p className='collectif-introduce-text'>Texte à ajouter</p>
            </div>
            <div className='collectif-videos'>
                {collectifVideos}
            </div>
        </>
    );
}