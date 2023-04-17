import React from "react";

function VoteIntro() {
  const href = window.location.pathname;

  return (
    <>
      <div className="padding-main-container">
        <div className="dottedline"></div>
        <div className="header-offset" id="vote"></div>
        <section className="vote">
          <div className="boxed-title">
            <img
              className="svg-inline"
              src="media/iconswhite/vote.svg"
              alt="icon of a thumbs up"
              srcset="media/iconswhite/vote.svg"
              height="35px"
              width="auto"
            />
            <h2>
              {href === "/" ? <b>Public Vote</b> : <b>Voto del público</b>}
            </h2>
          </div>

          <p>
            {href === "/" ? (
              <>
                The finalists have been pre-selected and you can help us decide
                who the winners will be. To vote, please register with your
                phone number or Gmail account, only one registration per person
                is allowed. The public vote will count for 20% of the total.
                Voting will close on 25 April. How do I know if my vote has been
                cast correctly? When refreshing the page the “hand” will have
                changed colour.
                <span>
                  &nbsp;
                  <i
                    className="fa fa-thumbs-up"
                    style={{ fontSize: "24px" }}
                  ></i>
                </span>
              </>
            ) : (
              <>
                Las personas finalistas han sido pre-seleccionadas y tú puedes
                ayudarnos a decidir quiénes serán las personas ganadoras. Para
                votar, regístrate con tu número de teléfono o cuenta de Gmail,
                solo se permite un registro por persona. La votación del público
                tendrá una incidencia del 20% sobre el total. La votación
                cerrará el 25 de abril. ¿Cómo saber si tu voto ha sido emitido
                correctamente? Al refrescar la página la 'mano' habrá cambiado
                de color.
                <span>
                  &nbsp;
                  <i
                    className="fa fa-thumbs-up"
                    style={{ fontSize: "24px" }}
                  ></i>
                </span>
              </>
            )}
          </p>

          {/* <p>
            {href === "/"
              ? "Our voting widget is currently under maintenance, come back later to submit your vote. Dont worry, votes already submitted are safe!"
              : "Nuestro sistema de votación se encuentra actualmente en mantenimiento, regrese más tarde para enviar su voto. ¡No se preocupe, los votos ya enviados están seguros!"}
          </p> */}
        </section>
      </div>
    </>
  );
}

export default VoteIntro;
