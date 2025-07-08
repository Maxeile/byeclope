import React from "react";
import "../styles/Footer.css"; // ou module CSS si tu préfères

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} ByeClope — Tous droits réservés</p>
      <a href="/mentions-legales" className="footer-link">
        Mentions légales
      </a>
    </footer>
  );
}

export default Footer;
