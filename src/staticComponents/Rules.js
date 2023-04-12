import React from "react";

function Rules() {
  const href = window.location.pathname;

  return (
    <>
      <div className="padding-main-container">
        <div className="dottedline"></div>
        <div className="header-offset" id="rules"></div>
        <section className="rules">
          <div className="boxed-title">
            <img
              className="svg-inline"
              src="media/iconswhite/rules.svg"
              alt="icon of a folder"
              srcset="media/iconswhite/rules.svg"
              height="35px"
              width="auto"
            />
            <h2>{href === "/" ? "Rules" : "Reglas"}</h2>
          </div>

          <p>
            {href === "/"
              ? "If you are a national or reside in a country in Latin America and the Caribbean and you consider that you have talent in any of the following areas: digital illustration, drawing and painting, photography, and video, this contest is for you."
              : "Si eres ciudadana/o o resides en el algún país de América Latina y el Caribe y consideras que tienes talento en alguna de las siguientes disciplinas: ilustración digital, dibujo y pintura, fotografía y video, este concurso es para ti."}
          </p>
          <p>
            {href === "/"
              ? "Please, consider this information: The content of the artworks must reflect an important message related to the contest theme (Montreal Protocol and Kigali Amendment)."
              : "Qué debes considerar: El contenido de las obras debe reflejar un mensaje relevante relacionado con la temática del concurso (Protocolo de Montreal y Enmienda de Kigali)."}
          </p>
          <p>
            {href === "/"
              ? "Any artwork that is not original or has been submitted to another art contest will be rejected."
              : "Cualquier obra que no sea original o que se haya enviado a otro concurso de arte será rechazada. "}
          </p>
          <p>
            {href === "/"
              ? "Check for more details in our "
              : "Revisa los detalles del concurso en nuestra sección de "}
            <a
              href="/media/T&Cs/CONTEST-CRITERIA-ENGLISH-DESIGN.pdf"
              attributes-list
              download
              className="download-link"
            >
              {href === "/" ? "terms and conditions" : "términos y condiciones"}
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
}

export default Rules;
