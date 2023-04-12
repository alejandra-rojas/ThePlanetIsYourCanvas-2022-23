import React from "react";

function Main() {
  const href = window.location.pathname;

  return (
    <>
      <div className="padding-main-container">
        <div className="dottedline"></div>
        <div className="header-offset" id="about"></div>

        <section className="about">
          <div className="column-decodesktop"></div>
          <div className="section-content">
            <div className="boxed-title">
              <img
                className="svg-inline"
                src="media/iconswhite/about.svg"
                alt="icon about section. three circles conected by a line"
                srcset="media/iconswhite/about.svg"
                height="35px"
                width="auto"
              />
              <h2>
                {href === "/" ? "About the art contest" : "Acerca del concurso"}
              </h2>
            </div>

            <p>
              {href === "/"
                ? "This first edition will focus on highlighting the importance of the Montreal Protocol in reducing ozone-depleting substances and the impact of the Kigali Amendment on the reduction of greenhouse gases, such as hydrofluorocarbons (HFCs)."
                : "Esta primera edición se enfocará en resaltar la importancia que tiene el Protocolo de Montreal en la reducción de las sustancias que agotan la capa de ozono, y en el impacto de la Enmienda de Kigali en la reducción de los gases de efecto invernadero, como los hidrofluorocarburos (HFCs)."}
            </p>

            <h3>{href === "/" ? "Stages" : "Etapas del concurso"}</h3>
            <div className="stages-section">
              <div className="stages-single-container">
                <div className="circle">1</div>
                <div className="stages-text-container">
                  <div className="stages-titlecontdesk">
                    <div className="circle-desktop">1</div>
                    <h4>
                      {href === "/"
                        ? "Reception of artworks"
                        : "Recepción de las obras de arte"}
                    </h4>
                  </div>
                  <h5>
                    {href === "/"
                      ? "October 17, 2022 to March 31, 2023"
                      : "17 de octubre de 2022 al 31 de marzo de 2023"}
                  </h5>
                  <p className="pstages">
                    {href === "/"
                      ? "Prepare your artwork and submit it using the application form. Take into account the information resources and remember to fill out all the fields."
                      : "Prepara tu obra de arte y envíala mediante el formulario de participación. Ten en cuenta los recursos informativos y recuerda completar todos los campos."}
                  </p>
                </div>
              </div>
              <div className="stages-single-container">
                <div className="circle">2</div>
                <div className="stages-text-container">
                  <div className="stages-titlecontdesk">
                    <div className="circle-desktop">2</div>
                    <h4>
                      {href === "/"
                        ? "Pre-selection of candidates"
                        : "Preselección de candidatos"}
                    </h4>
                  </div>
                  <h5>
                    {href === "/"
                      ? "March 31 to April 07, 2023"
                      : "31 de marzo al 07 de abril de 2023"}
                  </h5>
                  <p className="pstages">
                    {href === "/"
                      ? "The OzonAction Evaluation Committee will review the requirements and the artworks received."
                      : "El Comité Evaluador de AcciónOzono revisará los requisitos y las obras recibidas."}
                  </p>
                </div>
              </div>
              <div className="stages-single-container">
                <div className="circle">3</div>
                <div className="stages-text-container">
                  <div className="stages-titlecontdesk">
                    <div className="circle-desktop">3</div>
                    <h4>
                      {href === "/" ? "Jury vote" : "Votación del jurado"}
                    </h4>
                  </div>
                  <h5>
                    {href === "/" ? "April 11, 2023" : "11 de abril de 2023"}
                  </h5>
                  <p className="pstages">
                    {href === "/"
                      ? "The jury, composed of artists and members of the United Nations System, will select 20 pieces of artwork; 5 per category. The jury vote will have a weight of 80%."
                      : "El jurado, compuesto por artistas y miembros del Sistema de Naciones Unidas, seleccionará 20 obras de arte; 5 por categoría. El voto del jurado tendrá una incidencia del 80% sobre el total."}
                  </p>
                </div>
              </div>

              <div className="stages-single-container">
                <div className="circle">4</div>
                <div className="stages-text-container">
                  <div className="stages-titlecontdesk">
                    <div className="circle-desktop">4</div>

                    <h4>
                      {href === "/"
                        ? "Public Online Voting"
                        : "Votación en línea del público"}
                    </h4>
                  </div>
                  <h5>
                    {href === "/"
                      ? "April 15 to April 25, 2023"
                      : "15 al 25 de abril de 2023"}
                  </h5>
                  <p className="pstages">
                    {href === "/"
                      ? "Everyone in Latin America and the Caribbean will be able to vote for her/his favorite artwork. The public vote will have a weight of 20%."
                      : "Todas las personas de América Latina y el Caribe podrán votar por sus obras favoritas. La votación del público tendrá una incidencia del 20% sobre el total."}
                  </p>
                </div>
              </div>

              <div className="stages-single-container">
                <div className="circle">5</div>
                <div className="stages-text-container">
                  <div className="stages-titlecontdesk">
                    <div className="circle-desktop">5</div>
                    <h4>
                      {href === "/"
                        ? "Announcement of winning artworks"
                        : "Anuncio de obras de arte ganadoras"}
                    </h4>
                  </div>
                  <h5>
                    {href === "/" ? "April 28, 2023" : "28 de Abril de 2023"}
                  </h5>
                  <p className="pstages">
                    {href === "/"
                      ? "The four winners will be announced in April and the award ceremony will be held in Panama City, Panama."
                      : "Las cuatro personas ganadoras se darán a conocer en abril y la ceremonia de premiación se realizará en la Ciudad de Panamá, Panamá."}
                  </p>
                </div>
              </div>
            </div>

            <div className="stages-text-container">
              <h4>
                {href === "/"
                  ? "The winners in each category will be announced in April and will be invited to the United Nations office in Panama City and will enjoy a learning and creativity program created especially for them."
                  : "Los ganadores de cada categoría se darán a conocer en abril y serán invitadas a la oficina de Naciones Unidas en la Ciudad de Panamá y disfrutarán de un programa de aprendizaje y creatividad creado especialmente para ellas."}
              </h4>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Main;
