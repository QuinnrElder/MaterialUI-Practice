import React, { Fragment, FunctionComponent } from "react";

//MATERIAL-UI
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

//THIS.TYPE
type MenuDrawerProps = {
	isDrawerOpen: boolean;
	openCloseHamburgerMenu: (isOpen: boolean) => void;
};
//THIS.COMPONENT
export const MenuDrawer: FunctionComponent<MenuDrawerProps> = ({
	isDrawerOpen,
	openCloseHamburgerMenu,
}) => {
	const toggleDrawer = (open: boolean) => {};

	const list = () => (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={() => toggleDrawer(false)}
			onKeyDown={() => toggleDrawer(false)}
		>
			<IconButton
				size="large"
				edge="end"
				color="inherit"
				aria-label="open drawer"
				sx={{ mr: 2, width: 'auto'}}
				onClick={() => openCloseHamburgerMenu(false)}
			>
				<MenuIcon />
			</IconButton>
			<List>
				{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{["All mail", "Trash", "Spam"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<Fragment>
			<Drawer
				anchor={"left"}
				open={isDrawerOpen}
				onClose={() => toggleDrawer(false)}
			>
				{list()}
			</Drawer>
		</Fragment>
	);
};
