type ProjectType = {
  name: string;
  description: string;
  url_repo: string;
  url_deploy: string;
  image: string[];
};
export const projects: ProjectType[] = [
  {
    name: "multistepform-challenge",
    description:
      "Multi-step Form é formulario para aquisição de uma assinatura",
    url_repo: "https://github.com/WeslleySORDev/multistepform-challenge",
    url_deploy: "https://wsormultistepform.netlify.app/",
    image:[
      "https://raw.githubusercontent.com/WeslleySORDev/portifolio/main/images/multistepform-challenge/desktop.jpg", "https://raw.githubusercontent.com/WeslleySORDev/portifolio/main/images/multistepform-challenge/mobile.jpg"]
  },
  {
    name: "dtmoney-wsor",
    description: "Projeto proposto pela rocketseat para controle de gastos.",
    url_repo: "https://github.com/WeslleySORDev/dtmoney-wsor",
    url_deploy: "https://wsordtmoney.netlify.app/",
    image:[
      "https://raw.githubusercontent.com/WeslleySORDev/portifolio/main/images/dtmoney-wsor/desktop.jpg","https://raw.githubusercontent.com/WeslleySORDev/portifolio/main/images/dtmoney-wsor/mobile.jpg"]
  },
  {
    name: "rocketflix",
    description:
      "Rocketflix é um app que te da um filme aleatório para você assistir (ou não)",
    url_repo: "https://github.com/WeslleySORDev/rocketflix",
    url_deploy: "https://wsorrocketflix.netlify.app/",
    image:[
        "https://raw.githubusercontent.com/WeslleySORDev/portifolio/main/images/rocketflix/desktop.jpg", "https://raw.githubusercontent.com/WeslleySORDev/portifolio/main/images/rocketflix/mobile.jpg"]
  },
];
