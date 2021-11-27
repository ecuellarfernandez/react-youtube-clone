import {Apps, AccessTime, Favorite, Save, Build, Assessment} from "@material-ui/icons";
export const SidebarData = [
	{
		title: "menu",
		cName: "nav-menu__title",
	},
	{
		title: "home",
		icon: <Apps />,
		link: "/",
		cName: "nav-menu__item",
	},
	{
		title: "history",
		icon: <AccessTime />,
		link: "/history",
		cName: "nav-menu__item",
	},
	{
		title: "liked videos",
		icon: <Favorite />,
		link: "/fav",
		cName: "nav-menu__item",
	},
	{
		title: "saved videos",
		icon: <Save />,
		link: "/saved",
		cName: "nav-menu__item",
	},

	{
		title: "tools",
		cName: "nav-menu__title",
	},
	{
		title: "Api tester",
		icon: <Build />,
		link: "/api-tester",
		cName: "nav-menu__item",
	},
	{
		title: "analytics",
		icon: <Assessment />,
		link: "/analytics",
		cName: "nav-menu__item",
	},
	{
		title: "unit tests",
		icon: <Build />,
		link: "/unit-tests",
		cName: "nav-menu__item",
	},
];
