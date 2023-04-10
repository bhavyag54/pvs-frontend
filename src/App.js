import { useEffect } from "react";
import Home from "./pages/Home";
import { useColorMode } from "@chakra-ui/react";
import Form from "./components/Form";
import Navbar from "./components/NavBar";
import {Routes, Route} from 'react-router-dom'
import useApi from "./context/AppContext";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./hooks/PrivateRoute";

function App() {

	const { colorMode, toggleColorMode } = useColorMode();
	window.localStorage.setItem("darkMode", 'true')
	useEffect(() => {
		const darkModeCookie = window.localStorage.getItem("darkMode");
		if (darkModeCookie === "true")
		  	toggleColorMode();
	}, []);

	const {accountData} = useApi()

    return (
		<>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Dashboard/>}/>
				<Route path="/createPoll" element={<Form/>}/>
			</Routes>
		</>
    );
}

export default App;
