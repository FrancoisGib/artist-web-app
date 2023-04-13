import { NavLink } from 'react-router-dom';

export default function Divprojet({ keyDiv, id, title, src }) {
  return (
    <NavLink to={`/artist-web-app/photo/${id}`} className="project-nav">
    <div id={id} key={keyDiv} className="project-div">
      <img src={src} alt={title} className="project-image" />
      <p className="project-title">{title}</p>
    </div></NavLink>
  );
}
