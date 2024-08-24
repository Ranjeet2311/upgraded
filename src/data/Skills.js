const skillsData = [
  {
    id: 1,
    img: "images/skillPics/vs.png",
    title: "Vs Code",
    end: "frontend",
  },
  {
    id: 2,
    img: "images/skillPics/vue-js-icon.png",
    title: "Vue",
    end: "frontend",
  },
  {
    id: 3,
    img: "images/skillPics/react-js.png",
    title: "React",
    end: "frontend",
  },
  {
    id: 4,
    img: "images/skillPics/angular.png",
    title: "Angular",
    end: "frontend",
  },
  {
    id: 5,
    img: "images/skillPics/hugo.png",
    title: "Hugo",
    end: "frontend",
  },
  {
    id: 6,
    img: "images/skillPics/mui.png",
    title: "Material-Ui",
    end: "frontend",
  },
  {
    id: 7,
    img: "images/skillPics/sass-icon.png",
    title: "Scss",
    end: "frontend",
  },
  {
    id: 8,
    img: "images/skillPics/boots.png",
    title: "Bootstrap",
    end: "frontend",
  },
  {
    id: 9,
    img: "images/skillPics/js.png",
    title: "Java Script",
    end: "frontend",
  },
  {
    id: 10,
    img: "images/skillPics/ts.png",
    title: "TypeScript",
    end: "frontend",
  },
  {
    id: 11,
    img: "images/skillPics/jquery.svg",
    title: "jquery",
    end: "frontend",
  },
  {
    id: 12,
    img: "images/skillPics/node-js.svg",
    title: "Node Js",
    end: "backend",
  },
  {
    id: 13,
    img: "images/skillPics/express-js-icon.svg",
    title: "Express Js",
    end: "backend",
  },
  {
    id: 14,
    img: "images/skillPics/html.png",
    title: "HTML",
    end: "frontend",
  },
  {
    id: 15,
    img: "images/skillPics/markdown-icon.png",
    title: "Markdown",
    end: "frontend",
  },
  {
    id: 16,
    img: "images/skillPics/css.png",
    title: "Css",
    end: "frontend",
  },

  {
    id: 17,
    img: "images/skillPics/git.png",
    title: "Git",
    end: "managing",
  },
  {
    id: 18,
    img: "images/skillPics/gitlab.png",
    title: "Gitlab",
    end: "managing",
  },
  {
    id: 19,
    img: "images/skillPics/bitbucket.png",
    title: "Bitbucket",
    end: "managing",
  },
  {
    id: 20,
    img: "images/skillPics/figma.svg",
    title: "Figma",
    end: "design",
  },
  {
    id: 21,
    img: "images/skillPics/adobeXd.png",
    title: "AdobeXd",
    end: "design",
  },
  {
    id: 22,
    img: "images/skillPics/docker-icon.png",
    title: "Docker",
    end: "managing",
  },
  {
    id: 23,
    img: "images/skillPics/postgresql-icon.svg",
    title: "PostgreSQL",
    end: "backend",
  },
  {
    id: 24,
    img: "images/skillPics/php-icon.svg",
    title: "Php",
    end: "backend",
  },
  {
    id: 25,
    img: "images/skillPics/tailwind-css-icon.svg",
    title: "tailwindcss",
    end: "frontend",
  },
  {
    id: 26,
    img: "images/skillPics/magento.png",
    title: "Magento",
    end: "cms",
  },
  {
    id: 27,
    img: "images/skillPics/seo.png",
    title: "SEO",
    end: "cms",
  },
  {
    id: 28,
    img: "images/skillPics/wordpress.png",
    title: "Wordpress",
    end: "cms",
  },
  {
    id: 29,
    img: "images/skillPics/woo-commerce.png",
    title: "Woo-Com.",
    end: "cms",
  },
];

const workWithMe = [
  {
    title: "Programming",
    desc: [
      " HTML5,",
      "CSS3,",
      "SCSS,",
      "React & Redux,",
      "Vue & VueX,",
      "Angular & RxJs,",
      "Express.js,",
      "Firebase,",
      "PostgreSQL,",
      "Cypress,",
      "ESLint,",
      "Bootstrap,",
      "Tailwind,",
      "Git,",
      "& more...... ",
    ],
    pageLink: "expertise",
  },
  {
    title: "Experiences",
    desc: [
      "- A dynamic and seasoned software developer with 7.5 years of experience in creating responsive, user-friendly web-applications (SPA) and websites.",
    ],
    pageLink: "/experience",
  },
  {
    title: "Soft Skills",
    desc: [
      "- Strong problem-solving abilities.",
      "- Excellent communication and teamwork skills.",
      "- Ability to work effectively in multicultural environments.",
      "- Adaptability and willingness to learn new technologies.",
    ],
    pageLink: "/experience",
  },
  {
    title: "Engineering Practices",
    desc: [
      "- Accessibility in HTML / CSS.",
      "- Estimation and work planning.",
      "- Web performance optimization.",
      "- Cross-browser testing & Web animations.",
      "- Ability to troubleshoot and resolve issues efficiently.",
    ],
    pageLink: "/experience",
  },
  {
    title: "Academics",
    desc: [
      "- BA-Prog. -Delhi University.",
      "- G.B Senior Secondary School, New Delhi.",
    ],
    pageLink: "/experience",
  },
  {
    title: "My Interest",
    desc: [
      "Yoga,",
      "Martial Arts,",
      "Tech Podcasts,",
      "Tech Conferences,",
      "Gardening,",
      "Cycling,",
      "Reading,",
    ],
    pageLink: "/experience",
  },
];

const maxOneSlide = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const maxFourSlide = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const multiSlide = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 20,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 12,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 8,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export { skillsData, workWithMe, maxOneSlide, maxFourSlide, multiSlide };
