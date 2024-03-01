import React from "react";

function Participate() {
  const href = window.location.pathname;

  return (
    <>
      <div className="padding-main-container">
        <div className="dottedline"></div>
        <div className="header-offset" id="participate"></div>

        <section className="section">
          <div className="participate-section">
            <div className="select-wrap">
              <div className="deco-entry">
                <img
                  src="media/SVG/aire-der-desk.svg"
                  srcset="media/SVG/aire-der-desk.svg"
                  width="100px"
                  height="auto"
                  className="deco"
                  alt="decoration"
                />
                <div className="boxed-title">
                  <img
                    className="svg-inline"
                    src="media/iconswhite/participate.svg"
                    alt="icon of a raised hand"
                    srcset="media/iconswhite/participate.svg"
                    height="40px"
                    width="auto"
                  />
                  <h2>{href === "/" ? "Participate" : "Participa"}</h2>
                </div>
                <img
                  src="media/SVG/aire-izq-desk.svg"
                  srcset="media/SVG/aire-izq-desk.svg"
                  width="100px"
                  height="auto"
                  className="deco"
                  alt=""
                />
              </div>
            </div>

            <div className="form-wrapper">
              <form className="entry-form">
                <div className="form-style">
                  <div className="form-part1">
                    <div className="form-heading">
                      {href === "/"
                        ? "Participant Data"
                        : "Datos del Participante"}
                    </div>

                    <div className="wrap-form">
                      <label>
                        {href === "/" ? "Name:" : "Nombre:"}

                        <input
                          disabled
                          required
                          type="text"
                          name="Name:"
                          size="40"
                        />
                      </label>

                      <label>
                        {href === "/" ? "Address:" : "Dirección:"}

                        <input
                          disabled
                          required
                          type="text"
                          name="Address:"
                          size="40"
                        />
                      </label>

                      <label>
                        {href === "/" ? "Postcode:" : "Código Postal:"}

                        <input
                          disabled
                          required
                          type="text"
                          name="Postcode:"
                          size="10"
                        />
                      </label>

                      <label>
                        {href === "/" ? "City:" : "Ciudad:"}

                        <input disabled required type="text" name="City:" />
                      </label>

                      <label>
                        {href === "/" ? "Country:" : "País:"}

                        <input disabled required type="text" name="Country:" />
                      </label>

                      <label>
                        {href === "/" ? "Email:" : "Email:"}

                        <input
                          required
                          disabled
                          type="email"
                          name="email:"
                          size="30"
                        />
                      </label>

                      <label>
                        {href === "/" ? "Phone:" : "Teléfono:"}

                        <input
                          disabled
                          required
                          type="text"
                          name="PhoneNumber:"
                        />
                      </label>

                      <label>
                        {href === "/"
                          ? "ID or Passport number:"
                          : "ID o Pasaporte:"}

                        <input required disabled type="text" name="idNumber:" />
                      </label>

                      <label>
                        {href === "/"
                          ? "Date of birth:"
                          : "Fecha de nacimiento:"}

                        <input disabled required type="date" name="DOB:" />
                      </label>
                    </div>
                  </div>

                  <div className="form-part2">
                    <div className="form-heading">
                      {href === "/" ? "Data of Artwork" : "Datos de la obra"}
                    </div>
                    <div className="wrap-form">
                      <label>
                        <span>{href === "/" ? "Title:" : "Título:"}</span>
                        <input
                          required
                          disabled
                          name="Name:"
                          type="text"
                          size="40"
                        />
                      </label>

                      <label>
                        {href === "/" ? "Category:" : "Categoría:"}

                        <select disabled name="Category:" type="text" required>
                          <option value="">
                            {href === "/" ? "select one" : "selecciona una"}
                          </option>
                          <option value="Ilustration">
                            Digital Illustration
                          </option>
                          <option value="Drawing or Painting">
                            Drawing and Painting
                          </option>
                          <option value="Photo">Photography</option>
                          <option value="video">Video</option>
                        </select>
                      </label>

                      <label>
                        <span>
                          {href === "/"
                            ? "Creation Date:"
                            : "Fecha de creación:"}
                        </span>
                        <input
                          disabled
                          required
                          name="Creation-Date:"
                          type="date"
                        />
                      </label>

                      <label>
                        <span>
                          {href === "/" ? "Upload file:" : "Subir archivo:"}
                        </span>
                        <input
                          disabled
                          required
                          name="FileUpload:"
                          type="file"
                        />
                        <div className="form-texts">
                          {href === "/"
                            ? "File must be less than 8MB"
                            : "El archivo debe ser menor a 8MB"}
                        </div>
                      </label>

                      <label>
                        {href === "/"
                          ? "Title of the artwork explanation, including its originality and tools used for its creation:"
                          : "Explicación del título de la obra, incluyendo su originalidad y herramientas utilizadas para su creación:"}

                        <br />
                        <textarea
                          name="TitleExplanation:"
                          maxLength="2500"
                          rows="2"
                          columns="5"
                          required
                          disabled
                        ></textarea>
                        <div className="form-texts">
                          {href === "/"
                            ? "Max 2500 characters"
                            : "Máximo 2500 caracteres"}
                        </div>
                      </label>
                    </div>

                    <div className="form-part2b">
                      <label>
                        <span className="form-text">
                          {href === "/"
                            ? "I declare that the work has not received any prize in other competitions before, and I assign the rights to reproduce it."
                            : "Declaro que la obra no ha recibido premio alguno en otros certámenes con anterioridad y cedo los derechos de reproducción de esta."}
                        </span>
                        <input
                          disabled
                          name="Declaration"
                          type="checkbox"
                          required
                        />
                      </label>

                      <label>
                        <span className="form-text">
                          {href === "/"
                            ? "I accept the"
                            : "Acepto lo estipulado en los"}
                          <a
                            href="/media/T&Cs/CONTEST-CRITERIA-ENGLISH-DESIGN.pdf"
                            attributes-list
                            download
                            className="download-link"
                          >
                            {href === "/"
                              ? "Terms and Conditions"
                              : "Terminos y Condiciones"}
                          </a>
                          .
                        </span>
                        <input
                          disabled
                          name="Declaration"
                          type="checkbox"
                          required
                        />
                      </label>

                      <div className="submit-box">
                        <button disabled className="submit">
                          {href === "/"
                            ? "Submit Artwork"
                            : "Envíe su obra de arte"}

                          <img
                            src="media/SVG/flecha-derecha.svg"
                            alt="arrow pointing to the right"
                            width="auto"
                            height="15px"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="form-problems">
            {href === "/"
              ? "The last date for submissions was March 31, 2023"
              : "La última fecha de recepción de obras fue el 31 de marzo de 2023."}
          </div>
        </section>
      </div>
    </>
  );
}

export default Participate;
