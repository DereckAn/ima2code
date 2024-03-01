import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainMenuProps {
  routes: {
    name: string;
    path: string;
    icon: React.ComponentType<{ size: number }>;
  }[];
}

const MainMenu = ({ routes }: MainMenuProps) => {
  const pathName = usePathname();

  return (
    <ul>
      <li>
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={cn(
              "flex flex-col items-center text-xs truncate gap-4 text-gray-300 p-5 px-8 border-b border-gray-500/30 hover:bg-gray-500/10 hover:text-secondary transition-colors duration-300 cursor-pointer",
              pathName === route.path &&
                "text-secondary border-primary border-2"
            )}
          >
            <route.icon size={18} />
            {route.name}
          </Link>
        ))}
      </li>
    </ul>
  );
};

export default MainMenu;
