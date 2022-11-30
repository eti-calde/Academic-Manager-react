import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import CoursesPage from "./pages/CoursesPage"
import CalendarioPage from './pages/CalendarioPage';
import LogInPage from './pages/LogInPage'
import ComputationPage from './pages/ComputacionPage';
import ForoPage from './pages/ForoPage';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import "./style/index.css";

function App() {
	const [navVisible, showNavbar] = useState(false);

	return (
		<BrowserRouter >
			<div className="App">
				<Routes>
					<Route path="/" element={<Navigate to="/log-in" />} />
					<Route path="/log-in" element={
						<div>
							<LogInPage></LogInPage>
						</div>
					} />
					<Route path='/cursos' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<Navbar visible={ navVisible } show={ showNavbar } />
							<CoursesPage></CoursesPage>
						</div>
					} />
					<Route path='/calendario' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<Navbar visible={ navVisible } show={ showNavbar } />
							<CalendarioPage></CalendarioPage>
						</div>
					}/>
					<Route path='/notas' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<Navbar visible={ navVisible } show={ showNavbar } />
							<h1>notas</h1>
						</div>
					}/>
					<Route path='/perfil' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<Navbar visible={ navVisible } show={ showNavbar } />
							<h1>perfil</h1>
						</div>
					}/>
					<Route path='/cursos/computacion cientifica' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<Navbar visible={ navVisible } show={ showNavbar } />
							<ComputationPage></ComputationPage>
						</div>
					}/>
					<Route path='/cursos/computacion cientifica/foro' element={
						<div className={!navVisible ? "page" : "page page-with-navbar"}>
							<Navbar visible={ navVisible } show={ showNavbar } />
							<ForoPage></ForoPage>
						</div>
					}/>
				</Routes>
			</div>
		</BrowserRouter>
  );
}

export default App;
