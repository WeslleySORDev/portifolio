import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Link } from "./components/Link";
import { Tech } from "./components/Tech";
import { techs } from "./variables/techs";
import { IGithubRepo } from "./types/github";

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
    <div className="flex p-10 gap-16 min-h-screen w-full">
      <aside className="flex flex-col flex-1 gap-7">
        <Card>
          <div className="flex flex-col py-8 items-center">
            <img
              className="w-32 h-32 rounded-full ring-offset-2 ring-2 ring-bg-techs ring-offset-bg-cards"
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
            <Link name="Brasil" image_path="/src/assets/map-pin.svg" />
            <Link name="WeslleySORDev" image_path="/src/assets/github.svg" />
            <Link name="weslleysordev" image_path="/src/assets/linkedin.svg" />
            <Link
              name="weslleysordev@gmail.com"
              image_path="/src/assets/mail.svg"
            />
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-5 p-8">
            <h2 className="text-xl font-bold">Tecnologias</h2>
            <div className="grid grid-cols-3 gap-4 justify-start">
              {techs.map((tech) => {
                return <Tech key={tech} name={tech} />;
              })}
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col gap-5 p-8">
            <h2 className="text-xl font-bold">Educação</h2>
            <ul className="list-disc mx-10">
              <li>
                <span className="text-xs font-normal">
                  Universidade Estácio de Sá
                </span>
                <br />
                <span className="text-xs font-light">2022 - 2027</span>
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
            <a href="https://github.com/WeslleySORDev?tab=repositories" target="_blank" className="text-sm font-light underline underline-offset-4">Veja todos</a>
          </div>
        </Card>
        <div className="grid grid-cols-2 auto-rows-fr gap-8 w-full">
          {repositories.length > 0
            ? repositories.map((repo) => {
                return (
                  <Card key={repo.name}>
                    <div className="flex flex-col justify-between h-full gap-6 p-8">
                      <div className="flex items-center gap-4">
                        <img
                          src="/src/assets/folder.svg"
                          alt="Icone de uma pasta"
                        />
                        <span>{repo.name}</span>
                      </div>
                      {repo.description ? (
                        <span className="text-xs font-light">
                          {repo.description}
                        </span>
                      ) : null}
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4">
                          <div className="flex items-center gap-2">
                            <img
                              src="/src/assets/star.svg"
                              alt="Icone de estrela"
                            />
                            <span className="text-xs font-light">100</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <img
                              src="/src/assets/git-branch.svg"
                              alt="Icone de git branch"
                            />
                            <span className="text-xs font-light">100</span>
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
              })
            : null}
        </div>
      </main>
    </div>
  );
}

export default App;
