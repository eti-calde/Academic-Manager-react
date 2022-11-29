import React from 'react';
import {
	FaAngleRight,
	FaAngleLeft, 
	FaRegCalendarAlt, 
	FaHome, 
	FaUserAlt, 
	FaCog,
	FaSignOutAlt,
	FaBars,
} from 'react-icons/fa';
import {MdCalculate} from 'react-icons/md'
import { NavLink } from "react-router-dom";
import "../style/navbar.css";

const ICON_SIZE = 20;

function Navbar({visible, show}) {

	return (
		<>
			<div className="mobile-nav">
				<button
					className="mobile-nav-btn"
					onClick={() => show(!visible)}
				>
					<FaBars size={24}  />
				</button>
			</div>
			<nav className={!visible ? 'navbar' : ''}>
				<button
					type="button"
					className="nav-btn"
					onClick={() => show(!visible)}
				>
					{ !visible
						? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
				</button>
				<div>
					<NavLink
						className="logo"
						to="/"
					>
							<img
								src={require("../assets/Images/logo.png")}
								alt="logo"
							/>
					</NavLink>
					<div className="links nav-top">
						<NavLink to="/cursos" className="nav-link">
							<FaHome size={ICON_SIZE} />
							<span>Cursos</span>
						</NavLink>
						<NavLink to="/calendario" className="nav-link">
							<FaRegCalendarAlt size={ICON_SIZE} />
							<span>Calendario </span>
						</NavLink>
						<NavLink to="/notas" className="nav-link">
							<MdCalculate size={ICON_SIZE} />
							<span>Notas</span> 
						</NavLink>
						<NavLink to="/perfil" className="nav-link">
							<FaUserAlt size={ICON_SIZE} />
							<span>Perfil</span>
						</NavLink>
					</div>
				</div>

				<div className="links">
					<NavLink to="/configuraciones" className="nav-link">
						<FaCog size={ICON_SIZE} />
						<span>Settings</span> 
					</NavLink>
					<NavLink to="/log-in" className="nav-link">
						<FaSignOutAlt size={ICON_SIZE} />
						<span>Cerrar sesion</span> 
					</NavLink>
				</div>
			</nav>
		</>
  );
}

export default Navbar;
