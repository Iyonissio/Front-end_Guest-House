import * as React from "react";
import "./Cards.css";

function Cards() {
  return (
    <>
      <div className="topo-dia-mes">
        <div className="hoje">
          <h1>Hoje: 100 000 MT</h1>
        </div>
        <div className="mes">
          <h1>Mes: 1000 000 MT</h1>
        </div>
      </div>
      <hr className="dimensao" />
      <br />
      <div class="container">
        <ul>
          <li>
            <div class="bottom">Quarto 01</div>
            <h2>01</h2>
            <span>Ocupado</span>
            <p>35 min</p>
          </li>
          <li>
            <div class="bottom1">Quarto 02</div> 35 min
          </li>
          <li>
            <div class="bottom">Quarto 03</div> 35 min
          </li>
          <li>
            <div class="bottom">Quarto 04</div> 35 min
          </li>
          <li>
            <div class="bottom">Quarto 05</div> 35 min
          </li>
          <li>
            <div class="bottom">Quarto 06</div> 35 min
          </li>
          <li>
            <div class="bottom">Quarto 07</div> 35 min
          </li>
          <li>
            <div class="bottom">Quarto 08</div> 35 min
          </li>
        </ul>
      </div>
    </>
  );
}

export default Cards;
