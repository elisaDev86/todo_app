import React from "react";

function Footer() {
    //dichiaro una variabile e richiamo il metodo per avere la data sempre aggiornata//
    const annoCorrente = new Date().getFullYear();
    return (
   <div className="footer">
      <p>Copyright © {annoCorrente}</p>
   </div>
    );
  }
  
  export default Footer;