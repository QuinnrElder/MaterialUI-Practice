import React, { Fragment, FunctionComponent, useState } from "react";

//MATERIAL-UI
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { MenuDrawer } from "../MenuDrawer/MenuDrawer";

//STYLES~Material-UI
const Search = styled('div')(({ theme }) => ({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    }));
    
    const SearchIconWrapper = styled('div')(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }));
    
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: 'inherit',
      '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
    }));

//THIS.TYPE
type HeaderBarProps = {
      //openHamburgerMenu: (isOpen:boolean) => void
};
//THIS.COMPONENT
export const HeaderBar: FunctionComponent<HeaderBarProps> = ({}) => {
      const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false)
      const openCloseHamburgerMenu = (isOpenAction:boolean) => {
        setIsHamburgerOpen(isOpenAction)
      }

      const tester = (value:string) => {
            console.log(value)
      }

	return (
		<Fragment>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="open drawer"
							sx={{ mr: 2 }}
                                          onClick={() => openCloseHamburgerMenu(true)}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
						>
							Menu
						</Typography>
						<Search>
							<SearchIconWrapper>
								<SearchIcon />
							</SearchIconWrapper>
							<StyledInputBase
								placeholder="Search…"
								inputProps={{ "aria-label": "search menu in header" }}
                                                onChange={(e) => tester(e.target.value)}
							/>
						</Search>
					</Toolbar>
				</AppBar>
			</Box>
                  <MenuDrawer isDrawerOpen={isHamburgerOpen} openCloseHamburgerMenu={openCloseHamburgerMenu}/>
		</Fragment>
	);
};
