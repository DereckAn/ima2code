"use client";
import Footer from "@/components/shared/footer";
import Sidebar from "@/components/shared/sidebar";
import ButtonIcon from "@/components/ui/button-icon";
import { ReactNode, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      {/* // note: showMenu y setShowMenu es para las sfuncionalidades del boton  */}
      <Sidebar showMenu={showMenu} onclose={() => setShowMenu(false)} />
      {/* // note: ponemos el boton aqui para que se vea en todas las paginas */}
      <ButtonIcon
        icon={RiMenu2Line}
        onClick={() => setShowMenu(true)}
        className="lg:hidden fixed right-0 bottom-0 z-30 bg-primary p-4  rounded-tl-lg"
      />

      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
