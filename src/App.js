import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";
import { Helmet } from "react-helmet";

function App() {
	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Umair Portfolio</title>
				<link rel="canonical" href="http://mysite.com/example" />
				<meta name="description" content="Icon And Title" />
			</Helmet>
			<Header />
			<main>
				<Hero />
				<Services />
				<Portfolio />
				<Contact />
			</main>
			<Footer />
		</>
	);
}

export default App;
