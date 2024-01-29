"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface SidebarProps {
  showMenu: boolean;
  onclose: () => void;
}
const Sidebar = ({ showMenu, onclose }: SidebarProps) => {
  return (
    <>
    <aside
        className={cn(
          "fixed top-0 lg:left-0  border-r border-gray-500/30  w-[70vw] md:w-[30vw] lg:w-[20vw] xl:w-[20vw] h-full transition-all duration-300 ease-in-out z-50 bg-primary",
          showMenu ? "left-0" : "-left-full"
        )}
      >
        <section className="p-8  border-b border-gray-500/30">
          <Link
            href="/"
            className="text-2xl text-white hover:text-primary transition-colors duration-300"
          >
            hola
          </Link>
          <h3 className=" font-light text-gray-400"> holaaaaaaaaa</h3>
        </section>
        <section>
        <h1 className="text-3xl font-semibold">Image to Code</h1>
          <h2 className="text-sm opacity-75">
            Pasa tus images a codigo en segundos
          </h2>
          {/* <MainMenu /> */}
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
