import React from "react";

function Maintenance() {
  const href = window.location.pathname;

  return (
    <>
      <div className="intro-images">
        {href === "/" ? (
          <>
            <img
              className="iconos-participate"
              src="media/down/ENdown.svg"
              alt="vote under maintenance"
            />
          </>
        ) : (
          <>
            <img
              class="iconos-participate"
              src="media/down/ESdown.svg"
              alt="voto en mantenimiento"
            />
          </>
        )}
      </div>
    </>
  );
}

export default Maintenance;
