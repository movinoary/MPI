import * as ImIcons from "react-icons/im";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";

export const DataStatistik = [
  {
    id: 1,
    index: "Progres",
    color: "#ff8d29",
    title: "Tasks In Progres",
    subTitle: "current month",
    value: "210",
    subValue: "23",
    totalValue1: "190",
    totalValue2: "240",
    totalValue3: "300",
    totalValue4: "250",
    totalValue5: "210",
    totalTitle1: "january",
    totalTitle2: "february",
    totalTitle3: "march",
    totalTitle4: "april",
    totalTitle5: "may",
  },
  {
    id: 2,
    index: "Complated",
    color: "#8e05c2",
    title: "Tasks Completed",
    subTitle: "current month",
    value: "185",
    subValue: "45",
    totalValue1: "200",
    totalValue2: "100",
    totalValue3: "165",
    totalValue4: "200",
    totalValue5: "185",
    totalTitle1: "january",
    totalTitle2: "february",
    totalTitle3: "march",
    totalTitle4: "april",
    totalTitle5: "may",
  },
  {
    id: 3,
    index: "Summary",
    color: "#28DF99",
    title: "monthly Tasks Summary",
    subTitle: "current month",
    value: "1.240",
    subValue: "145",
    totalValue1: "1100",
    totalValue2: "1300",
    totalValue3: "1400",
    totalValue4: "1000",
    totalValue5: "1240",
    totalTitle1: "january",
    totalTitle2: "february",
    totalTitle3: "march",
    totalTitle4: "april",
    totalTitle5: "may",
  },
];

export const DataLatestTransaction = [
  {
    id: 1,
    date: "Mon, Mar 1",
    data: [
      {
        id: 1,
        icon: <ImIcons.ImArrowRight />,
        desc: "payment sent to shakir",
        price: "$560.00",
      },
      {
        id: 2,
        icon: <ImIcons.ImArrowLeft />,
        desc: "Salary from Redwhole",
        price: "$12.200.00",
      },
      {
        id: 3,
        icon: <AiIcons.AiFillCaretRight />,
        desc: "Money Sent to Wise.com",
        price: "$3.000.00",
      },
    ],
  },
  {
    id: 2,
    date: "Thu, Mar 2",
    data: [
      {
        id: 1,
        icon: <ImIcons.ImArrowRight />,
        desc: "Purchased Macbook Pro",
        price: "$3.560.00",
      },
      {
        id: 2,
        icon: <ImIcons.ImArrowLeft />,
        desc: "Income Youtube",
        price: "$15.000.000",
      },
      {
        id: 3,
        icon: <AiIcons.AiFillCaretRight />,
        desc: "Money Send to Mom",
        price: "$1.000.00",
      },
    ],
  },
  {
    id: 3,
    date: "Mon, Mar 1",
    data: [
      {
        id: 1,
        icon: <ImIcons.ImArrowRight />,
        desc: "payment sent to shakir",
        price: "$560.00",
      },
      {
        id: 2,
        icon: <ImIcons.ImArrowLeft />,
        desc: "Salary from Redwhole",
        price: "$12.200.00",
      },
      {
        id: 3,
        icon: <AiIcons.AiFillCaretRight />,
        desc: "Money Sent to Wise.com",
        price: "$3.000.00",
      },
    ],
  },
  {
    id: 4,
    date: "Thu, Mar 2",
    data: [
      {
        id: 1,
        icon: <ImIcons.ImArrowRight />,
        desc: "Purchased Macbook Pro",
        price: "$3.560.00",
      },
      {
        id: 2,
        icon: <ImIcons.ImArrowLeft />,
        desc: "Income Youtube",
        price: "$15.000.000",
      },
      {
        id: 3,
        icon: <AiIcons.AiFillCaretRight />,
        desc: "Money Send to Mom",
        price: "$1.000.00",
      },
    ],
  },
];

export const DataUpcomingTransaction = [
  {
    id: 1,
    date: "Today",
    data: [
      {
        id: 1,
        icon: <MdIcons.MdWaterDrop />,
        color: "#8e05c2 ",
        title: "Water Bill",
        desc: "Unsuccessfully",
        price: "$280",
      },
    ],
  },
  {
    id: 2,
    date: "Tomorrow",
    data: [
      {
        id: 1,
        icon: <MdIcons.MdAttachMoney />,
        color: "#ff4949",
        title: "Income: Salary Out",
        desc: "Successfully",
        price: "$1200",
      },
      {
        id: 2,
        icon: <GiIcons.GiElectric />,
        color: "#0096FF",
        title: "Electric Bill",
        desc: "Successfully",
        price: "$480",
      },
      {
        id: 3,
        icon: <AiIcons.AiFillFileText />,
        color: "#ff8d29",
        title: "Income: Jane Transfers",
        desc: "Successfully",
        price: "$500",
      },
      {
        id: 4,
        icon: <AiIcons.AiFillFileText />,
        color: "#ff8d29",
        title: "Income: Jane Transfers",
        desc: "Successfully",
        price: "$500",
      },
    ],
  },
];
