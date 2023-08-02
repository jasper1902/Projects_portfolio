export interface DataType {
  projectName: string;
  category: string;
  stack: string[];
  image: string;
  projectUrl: string;
}

export const data: DataType[] = [
  {
    projectName: "Manga Client",
    category: "web",
    stack: [
      "react",
      "tailwind",
      "daisyui",
      "formik",
      "react-router-dom",
      "redux-toolkit",
      "react-toastify",
      "sweetalert2",
      "typescript",
    ],
    image: "/assets/image/manga-app.png",
    projectUrl: "http://jasper.3bbddns.com:28861/",
  },
  {
    projectName: "Manga Server",
    category: "api",
    stack: ["typescript", "mongoose", "bcrypt", "express", "JWT", "multer"],
    image: "/assets/image/manga-api.png",
    projectUrl: "http://jasper.3bbddns.com:28862/docs/",
  },
  {
    projectName: "Todo list",
    category: "web",
    stack: ["typescript", "react", "next js", "youtube api", "tailwind"],
    image: "/assets/image/lofi.png",
    projectUrl: "https://lofi-jasper.netlify.app/",
  },
  {
    projectName: "Estate",
    category: "web",
    stack: ["typescript", "react", "tailwind"],
    image: "/assets/image/Estate.png",
    projectUrl: "https://ubiquitous-lamington-21a1c4.netlify.app/",
  },
  {
    projectName: "realwold api",
    category: "api",
    stack: ["typescript", "express", "JWT", "mongoose", "bcrypt"],
    image: "/assets/image/realwold.png",
    projectUrl: "https://github.com/jasper1902/express-realworld-typescript",
  },
  {
    projectName: "data-finance",
    category: "web",
    stack: ["typescript", "react", "tailwind", "react-typed"],
    image: "/assets/image/data-finance.png",
    projectUrl: "https://cosmic-cheesecake-5b9dd7.netlify.app/",
  },
  {
    projectName: "portfolio",
    category: "web",
    stack: [
      "typescript",
      "react",
      "tailwind",
      "daisyui",
      "redux-toolkit",
      "react-scroll",
    ],
    image: "/assets/image/portfolio.png",
    projectUrl: "https://portfolio-jasper.netlify.app/",
  },
];
