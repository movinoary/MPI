import React, { useContext } from "react";
import * as Assets from "../assets/index";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import * as cssModule from "../sass/index";
import * as Configs from "../configs/index";

const Header = () => {
  const [state, dispatch] = useContext(Configs.UserContext);

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <header className={cssModule.Components.header}>
      <section>
        <form>
          <button>
            <BsIcons.BsSearch />
          </button>
          <input type="search" placeholder="Search..." />
        </form>
        <div>
          <span>
            <BsIcons.BsFileEarmark />
          </span>
          <span>
            <FiIcons.FiMail />
          </span>
          <span>
            <BsIcons.BsThreeDotsVertical />
          </span>
        </div>
      </section>
      <section>
        <p>Wallet</p>
        <p>Invoice</p>
      </section>
      <section>
        <h4>Hi, {state.user.username}</h4>
        <div>
          <img src={Assets.Profile} alt="profile" />
          <button className={cssModule.Components.link} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
