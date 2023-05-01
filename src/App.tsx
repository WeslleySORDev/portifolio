import { Card } from "./components/Card";
import { Link } from "./components/Link";
import { Tech } from "./components/Tech";
import { techs } from "./variables/techs";

function App() {
  return (
    <div className="flex p-10 gap-16 min-h-screen w-full">
      <aside className="flex flex-col flex-1 gap-7">
        <Card>
          <div className="flex flex-col py-8 items-center">
            <img
              className="w-32 h-32 rounded-full"
              src="https://avatars.githubusercontent.com/weslleysordev"
              alt="Foto de perfil WeslleySorDev"
            />
            <div className="flex flex-col items-center gap-2 mt-8">
              <h1 className="text-xl font-bold">Weslley S. O. Ruas</h1>
              <span className="text-xs font-light">Frontend Developer</span>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col p-10 gap-5">
            <Link name="Brasil" image_path="/assets/map-pin.svg" />
            <Link name="WeslleySORDev" image_path="/assets/github.svg" />
            <Link name="weslleysordev" image_path="/assets/linkedin.svg" />
            <Link
              name="weslleysordev@gmail.com"
              image_path="/assets/mail.svg"
            />
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-5 p-8">
            <h2 className="text-xl font-bold">Tecnologias</h2>
            <div className="grid grid-cols-3 gap-4 justify-start">
              {techs.map((tech) => {
                return <Tech name={tech} />;
              })}
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-5 p-8">
            <h2 className="text-xl font-bold">Educação</h2>
            <ul className="list-disc mx-10">
              <li>
                <span className="text-xs font-normal">Universidade Estácio de Sá</span>
                <br/>
                <span className="text-xs font-light">2022 - 2027</span>
                <br/>
                <span className="text-xs font-light">Engenharia de Software</span>
              </li>
              <li className="mt-5">
                <span className="text-xs font-normal">Rocketseat</span>
                <br/>
                <span className="text-xs font-light">2021 - 2022</span>
                <br/>
                <span className="text-xs font-light">Ignite ReactJS</span>
              </li>
            </ul>
          </div>
        </Card>
      </aside>
      <main className="flex flex-[2_2_0%]"></main>
    </div>
  );
}

export default App;
