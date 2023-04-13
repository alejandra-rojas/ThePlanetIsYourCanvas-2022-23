import React from "react";
const href = window.location.pathname;

function VoteOut() {
  return (
    <div className="padding-main-container">
      <div className="stages-text-container">
        <h4>
          {href === "/"
            ? "The winners in each category will be announced the 28th of April, keep an eye in our social media channels for the latest updates."
            : "Los ganadores de cada categoría se darán a conocer el 28 de Abril, esté atento a nuestros canales de redes sociales para conocer las últimas noticias."}
        </h4>
      </div>
    </div>
  );
}

export default VoteOut;
