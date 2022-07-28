import React, { useState } from "react";
import * as Assets from "../assets/index";
import * as BsIcons from "react-icons/bs";
import * as cssModule from "../sass/index";
import { Link, useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigate = useNavigate();

  return (
    <nav className={cssModule.Components.sideNav}>
      <header onClick={() => navigate("/")}>
        <span>
          <BsIcons.BsTriangleHalf />
        </span>
        <h2>Super Finti</h2>
      </header>
      <section>
        <h3>Main Navigation</h3>
        {Assets.DataNavMain.map((item, index) => (
          <SubNav key={index} item={item} />
        ))}
      </section>
      <section>
        <h3>Setting & Schedules</h3>
        {Assets.DataNavSetting.map((item, index) => (
          <SubNav key={index} item={item} />
        ))}
      </section>
      <footer>
        <figure>
          <div className={cssModule.Components.circle}>
            <div className={cssModule.Components.circle1} />
            <div className={cssModule.Components.circle2} />
          </div>
          <span>
            <BsIcons.BsQuestionCircleFill />
          </span>
          <figcaption>
            <h4>Help Center</h4>
            <p>Having troble in Finti.</p>
            <p>Please contact us for more questions.</p>
          </figcaption>
          <button>Go To Help Center</button>
        </figure>
      </footer>
    </nav>
  );
};

const SubNav = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <div
        onClick={item.subNav && showSubnav}
        className={cssModule.Components.navData}
      >
        {item.path ? (
          <Link to={item.path} className={cssModule.Components.dataNav}>
            <span>{item.icon}</span>
            <p>{item.title}</p>
          </Link>
        ) : (
          <div className={cssModule.Components.dataNav}>
            <span>{item.icon}</span>
            <p>{item.title}</p>
          </div>
        )}
        <div className={cssModule.Components.arrow}>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </div>

      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link
              to={item.path}
              key={index}
              className={cssModule.Components.dataSubNav}
            >
              <p>{item.title}</p>
            </Link>
          );
        })}
    </>
  );
};

export default SideNav;
