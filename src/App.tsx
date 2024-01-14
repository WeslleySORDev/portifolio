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
      <header className="sticky top-0 flex items-center justify-end gap-32 border-b border-border/40 px-4 py-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <a className="hover:brightness-75" href="#about-me">
                <NavigationMenuLink>Sobre mim</NavigationMenuLink>
              </a>
            </NavigationMenuItem>
            <Separator orientation="vertical" />
            <NavigationMenuItem>
              <a className="hover:brightness-75" href="#projects">
                <NavigationMenuLink>Projetos</NavigationMenuLink>
              </a>
            </NavigationMenuItem>
            <Separator orientation="vertical" />
            <NavigationMenuItem>
              <a className="hover:brightness-75" href="#stacks">
                <NavigationMenuLink>Stacks</NavigationMenuLink>
              </a>
            </NavigationMenuItem>
            <Separator orientation="vertical" />
            <NavigationMenuItem>
              <a className="hover:brightness-75" href="#contact">
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
