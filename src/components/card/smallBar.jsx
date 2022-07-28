import ReactApexChart from "react-apexcharts";
import * as ImIcons from "react-icons/im";
import * as cssModule from "../../sass/index";

function SmallBar({ item }) {
  const series = [
    {
      name: [item.index],
      data: [
        item.totalValue1,
        item.totalValue2,
        item.totalValue3,
        item.totalValue4,
        item.totalValue5,
      ],
    },
  ];
  const options = {
    chart: {
      type: "bar",
      height: 40,
      stacked: true,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "20%",
        borderRadius: 7,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    colors: [item.color],
    fill: {
      opacity: 1,
    },
    xaxis: {
      categories: [
        item.totalTitle1,
        item.totalTitle2,
        item.totalTitle3,
        item.totalTitle4,
        item.totalTitle5,
      ],
    },
  };

  return (
    <section className={cssModule.Components.smallBar}>
      <figure>
        <p>{item.title}</p>
        <figcaption>
          <h3 style={{ color: `${item.color}` }}>{item.value}</h3>
          <div>
            <div
              className={cssModule.Components.circle}
              style={{ backgroundColor: ` ${item.color}` }}
            />
            <p
              style={{
                color: `${item.color}`,
              }}
            >
              {item.subValue}
              <ImIcons.ImArrowUpRight2 />
            </p>
          </div>
        </figcaption>
        <p>{item.subTitle}</p>
      </figure>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={100}
        width="100%"
      />
    </section>
  );
}

export default SmallBar;
