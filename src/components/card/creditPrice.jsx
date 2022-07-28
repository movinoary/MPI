import React from "react";
import * as FaIcons from "react-icons/fa";
import * as cssModule from "../../sass/index";

const CreditPrice = () => {
  return (
    <figure className={cssModule.Components.cardPrice}>
      <figcaption>
        <h4>Your Working Balance</h4>
        <p>Saving Account</p>
      </figcaption>
      <figcaption>
        <h1>PKR 9,250,000</h1>
        <h3>
          PKR
          <span>
            <FaIcons.FaAngleDown />
          </span>
        </h3>
      </figcaption>
    </figure>
  );
};

export default CreditPrice;
