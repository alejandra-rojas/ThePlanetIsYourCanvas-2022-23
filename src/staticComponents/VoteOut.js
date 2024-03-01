import React from "react";

function VoteOut() {
  const href = window.location.pathname;

  return (
    <>
      <div className="padding-main-container">
        <div className="stages-text-container">
          <h4>
            {href === "/"
              ? "The winners in each category will be announced the 28th of April, keep an eye in our social media channels for the latest updates."
              : "Las y los ganadores de cada categoría se darán a conocer el 28 de Abril, visita nuestras redes sociales para estar al tanto de las últimas noticias."}
          </h4>
        </div>
      </div>
    </>
  );
}

export default VoteOut;
