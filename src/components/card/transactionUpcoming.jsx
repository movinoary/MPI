import React from "react";
import * as cssModule from "../../sass/index";
import * as Data from "../../assets/index";

const TransactionUpcoming = () => {
  return (
    <section className={cssModule.Components.cardUpComing}>
      <header>
        <h2>Upcoming Transaction</h2>
        <p>View All</p>
      </header>
      <footer>
        {Data.DataUpcomingTransaction.map(item => (
          <figure key={item.id}>
            <span>{item.date}</span>
            {item.data.map(data => (
              <figcaption item={data.id}>
                <div className={cssModule.Components.cardLeft}>
                  <span style={{ backgroundColor: ` ${data.color}` }}>
                    {data.icon}
                  </span>
                  <div>
                    <h4>{data.title}</h4>
                    <p>{data.desc}</p>
                  </div>
                </div>
                <div className={cssModule.Components.cardRight}>
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

export default TransactionUpcoming;
