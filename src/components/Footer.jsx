export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-mail"><p>
          Pour me contacter, envoyez moi un mail à{" "}
          <span className="mail">amande.gib@gmail.com</span>
        </p>
        <img className="footer-copy" alt="copy" src="./Images/default/copy.png" />
      </div>
      <p className="contact">
        Ou contactez-moi sur instagram à{" "}
        <a className="insta" href="https://www.instagram.com/amandegibier/">
          @amandegibier
        </a>
      </p>
      <p className="droits">Tous droits réservés © Amande Gibier</p>
      <p className="fg">Site réalisé par François Gibier</p>
    </footer>
  );
}
