import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as cssModule from "../../sass/index";
import * as Data from "../../assets/index";

const TransactionLatest = () => {
  const [search, SetSearch] = useState(false);

  const HandleClick = () => SetSearch(!search);

  return (
    <section className={cssModule.Components.cardTransaction}>
      <header>
        <h2>latest Transaction</h2>
        <div>
          {search ? (
            <input
              type="text"
              placeholder="Search..."
              className={cssModule.Components.inputShow}
            />
          ) : (
            <input
              type="text"
              placeholder="Search..."
              className={cssModule.Components.inputHide}
            />
          )}
          <span>
            <FaIcons.FaSearch onClick={HandleClick} />
          </span>
          <span>
            <GiIcons.GiSettingsKnobs />
          </span>
        </div>
      </header>
      <footer>
        {Data.DataLatestTransaction.map(item => (
          <figure key={item.id}>
            <h2>{item.date}</h2>
            {item.data.map(data => (
              <figcaption key={data.id}>
                <div>
                  <span>{data.icon}</span>
                  <h3>{data.desc}</h3>
                </div>
                <div>
                  <p>{data.price}</p>
                </div>
              </figcaption>
            ))}
          </figure>
        ))}
      </footer>
    </section>
  );
};

export default TransactionLatest;
