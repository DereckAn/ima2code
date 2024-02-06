import {
  RiBriefcase2Line,
  RiEdit2Line,
  RiHome3Line,
  RiMegaphoneLine,
  RiUserLine,
} from "react-icons/ri";

export const routes = [
  {
    name: "Home",
    path: "/",
    icon: RiHome3Line,
  },
  {
    name: "Image To Code",
    path: "/imagetocode",
    icon: RiBriefcase2Line,
  },
  {
    name: "Chat",
    path: "/chatbot",
    icon: RiUserLine,
  },
  {
    name: "Ask PDF",
    path: "/PDFai",
    icon: RiEdit2Line,
  },
  {
    name: "Friends",
    path: "/usefulfriend",
    icon: RiMegaphoneLine,
  },
];
