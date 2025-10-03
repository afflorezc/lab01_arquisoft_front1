import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function NavigationBar({className = ""}) {
    return(
        <div className={`flex flex-col items-center border-b-1 p-2 md:flex-row md:gap-8 ${className}`}>
        <div>
            <Link to="/"><img className="relative left-30" src="/src/assets/react.svg"></img></Link>
        </div>
        <NavigationMenu className="relative bottom-0 left-160 p-0 text-zinc-50 bg-[var(--navbar-background)]/0">
            <NavigationMenuList>
                {/* Inicio */}
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <Link to="/">Inicio</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Acerca de */}
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <Link to="/">Acerca de</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Productos y Servicios */}
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <Link to="/">Productos y servicios</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Contáctanos */}
                <NavigationMenuItem>
                    <NavigationMenuLink>
                        <Link to="/">Contáctanos</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
        </div>
    )
  };