import todoapp from "../images/todoapp.png";
import quizapp from "../images/quizapp.png";
import eligarments from "../images/eligarments.png";
import ecomweb from "../images/ecomweb.png";
import osproject from "../images/osproject.png";
import simpleport from "../images/simpleportfolio.png";
import iphone from "../images/iphone.png";
import redragon from "../images/redragon.png";
import daraz from "../images/daraz.png";
import pokemon from "../images/pokemon.png";
import portfolioImg03 from "../images/portfolioImg03";

const portfolios = [
	{
		id: "01",
		imgUrl: ecomweb,
		category: "Web Design",
		title: "Ecommerce Website",
		technologies: ["React", "Tailwind css"],
		siteUrl: "https://ecommerce-live-delta.vercel.app/",
	},
	{
		id: "02",
		imgUrl: osproject,
		category: "Web Design",
		title: "Operating System Project",
		technologies: ["React", "Tailwind css"],
		siteUrl: "https://os-project-eight.vercel.app/",
	},
	{
		id: "03",
		imgUrl: eligarments,
		category: "Web Design",
		title: "Ecommerce Landing Page",
		technologies: ["HTML5", "CSS3", "Firebase Database"],
		siteUrl: "https://eli-garments.web.app",
	},
	{
		id: "04",
		imgUrl: todoapp,
		category: "Web Design",
		title: "Todo App",
		technologies: ["HTML5", "CSS3"],
		siteUrl: "https://todo-app-de6a6.web.app",
	},
	{
		id: "05",
		imgUrl: quizapp,
		category: "Web Design",
		title: "Quiz App",
		technologies: ["HTML5", "CSS3"],
		siteUrl: "https://quizapp-00.web.app",
	},

	{
		id: "06",
		imgUrl: simpleport,
		category: "Web Design",
		title: "Simple Portfolio",
		technologies: ["HTML5", "CSS3"],
		siteUrl: "https://umair-yahya.github.io/portfolio/",
	},
	{
		id: "07",
		imgUrl: iphone,
		category: "Web Design",
		title: "IPhone Landing Page",
		technologies: ["HTML5", "CSS3"],
		siteUrl:
			"https://portfolio-umair.web.app/Assignments/Assignment08/index.html",
	},
	{
		id: "08",
		imgUrl: redragon,
		category: "Web Design",
		title: "Redragon Website Landing Page",
		technologies: ["HTML5", "CSS3"],
		siteUrl: "https://umair-practice1.web.app/",
	},
	{
		id: "09",
		imgUrl: daraz,
		category: "Web Design",
		title: "Daraz Clone",
		technologies: ["HTML5", "CSS3"],
		siteUrl: "https://daraz-clone-page.web.app/",
	},
	{
		id: "10",
		imgUrl: pokemon,
		category: "Web Design",
		title: "Pokemon Website Clone",
		technologies: ["HTML5", "CSS3"],
		siteUrl:
			"https://portfolio-umair.web.app/Assignments/Assignment09/index.html",
	},
	{
		id: "11",
		imgUrl: portfolioImg03,
		category: "backend",
		title: "Backend Setup",
		technologies: ["MongoDB", "ExpressJs", "Rest Api's"],
		siteUrl: "https://github.com/umair-yahya/MongoDb-Setup",
	},
];

export default portfolios;
