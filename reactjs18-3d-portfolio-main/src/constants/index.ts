import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  reactjs,
  nodejs,
  git,
  figma,
  docker,
  python,
  scikitlearn,
  pandas,
  numpy,
  hcst,
  internpay,
  medicine,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Machine Learning Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: web,
  },
  {
    title: "CS Engineer Student",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Scikit-Learn",
    icon: scikitlearn,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "B.Tech - Computer Science and Engineering",
    companyName: "Hindustan College of Science and Technology",
    icon: hcst,
    iconBg: "#383E56",
    date: "2023 - 2027",
    points: [
      "Pursuing Bachelor of Technology in Computer Science and Engineering at Hindustan College of Science and Technology, Mathura, IN.",
      "Maintaining a Cumulative Grade Point Average (CGPA) of 7.77.",
      "Gaining strong foundational knowledge in Computer Science concepts, algorithms, data structures, and software engineering.",
    ],
  },
  {
    title: "Machine Learning Intern",
    companyName: "InternPay",
    icon: internpay,
    iconBg: "#E6DEDD",
    date: "17 Nov - 28 Dec 2025 (45 Days)",
    points: [
      "Developed and tested machine learning models using Python and real-world datasets.",
      "Performed data cleaning, preprocessing, training, and model evaluation for improved outputs.",
      "Gained practical exposure to machine learning workflows and industry-level implementation practices.",
    ],
  },
];

const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  {
    name: "Medicine Recommendation System",
    description:
      "Developed a machine learning model to recommend medicines based on patient symptoms and historical datasets. Implemented data preprocessing, feature engineering, and supervised classification techniques for prediction accuracy. Optimized training datasets and improved model performance using Python-based ML workflows.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "pandas",
        color: "pink-text-gradient",
      },
      {
        name: "numpy",
        color: "blue-text-gradient",
      },
    ],
    image: medicine,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
