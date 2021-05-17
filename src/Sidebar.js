import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import SidebarOption from "./SidebarOption";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from "./firebase";

function Sidebar() {
	const [channels, setChannels] = useState([]);

	useEffect(() => {
		db.collection("rooms").onSnapshot((snapshot) => {
			setChannels(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					name: doc.data().name,
				}))
			);
		});
	}, []);

	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<div className="sidebar__info">
					<h2>Inspired Global</h2>
					<h3>
						<FiberManualRecordIcon className="mui__icon" />
						Ayo TheInspired
					</h3>
				</div>

				<CreateIcon className="mui__icon" />
			</div>
			<SidebarOption Icon={InsertCommentIcon} title="Threads" />
			<SidebarOption Icon={MoveToInboxIcon} title="Mentions & Reactions" />
			<SidebarOption Icon={DraftsIcon} title="Saved Items" />
			<SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
			<SidebarOption Icon={PeopleAltIcon} title="People & User Groups" />
			<SidebarOption Icon={AppsIcon} title="Apps" />
			<SidebarOption Icon={FileCopyIcon} title="File browser" />
			<SidebarOption Icon={ExpandLessIcon} title="Show Less" />
			<hr />
			<SidebarOption Icon={ExpandMoreIcon} title="Channels" />
			<hr />
			<SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

			{channels.map((channel) => (
				<SidebarOption title={channel.name} id={channel.id} key={channel.id} />
			))}
		</div>
	);
}

export default Sidebar;