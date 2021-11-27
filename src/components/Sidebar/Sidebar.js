import React, {useState} from "react";
import {Link} from "react-router-dom";
import {SidebarData} from "./SidebarData";
import {Menu, MenuOpen} from "@material-ui/icons";
import SearchBar from "../SearchBar";

function Sidebar(props) {
	const {searchHandler} = props;

	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<div className="navbar">
				<Link to="#" className="menu-bars">
					<Menu onClick={showSidebar} />
				</Link>
				<SearchBar submitHandler={searchHandler} />
			</div>
			<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
				<ul>
					<li className="navbar-toggle">
						<Link to="#">
							<MenuOpen onClick={showSidebar} />
						</Link>
					</li>
					{SidebarData.map((item) => {
						if (item.cName === "nav-menu__title") {
							return (
								<li>
									<h3 key={item.title} className={item.cName}>
										{item.title}
									</h3>
								</li>
							);
						}

						return (
							<li key={item.title}>
								<Link to={item.link} className={item.cName}>
									<i>{item.icon}</i>
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
}

export default Sidebar;
