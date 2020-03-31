import React from "react";
import { Util } from "../../helpers/util"

import "./priceTable.css";

const PriceTable = () => (
  <>
    <section style={{ display: Util.isProductionEnvironment() ? 'none' : 'block' }} 
      className="priceTable-section">
      <h2 className="pt-title">Registrations</h2>
      <div className="priceTable">
        <div className="pt-header">
          <div className="pt-type"></div>
          <div className="pt-description"></div>
          <div className="pt-price-regular">Regular</div>
          <div className="pt-price-alliance">Agile Alliance</div>
        </div>
        <div className="pt-ticket">
          <div className="pt-type">Innovators</div>
          <div className="pt-description">
            100 registrations or until April 15th, whichever comes first
          </div>
          <div className="pt-price-regular">R$390</div>
          <div className="pt-price-alliance">R$351</div>
        </div>
        <div className="pt-ticket">
          <div className="pt-type">Innovators</div>
          <div className="pt-description">
            100 registrations or until April 15th, whichever comes first
          </div>
          <div className="pt-price-regular">R$390</div>
          <div className="pt-price-alliance">R$351</div>
        </div>
      </div>

      <div class="linkAgileButton">
        <a href="https://inscricoes.agilebrazil.com/">
          <div class="buyTicketButton">Register now!</div>
        </a>
      </div>
    </section>
  </>
);

export default PriceTable;
