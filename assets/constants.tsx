import {
  BsCameraVideo,
  BsChatTextFill,
  BsFillFileEarmarkPdfFill,
  BsImages,
} from "react-icons/bs";
import { MdOutlinePersonSearch } from "react-icons/md";
import { RiGamepadLine, RiHome3Line } from "react-icons/ri";

export const routes = [
  {
    name: "Home",
    path: "/",
    icon: RiHome3Line,
  },
  {
    name: "Image To Code",
    path: "/imagetocode",
    icon: BsImages,
  },
  {
    name: "Chat",
    path: "/chatbot",
    icon: BsChatTextFill,
  },
  {
    name: "Game 🕹️",
    path: "/game",
    icon: RiGamepadLine,
  },
  {
    name: "Ask PDF",
    path: "/PDFai",
    icon: BsFillFileEarmarkPdfFill,
  },
  {
    name: "Friends",
    path: "/usefulfriend",
    icon: BsCameraVideo,
  },
  {
    name: "Specific ",
    path: "/user",
    icon: MdOutlinePersonSearch,
  },
];
