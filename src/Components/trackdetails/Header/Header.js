"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const navItems = ["GENRES", "MOODS", "DURATION", "BFM"];
const rightItems = ["POPULAR TRACKS", "(ADD FILTER)"];

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  const handleOpenMenu = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };

  const handleOpenMobileMenu = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleCloseMobileMenu = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <AppBar position="static" className="!bg-transparent !shadow-none">
      <Toolbar className="flex justify-between px-[30px]">
        {/* Left side desktop (visible >=900px) */}
        <div className="max-[900px]:hidden flex space-x-4">
          {navItems.map((item) => (
            <div
              key={item}
              className="flex items-center cursor-pointer uppercase text-[12px] lg:text-[14px] font-medium leading-[20px] text-[#FAFAFACC]"
              style={{ fontFamily: "IBM_Plex_Mono_Medium" }}
              onClick={(e) => handleOpenMenu(e, item)}
            >
              {item}
              <ArrowDropDownIcon fontSize="small" />
            </div>
          ))}
        </div>

        {/* Left side mobile (<900px) */}
        <div className="max-[900px]:block hidden">
          <IconButton color="inherit" edge="start" onClick={handleOpenMobileMenu}>
            <MenuIcon className="text-[#FAFAFACC]" />
          </IconButton>
        </div>

        {/* Right side (always visible) */}
        <div className="flex space-x-1 md:space-x-2 lg:space-x-4">
          {rightItems.map((item) => (
            <div
              key={item}
              className="flex items-center cursor-pointer uppercase text-[12px] lg:text-[14px] font-medium leading-[20px] text-[#FAFAFACC]"
              style={{ fontFamily: "IBM_Plex_Mono_Medium" }}
              onClick={(e) => handleOpenMenu(e, item)}
            >
              {item}
              <ArrowDropDownIcon fontSize="small" />
            </div>
          ))}
        </div>
      </Toolbar>

      {/* Dropdown Menu (desktop + right side) */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        PaperProps={{
          className: "!bg-black",
        }}
      >
        <MenuItem
          onClick={handleCloseMenu}
          className="uppercase text-[14px] font-medium leading-[20px] text-[#FAFAFACC]"
          style={{ fontFamily: "IBM_Plex_Mono_Medium",color:"#FAFAFACC" }}
        >
          Option 1
        </MenuItem>
        <MenuItem
          onClick={handleCloseMenu}
          className="uppercase text-[14px] font-medium leading-[20px] text-[#FAFAFACC]"
          style={{ fontFamily: "IBM_Plex_Mono_Medium",color:"#FAFAFACC" }}
        >
          Option 2
        </MenuItem>
        <MenuItem
          onClick={handleCloseMenu}
          className="uppercase text-[14px] font-medium leading-[20px] text-[#FAFAFACC]"
          style={{ fontFamily: "IBM_Plex_Mono_Medium",color:"#FAFAFACC" }}
        >
          Option 3
        </MenuItem>
      </Menu>

      {/* Mobile Hamburger Menu */}
      <Menu
        anchorEl={mobileMenuAnchor}
        open={Boolean(mobileMenuAnchor)}
        onClose={handleCloseMobileMenu}
        PaperProps={{
          className: "!bg-black !text-[#FAFAFACC]",
        }}
      >
        {navItems.map((item) => (
          <MenuItem
            key={item}
            className="uppercase text-[14px] font-medium leading-[20px] text-[#FAFAFACC]"
            style={{ fontFamily: "IBM_Plex_Mono_Medium" }}
            onClick={(e) => handleOpenMenu(e, item)}
          >
            {item}
            <ArrowDropDownIcon fontSize="small" />
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
}
