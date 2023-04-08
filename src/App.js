import { useEffect } from "react";
import Home from "./pages/Home";
import { useColorMode } from "@chakra-ui/react";
import Form from "./components/Form";

function App() {

	const { colorMode, toggleColorMode } = useColorMode();
	window.localStorage.setItem("darkMode", 'true')
	useEffect(() => {
		const darkModeCookie = window.localStorage.getItem("darkMode");
		if (darkModeCookie === "true")
		  	toggleColorMode();
	}, []);

    return (
		<Form/>
    );
}

export default App;
