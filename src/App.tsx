import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <>
      <header className="flex items-center justify-end gap-4 px-4 py-2">
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Começo</a>
          </li>
          <li>
            <a href="#">Fim</a>
          </li>
        </ul>
        <ModeToggle />
      </header>
      <main></main>
    </>
  );
}
export default App;
