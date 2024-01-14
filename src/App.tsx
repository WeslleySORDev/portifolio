import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <>
      <header className="flex items-center justify-end gap-4 px-4 py-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <a href="#">
                <NavigationMenuLink>Sobre mim</NavigationMenuLink>
              </a>
            </NavigationMenuItem>
            <Separator orientation="vertical" />
            <NavigationMenuItem>
              <a href="#">
                <NavigationMenuLink>Projetos</NavigationMenuLink>
              </a>
            </NavigationMenuItem>
            <Separator orientation="vertical" />
            <NavigationMenuItem>
              <a href="#">
                <NavigationMenuLink>Stacks</NavigationMenuLink>
              </a>
            </NavigationMenuItem>
            <Separator orientation="vertical" />
            <NavigationMenuItem>
              <a href="#">
                <NavigationMenuLink>Contato</NavigationMenuLink>
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle />
      </header>
      <main></main>
    </>
  );
}
export default App;
