import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import CoursesPage from "./pages/CoursesPage"
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import "./style/index.css";

function App() {
	const [navVisible, showNavbar] = useState(false);

	return (
		<BrowserRouter >
			<div className="App">
				<Navbar visible={ navVisible } show={ showNavbar } />
				<Routes>
					<Route path="/" element={<Navigate to="/log-in" />} />
					<Route path='/cursos' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<CoursesPage></CoursesPage>
						</div>
					} />
					<Route path='/calendario' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<h1>calendario</h1>
						</div>
					}/>
					<Route path='/notas' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<h1>notas</h1>
						</div>
					}/>
					<Route path='/perfil' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<h1>perfil</h1>
						</div>
					}/>
				</Routes>
			</div>
		</BrowserRouter>
  );
}

export default App;
