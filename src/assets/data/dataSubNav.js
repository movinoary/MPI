import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as SiIcons from "react-icons/si";
import * as ImIcons from "react-icons/im";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";

export const DataNavMain = [
  {
    title: "dashboard",
    path: "/",
    icon: <MdIcons.MdDashboard />,
  },
  {
    title: "Transaction",
    icon: <BiIcons.BiFullscreen />,
    iconClosed: <MdIcons.MdKeyboardArrowRight />,
    iconOpened: <MdIcons.MdArrowDropDown />,
    subNav: [
      {
        title: "Transaction",
        path: "Transaction",
      },
      {
        title: "Latest",
        path: "latest",
      },
      {
        title: "Upcoming",
        path: "upcoming",
      },
    ],
  },
  {
    title: "Contacts",
    path: "Contacts",
    icon: <BsIcons.BsFillGridFill />,
    iconClosed: <MdIcons.MdKeyboardArrowRight />,
    iconOpened: <MdIcons.MdArrowDropDown />,
    subNav: [
      {
        title: "favorite",
        path: "favorite",
      },
      {
        title: "Block",
        path: "Block",
      },
    ],
  },
  {
    title: "Features",
    icon: <BsIcons.BsToggles />,
    iconClosed: <MdIcons.MdKeyboardArrowRight />,
    iconOpened: <MdIcons.MdArrowDropDown />,
    subNav: [
      {
        title: "Personal Info",
        path: "Personal-info",
      },
      {
        title: "profile",
        path: "profile",
      },
      {
        title: "security",
        path: "security",
      },
      {
        title: "about",
        path: "about",
      },
    ],
  },
  {
    title: "Library",
    icon: <BiIcons.BiLibrary />,
  },
];

export const DataNavSetting = [
  {
    title: "Base Wallet",
    path: "/dashboard",
    icon: <SiIcons.SiHackthebox />,
  },
  {
    title: "My Contacts",
    icon: <ImIcons.ImFolderUpload />,
  },
  {
    title: "Invoices",
    icon: <MdIcons.MdKeyboardVoice />,
  },
  {
    title: "Schedules",
    icon: <AiIcons.AiFillSchedule />,
  },
];
