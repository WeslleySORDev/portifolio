import { Card } from "./components/Card";
import { Link } from "./components/Link";
import { Tech } from "./components/Tech";
import { techs } from "./variables/techs";

import MapPin from "./assets/map-pin.svg";
import Github from "./assets/github.svg";
import Linkedin from "./assets/linkedin.svg";
import Mail from "./assets/mail.svg";
import Folder from "./assets/folder.svg";
import { projects } from "./variables/projects";

import { useWindowSize } from "./hooks/useWindowSize";

function App() {
  const { width } = useWindowSize();
  return (
    <div className="flex min-h-screen w-full flex-col gap-16 p-4 lg:flex-row lg:p-10">
      <aside className="flex flex-1 flex-col gap-7">
        <Card>
          <div className="flex flex-col items-center py-8">
            <img
              className="h-32 w-32 rounded-full ring-2 ring-bg-techs ring-offset-2 ring-offset-bg-cards"
              src="https://avatars.githubusercontent.com/weslleysordev"
              alt="Foto de perfil WeslleySorDev"
            />
            <div className="mt-8 flex flex-col items-center gap-2">
              <h1 className="text-xl font-bold">Weslley S. O. Ruas</h1>
              <span className="text-xs font-light">Frontend Developer</span>
              <span className="text-xs font-light text-text-techs">
                Engenharia de Software 2 / 8
              </span>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-5 p-10">
            <Link
              name="Brasil"
              image_path={MapPin}
              image_alt="Icone referenciando localização"
            />
            <Link
              name="WeslleySORDev"
              image_path={Github}
              image_alt="Icone do github"
            />
            <Link
              name="weslleysordev"
              image_path={Linkedin}
              image_alt="Icone do linkedin"
            />
            <Link
              name="weslleysordev@gmail.com"
              image_path={Mail}
              image_alt="Icone de email"
            />
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-5 p-8">
            <h2 className="text-xl font-bold">Tecnologias</h2>
            <div className="grid grid-cols-1 justify-start gap-4 md:grid-cols-2 lg:grid-cols-3">
              {techs.map((tech) => {
                return <Tech key={tech} name={tech} />;
              })}
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-5 p-8">
            <h2 className="text-xl font-bold">Educação</h2>
            <ul className="mx-10 list-disc">
              <li>
                <span className="text-xs font-normal">
                  Universidade Estácio de Sá
                </span>
                <br />
                <span className="text-xs font-light">2022 - 2026</span>
                <br />
                <span className="text-xs font-light">
                  Engenharia de Software
                </span>
              </li>
              <li className="mt-5">
                <span className="text-xs font-normal">Rocketseat</span>
                <br />
                <span className="text-xs font-light">2021 - 2022</span>
                <br />
                <span className="text-xs font-light">Ignite ReactJS</span>
              </li>
            </ul>
          </div>
        </Card>
      </aside>
      <main className="flex flex-[2_2_0%] flex-col gap-8">
        <Card>
          <div className="flex items-center justify-between p-8">
            <h2 className="text-xl font-bold">Meus Projetos</h2>
            <a
              href="https://github.com/WeslleySORDev?tab=repositories"
              target="_blank"
              className="text-sm font-light underline-offset-4 hover:underline"
            >
              Veja todos
            </a>
          </div>
        </Card>
        <div className="grid w-full auto-rows-fr grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => {
            if (
              project.name !== "WeslleySORDev" &&
              project.name !== "portifolio"
            ) {
              return (
                <Card key={project.name}>
                  <div className="flex h-full flex-col justify-between gap-6 p-8">
                    <div className="flex items-center gap-4">
                      <img src={Folder} alt="Icone de uma pasta" />
                      <a
                        href={project.url_repo}
                        target="_blank"
                        className="underline-offset-4 hover:underline"
                      >
                        {project.name}
                      </a>
                      {project.url_deploy ? (
                        <a
                          href={project.url_deploy}
                          target="_blank"
                          className="ml-auto underline underline-offset-4"
                        >
                          <svg
                            fill="#FFFFFF"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24px"
                            height="24px"
                          >
                            <path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z" />
                          </svg>
                        </a>
                      ) : null}
                    </div>
                    {project.description ? (
                      <span className="line-clamp-3 break-words text-xs font-light">
                        {project.description}
                      </span>
                    ) : null}
                    <div className="flex">
                      <img src={project.image} alt="" />
                    </div>
                  </div>
                </Card>
              );
            }
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
