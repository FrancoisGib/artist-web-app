import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Masonry from 'react-masonry-css';

export default function ProjetDisplayer({ path, item }) { // props dans App.js

    let images = [];
    for (let i = 0; i < item.src.length; i++) {
        images.push(<img className="display-img" src={path + item.src[i]} alt={item.src[i]} key={uuidv4()} />);
    }

    return (<>
        <NavLink to={"/artist-web-app/photo/"}><img alt="cross" className="display-cross" src="../Images/default/cross.png" /></NavLink>

        <div className="display">
            <h1 className="display-title">{item.title}</h1>
            <p className="display-text">{item.content}</p>
            
            <Masonry
                breakpointCols={3}
                className="display-grid"
                columnClassName="display-grid-column">
                {images}
            </Masonry>
        </div>
        {window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })}
    </>);
}