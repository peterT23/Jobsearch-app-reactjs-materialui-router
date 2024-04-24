import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import {
  Link as RouterLink,
  useLoaderData,
  useNavigate,
  useSubmit,
  useSearchParams,
  redirect,
} from "react-router-dom";
import Link from "@mui/material/Link";

import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import SearchIcon from "@mui/icons-material/Search";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import AuthContext from "../auth/AuthContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  // const [auth, setAuth] = useState(true);

  const { jobs, q } = useLoaderData();

  const auth = React.useContext(AuthContext);
  // const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();
  const submit = useSubmit();
  const [searchParams, setSearchParams] = useSearchParams();
  // const q = searchParams.get("q");
  const handleChange = (event) => {
    // setAuth(event.target.checked);

    // setAuth(event.target.checked);
    if (auth.user) {
      auth.signOut(() => {
        navigate("/");
      });
      return;
    }
    navigate("/login");
  };

  // const handleMenu = (event) => {
  //   console.log("e anchor", event);
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block", color: "white" } }}
          >
            <Link
              component={RouterLink}
              sx={{ color: "white", textDecoration: "none" }}
              to="/"
            >
              Job Search
            </Link>
          </Typography>
          <Box component="form">
            <Search sx={{ pr: "2%", mr: "30px" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                name="q"
                id="q"
                type="search"
                defaultValue={q}
                onChange={(e) => {
                  submit(e.currentTarget.form);
                  console.log("e.currentTarget.form", e.currentTarget.form);
                  setSearchParams({ q: e.currentTarget.value });
                }}
              />
            </Search>
          </Box>
          <Box flexGrow={3} />
          <Box>
            <FormGroup>
              <FormControlLabel
                sx={{
                  bgcolor: "white",
                  color: "#1976d2",
                  fontWeight: "bold",
                  px: "10px",
                  borderRadius: "10px",
                }}
                control={
                  <Switch
                    checked={auth.user ? true : false}
                    onChange={handleChange}
                    aria-label="login switch"
                  />
                }
                label={auth.user ? "Logout" : "Login"}
              />
            </FormGroup>
          </Box>
          <Box>
            {auth.user && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  // onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  // anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  // open={Boolean(anchorEl)}
                  // onClose={handleClose}
                >
                  {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem> */}
                </Menu>
              </div>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
