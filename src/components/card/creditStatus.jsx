import React from "react";
import * as FaIcons from "react-icons/fa";
import * as cssModule from "../../sass/index";

const CreditStatus = () => {
  return (
    <figure className={cssModule.Components.cardStatus}>
      <figcaption>
        <h4>Your Saving Status</h4>
        <p>
          <FaIcons.FaQuestionCircle />
        </p>
      </figcaption>
      <figcaption>
        <span>
          <FaIcons.FaCube />
        </span>
        <div>
          <h1>4,28%</h1>
          <h3>Your spending increased</h3>
        </div>
      </figcaption>
    </figure>
  );
};

export default CreditStatus;
