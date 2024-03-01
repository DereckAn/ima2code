"use client";

import { routes } from "@/assets/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { RiUserLine } from "react-icons/ri";
import MainMenu from "./main-menu";

interface SidebarProps {
  showMenu: boolean;
  onclose: () => void;
}
const Sidebar = ({ showMenu, onclose }: SidebarProps) => {
  return (
    <>
      <aside
        className={cn(
          "fixed top-0 lg:left-0  border-r border-gray-500/30  w-[100px] h-full transition-all duration-300 ease-in-out z-50 bg-primary",
          showMenu ? "left-0" : "-left-full"
        )}
      >
        <section className="p-8  border-b border-gray-500/30">
          <Link
            href="/"
            className="text-2xl text-white hover:text-secondary transition-colors duration-300"
          >
            AI
          </Link>
        </section>
        <section className="flex flex-col justify-between ">
          <MainMenu routes={routes} />

          <MainMenu
            routes={[
              {
                name: "Login",
                path: "/login",
                icon: RiUserLine,
              },
            ]}
          />
        </section>
      </aside>

      <button
        onClick={onclose}
        className={cn(
          "fixed bg-black/20 z-40 left-0 top-0 w-full h-full lg:hidden appearance-none border-none",
          showMenu ? "block" : "hidden"
        )}
      />
    </>
  );
};

export default Sidebar;
