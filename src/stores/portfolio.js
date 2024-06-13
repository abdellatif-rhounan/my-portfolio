import { defineStore } from "pinia";

export const usePortfolioStore = defineStore("portfolio", {
  state: () => ({
    globalData: {
      firstname: "Abdellatif",
      lastname: "Rhounan",
      cvUrl:
        "https://drive.google.com/file/d/1oE-o3rnGi_3hxhYzJj1XiERHE9sqq7Eq/view?usp=drive_link",
      cvBtnText: "Télécharger CV",
      email: "abdellatif.rhounan@gmail.com",
      phone: "+212-614-171-911",
      whatsapp: "+212-614-171-911",
    },
    // PageHeader
    navbarLinks: [
      { href: "#home", fr: "Accueil" },
      { href: "#about", fr: "à Propos" },
      { href: "#works", fr: "Travaux" },
      { href: "#contact", fr: "Contact" },
    ],
    // HomeSection
    homeContent: {
      greeting: "Bonjour, Je suis",
      description: "Développeur Full Stack",
      worksBtnText: "Voir Portfolio",
    },
    socialLinks: [
      {
        name: "linkedin",
        href: "https://www.linkedin.com/in/abdellatif-rhounan",
        icon: "bx bxl-linkedin",
        title: "Mon Compte LinkedIn",
      },
      {
        name: "github",
        href: "https://www.github.com/abdellatif-rhounan",
        icon: "bx bxl-github",
        title: "Mon Compte Github",
      },
    ],
    // AboutSection
    aboutContent: {
      heading: ["À Propos de", "Moi"],
      aboutPhotoAlt: "Ma Photo de Profile",
      descriptionHeading: "Développeur Full Stack!",

      p1: "Je suis un développeur Full Stack créatif, passionné par le développement informatique et la création de solutions innovantes.",

      p2: "J'excelle dans la création des applications dynamiques en gardant à l'esprit une visualisation attrayante, des performances solides et une bonne expérience utilisateur.",

      p3: "Pendant mon temps libre, j'aime lire des livres et regarder les matchs de mon équipe préférée.",
    },
    // Works Section
    worksContent: {
      heading: "Mes Projets",
    },
    pickedTech: "all",
    filters: ["all", "vue", "php", "laravel", "wordpress"],
    projects: [
      {
        name: "portfolio",
        img_src: "portfolio.png",
        link: "#",
        technologies: ["vue"],
        description:
          "Ce projet est un portfolio personel a comme but de lister mes projets personel.",
      },
      {
        name: "todo-app",
        img_src: "todo-app.png",
        link: "#",
        technologies: ["vue"],
        description: "Ce projet est une application Todo.",
      },
      {
        name: "employees-manager",
        img_src: "employees-manager.png",
        link: "https://github.com/abdellatif-rhounan/employees-manager",
        technologies: ["laravel"],
        description:
          "Ce projet est une simple application pour gérer les employees.",
      },
      {
        name: "employees-php",
        img_src: "employees-php.png",
        link: "https://github.com/abdellatif-rhounan/employees-php",
        technologies: ["php"],
        description:
          "Ce projet est une simple application pour gérer les employees.",
      },
    ],
    // Contact Section
    contactContent: {
      heading: ["Contactez", "Moi"],
      subHeading: ["Envoyez Moi un Message", "Informations de base"],
      form: {
        fullname: "Votre Nom Complet",
        email: "Votre Email",
        object: "Objet",
        message: "Votre Message Ici",
        submitBtn: "Envoyez Message",
      },
      infos: {
        fullnameLabel: "Nom Complet",
        emailLabel: "Email",
        phoneLabel: "Télephone",
        whatsAppLabel: "WhatsApp",
        jobLabel: "Emploi",
        job: "Ouvert",
      },
    },
    // Footer Content
    footerContent: "Tous les droits sont réservés",
  }),

  getters: {
    filteredProjects: (state) => {
      if (state.pickedTech === "all") {
        return state.projects;
      }

      let regX = new RegExp(state.pickedTech, "i");

      return state.projects.filter((el) => {
        return el.technologies.some((el) => el.match(regX));
      });
    },
  },

  actions: {
    pickedTechMutate(newVal) {
      this.pickedTech = newVal;
    },
  },
});
