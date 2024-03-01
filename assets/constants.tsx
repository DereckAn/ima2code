import {
  RiHome3Line,
} from "react-icons/ri";
import { BsChatTextFill, BsCameraVideo, BsFillFileEarmarkPdfFill, BsImages  } from "react-icons/bs";

export const routes = [
  {
    name: "Home",
    path: "/",
    icon: RiHome3Line,
  },
  {
    name: "Image To Code",
    path: "/imagetocode",
    icon: BsImages ,
  },
  {
    name: "Chat",
    path: "/chatbot",
    icon: BsChatTextFill,
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
];
