import React from "react";

function About() {
  const href = window.location.pathname;

  const handleClickScroll = () => {
    const element = document.getElementById("vote");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="intro" id="intro">
      <aside className="decorative-left">
        <img src="media/rombo-blanco.png" width="30px" height="60px" alt="" />
        <img src="media/rombo-azul.png" width="30px" height="60px" alt="" />
        <img
          src="media/SVG/aire-izq-desk.svg"
          srcset="media/SVG/aire-izq-desk.svg"
          width="171px"
          height="auto"
          alt=""
        />
        <img src="media/rombo-azul.png" width="30px" height="60px" alt="" />
        <img src="media/rombo-blanco.png" width="30px" height="60px" alt="" />
      </aside>
      <aside className="decorative-left-mobile">
        <img src="media/rombo-blanco.png" width="15px" height="30px" alt="" />
        <img src="media/rombo-azul.png" width="15px" height="30px" alt="" />
        <img
          src="media/SVG/aire-izq-mobile.svg"
          srcset="media/SVG/aire-izq-mobile.svg"
          width="55px"
          height="auto"
          alt=""
        />
        <img src="media/rombo-azul.png" width="15px" height="30px" alt="" />
        <img src="media/rombo-blanco.png" width="15px" height="30px" alt="" />
      </aside>
      <div className="intro-container-text">
        {href === "/" ? (
          <div>
            If you enjoy creating digital illustration, painting or drawing,
            photography or video making, and you also care about the
            environment, we invite you to participate in the Art Contest "The
            Planet is your Canvas", through which we seek to make visible the
            contribution of the <strong>Montreal Protocol</strong> and the{" "}
            <strong>Kigali Amendment</strong> to combat accelerated climate
            change and to protect our ozone layer.
          </div>
        ) : (
          <div>
            Si disfrutas crear y te gusta la ilustración digital, la pintura o
            el dibujo, la fotografía o la realización de vídeos, y además te
            preocupas por el medio ambiente, te invitamos a participar en el
            Concurso de Arte "El Planeta es tu Lienzo", a través del cual
            buscamos visibilizar la contribución del Protocolo de Montreal y de
            la Enmienda de Kigali para combatir el cambio acelerado del clima y
            para proteger nuestra capa de ozono.
          </div>
        )}

        <div className="intro-images" onClick={handleClickScroll}>
          {href === "/" ? (
            <>
              <img
                className="dates-contest"
                src="media/pngs/newdates.png"
                alt="dates of the contest"
                width="80%"
              />
              <img
                className="iconos-participate"
                src="media/SVG/categoriesName.svg"
                alt="categories of the contest: illustration, painting, photo, video"
              />
              {/* <img
                className="iconos-participate"
                src="media/voteBanner/enGreen.svg"
                alt="Public vote is now open."
              /> */}
            </>
          ) : (
            <>
              <img
                class="dates-contest"
                src="media/pngs/newdatesES.png"
                alt="dates of the contest"
                width="80%"
              />

              <img
                class="iconos-participate"
                src="media/SVG/categoriesNameES.svg"
                alt="icons of categories: illustration, painting, photo, video"
              />

              {/* <img
                class="iconos-participate"
                src="media/voteBanner/esGreen.svg"
                alt="El voto del publico esta abierto."
              /> */}
            </>
          )}
        </div>
      </div>
      <aside className="decorative-right-mobile">
        <img
          src="media/rombo-blanco-derecha.png"
          width="15px"
          height="30px"
          alt=""
        />
        <img
          src="media/rombo-azul-derecha.png"
          width="15px"
          height="30px"
          alt=""
        />
        <img
          ssrc="media/SVG/aire-der-mobile.svg"
          srcset="media/SVG/aire-der-mobile.svg"
          width="55px"
          height="auto"
          alt=""
        />
        <img
          src="media/rombo-azul-derecha.png"
          width="15px"
          height="30px"
          alt=""
        />
        <img
          src="media/rombo-blanco-derecha.png"
          width="15px"
          height="30px"
          alt=""
        />
      </aside>
      <aside className="decorative-right">
        <img
          src="media/rombo-blanco-derecha.png"
          width="31px"
          height="61px"
          alt=""
        />
        <img
          src="media/rombo-azul-derecha.png"
          width="31px"
          height="61px"
          alt=""
        />
        <img
          src="media/SVG/aire-der-desk.svg"
          srcset="media/SVG/aire-der-desk.svg"
          width="171px"
          height="auto"
          alt=""
        />
        <img
          src="media/rombo-azul-derecha.png"
          width="31px"
          height="61px"
          alt=""
        />
        <img
          src="media/rombo-blanco-derecha.png"
          width="31px"
          height="61px"
          alt=""
        />
      </aside>
    </section>
  );
}

export default About;
