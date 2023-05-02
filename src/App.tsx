import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Link } from "./components/Link";
import { Tech } from "./components/Tech";
import { techs } from "./variables/techs";
import { IGithubRepo } from "./types/github";

import MapPin from "./assets/map-pin.svg";
import Github from "./assets/github.svg";
import Linkedin from "./assets/linkedin.svg";
import Mail from "./assets/mail.svg";
import Folder from "./assets/folder.svg";
import Star from "./assets/star.svg";
import GitBranch from "./assets/git-branch.svg";

function App() {
  const [repositories, setRepositories] = useState<IGithubRepo[]>([]);

  const getRepositories = async () => {
    await fetch("https://api.github.com/users/weslleysordev/repos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRepositories(data);
      });
  };
  useEffect(() => {
    getRepositories();
  }, []);

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
              <span className="text-xs font-light text-text-techs">Engenharia de Software 2 / 8</span>
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
          {repositories.length > 0
            ? repositories.map((repo) => {
                if (
                  repo.name !== "poke-images" &&
                  repo.name !== "portifolio"
                ) {
                  return (
                    <Card key={repo.name}>
                      <div className="flex h-full flex-col justify-between gap-6 p-8">
                        <div className="flex items-center gap-4">
                          <img src={Folder} alt="Icone de uma pasta" />
                          <a
                            href={repo.html_url}
                            target="_blank"
                            className="underline-offset-4 hover:underline"
                          >
                            {repo.name}
                          </a>
                        </div>
                        {repo.description ? (
                          <span className="line-clamp-3 break-words text-xs font-light">
                            {repo.description}
                          </span>
                        ) : null}
                        <div className="flex items-center justify-between">
                          <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                              <img src={Star} alt="Icone de estrela" />
                              <span className="text-xs font-light">
                                {repo.stargazers_count}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <img src={GitBranch} alt="Icone de git branch" />
                              <span className="text-xs font-light">
                                {repo.forks_count}
                              </span>
                            </div>
                          </div>
                          {repo.language ? (
                            <div className="flex items-center gap-2">
                              <div
                                className={`ring-2 ring-${repo.language.toLocaleLowerCase} h-4 w-4 rounded-full`}
                              ></div>
                              <span className="text-xs font-light">
                                {repo.language}
                              </span>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </Card>
                  );
                }
              })
            : null}
        </div>
      </main>
    </div>
  );
}

export default App;
