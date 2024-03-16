import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";

function App() {
	useEffect(() => {
		Aos.init();
		document.title = "My Portfolio";
	}, []);

	return (
		<>
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
