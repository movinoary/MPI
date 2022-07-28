import React, { useContext } from "react";
import * as SiIcons from "react-icons/si";
import * as Configs from "../../configs/index";
import * as cssModule from "../../sass/index";

const CreditCard = () => {
  const [state] = useContext(Configs.UserContext);

  return (
    <figure className={cssModule.Components.cardCredit}>
      <div className={cssModule.Components.circle1} />
      <div className={cssModule.Components.circle2} />
      <div className={cssModule.Components.circle3} />
      <span>
        <SiIcons.SiMastercard />
      </span>
      <figcaption>
        <p>card number</p>
        <h4>3829 4820 4629 5026</h4>
      </figcaption>
      <footer>
        <div>
          <p>card holder name</p>
          <h4>{state.user.username}</h4>
        </div>
        <div>
          <p>Vaid Thru</p>
          <h4>09/17</h4>
        </div>
      </footer>
    </figure>
  );
};

export default CreditCard;
