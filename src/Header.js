import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<Avatar
					className="header__avatar"
					alt="The Inspired"
					// src={user?.photoURL}
					src=""
				/>
				<AccessTimeIcon />

				{/* Avatar for logged-in user */}
				{/* time action */}
			</div>
			<div className="header__search">
				<SearchIcon />
				<input placeholder="Search Inspired Community" />
			</div>
			<div className="header__right">
				<HelpOutlineIcon className="mui__icon" />
			</div>
		</div>
	);
}

export default Header;
