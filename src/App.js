import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import "./bootstrap.css";
function App() {
  const [sizes, setsizes] = useState(true);
  const [textbl, settextbl] = useState({ enter: 0, el: 0 });
  const [headerT, setheaderT] = useState("");
  const [items, setitems] = useState(0);

  function fonts(a = []) {
    return a;
  }

  function sl(selector) {
    return document.querySelector(selector);
  }

  function getClass(document, cl) {
    return document.getElementsByClassName(cl);
  }

  function tg(e, g) {
    return e.getElementsByTagName(g);
  }

  function cl(e, g) {
    return e.getElementsByClassName(g);
  }
  function objinarr(e) {
    return Object.values(e);
  }

  function keyPress(onkeypress, settextbl, textbl, objinarr) {
    return (onkeypress = e =>
      settextbl({
        enter: e.key === "Enter" ? textbl.enter + 1 : 0,
        el: objinarr.length - 1
      }));
  }

  function itkl(objinarr, newteg, setitems) {
    return objinarr.map((x, i) =>
      x.textContent === ""
        ? (x.innerHTML = `<span><br></span>`)
        : (x.innerHTML =
            `<span className = "sp_item_t"}><span>` +
            x.textContent +
            `</span></span>`)
    );
  }
  useEffect(() => {
    keyPress(
      onkeypress,
      settextbl,
      textbl,
      objinarr(tg(sl(".text_block"), "div"))
    );

    objinarr(tg(sl(".text_block"), "div")).map((x, i) => {
      x.className = "text_t_" + (i - 0 + 1) + " item";
      settextbl({ enter: 0, el: i });
    });
  }, [textbl.enter]);

  useEffect(() => {
    itkl(objinarr(cl(sl(".text_block"), "item")), headerT, setitems);
  }, [headerT]);

  let sizesplus = (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="bi bi-arrows-fullscreen"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M1.464 10.536a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3.5a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 .5-.5z"
      />
      <path
        fillRule="evenodd"
        d="M5.964 10a.5.5 0 0 1 0 .707l-4.146 4.147a.5.5 0 0 1-.707-.708L5.257 10a.5.5 0 0 1 .707 0zm8.854-8.854a.5.5 0 0 1 0 .708L10.672 6a.5.5 0 0 1-.708-.707l4.147-4.147a.5.5 0 0 1 .707 0z"
      />
      <path
        fillRule="evenodd"
        d="M10.5 1.5A.5.5 0 0 1 11 1h3.5a.5.5 0 0 1 .5.5V5a.5.5 0 0 1-1 0V2h-3a.5.5 0 0 1-.5-.5zm4 9a.5.5 0 0 0-.5.5v3h-3a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 .5-.5V11a.5.5 0 0 0-.5-.5z"
      />
      <path
        fillRule="evenodd"
        d="M10 9.964a.5.5 0 0 0 0 .708l4.146 4.146a.5.5 0 0 0 .708-.707l-4.147-4.147a.5.5 0 0 0-.707 0zM1.182 1.146a.5.5 0 0 0 0 .708L5.328 6a.5.5 0 0 0 .708-.707L1.889 1.146a.5.5 0 0 0-.707 0z"
      />
      <path
        fillRule="evenodd"
        d="M5.5 1.5A.5.5 0 0 0 5 1H1.5a.5.5 0 0 0-.5.5V5a.5.5 0 0 0 1 0V2h3a.5.5 0 0 0 .5-.5z"
      />
    </svg>
  );

  let sizesminus = (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="bi bi-arrows-move"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M6.5 8a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1H6a.5.5 0 0 0 .5-.5z"
      />
      <path
        fillRule="evenodd"
        d="M3.854 5.646a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L2.207 8l1.647-1.646a.5.5 0 0 0 0-.708zM9.5 8a.5.5 0 0 1 .5-.5h4.5a.5.5 0 0 1 0 1H10a.5.5 0 0 1-.5-.5z"
      />
      <path
        fillRule="evenodd"
        d="M12.146 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L13.793 8l-1.647-1.646a.5.5 0 0 1 0-.708zM8 9.5a.5.5 0 0 0-.5.5v4.5a.5.5 0 0 0 1 0V10a.5.5 0 0 0-.5-.5z"
      />
      <path
        fillRule="evenodd"
        d="M5.646 12.146a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8 13.793l-1.646-1.647a.5.5 0 0 0-.708 0zM8 6.5a.5.5 0 0 1-.5-.5V1.5a.5.5 0 0 1 1 0V6a.5.5 0 0 1-.5.5z"
      />
      <path
        fillRule="evenodd"
        d="M5.646 3.854a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8 2.207 6.354 3.854a.5.5 0 0 1-.708 0z"
      />
    </svg>
  );

  function interat(sizesplus, sizesminus, bol) {
    return bol === true ? sizesplus : sizesminus;
  }
  function panel() {
    return (
      <div className="col row">
        <div className="col">
          <select>
            {fonts(["Tahoma", "Verdana", "Arial"]).map((font, i) => (
              <option key={i + 14}>{font}</option>
            ))}
          </select>
          <select>
            {fonts([
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23
            ]).map(font => (
              <option key={font}>{font}</option>
            ))}
          </select>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-justify-left"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>
            <div className="col">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-justify"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>
            <div className="col">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-justify-right"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="col-1 images" title="Добавить изображение">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-image"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M14.002 2h-12a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-12-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12z"
            />
            <path d="M10.648 7.646a.5.5 0 0 1 .577-.093L15.002 9.5V14h-14v-2l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71z" />
            <path
              fillRule="evenodd"
              d="M4.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
            />
          </svg>
        </div>
        <div className="col">
          <select onChange={e => setheaderT(e.target.value)}>
            {fonts([
              { n: "Заголовок", t: "" },
              { n: "Заголовок 1", t: "h1" },
              { n: "Заголовок 2", t: "h2" }
            ]).map((font, i) => (
              <option key={i + 33} value={font.t}>
                {font.n}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        interat("cintent_text", "cintent_text_full", sizes) +
        " " +
        "contentDtext"
      }
    >
      <div className="row col text-right pt-2 panel">
        {panel()}
        <div className="col-sm">{textbl.enter}</div>
        <div
          className="col-sm"
          className="sizes"
          onClick={() => setsizes(sizes === true ? false : true)}
        >
          {interat(sizesplus, sizesminus, sizes)}
        </div>
      </div>
      <div className="text_block" contentEditable="true" />
    </div>
  );
}
export default App;
