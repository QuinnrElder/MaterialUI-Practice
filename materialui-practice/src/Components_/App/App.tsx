import React from "react";
import logo from "./logo.svg";
import "./App.css";

//COMPONENTS
import { HeaderBar } from "../HeaderBar/HeaderBar";

//MATERIAL-UI
import { PhotoCamera } from "@mui/icons-material";
import {
	Typography,
	AppBar,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CssBaseline,
	Grid,
	Toolbar,
	Container,
} from "@mui/material";

function App() {
	return (
		<>
			<HeaderBar />
		</>
	);
}

export default App;
