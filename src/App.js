import { useEffect } from "react";
import Home from "./pages/Home";
import { useColorMode } from "@chakra-ui/react";
import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Global/Navbar";
import Footer from "./components/Global/Footer";
function App() {

	const { colorMode, toggleColorMode } = useColorMode();
	window.localStorage.setItem("darkMode", 'true')
	useEffect(() => {
		const darkModeCookie = window.localStorage.getItem("darkMode");
		if (darkModeCookie === "true")
			toggleColorMode();
	}, []);

	return (<>
		<Navbar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
		<Footer />
	</>
	);
}

export default App;
