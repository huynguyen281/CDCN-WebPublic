import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {getCurrentNameItemNav} from "../../app/reducer/nameItemNav/nameItemNavSlice";


import { IItemNavbar } from "./navbarTypes";

export const ItemNavbar: React.FC<IItemNavbar> = ({ name, navigate, handleClickItem }) => {
	const selectedItem = useSelector(getCurrentNameItemNav);

	return (
		<NavLink to={navigate}>
			<Box
				color={selectedItem === name ? "#fea774" : "#332c47"}
				padding="10px"
				//backgroundColor={selectedItem === name ? "#ffdfaf" : ""}
				borderRadius={selectedItem === name ? "30px" : ""}
				_hover={{ color: '#fea774' }}
				onClick={handleClickItem}
			>
				{name}
			</Box>
		</NavLink>
	);
};
