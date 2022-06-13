import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Button, IconButton } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import SearchIcon from "@mui/icons-material/Search";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import { getSession, signOut } from "next-auth/react";
function Header({ session }) {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex">
        <div>
          <IconButton size="large">
            <MenuIcon color="#5f6368" size="3xl" />
          </IconButton>
        </div>
        <div className="flex items-center">
          <DescriptionIcon className="text-blue-500 " sx={{ fontSize: 50 }} />
          <h1 className="font-sans text-2xl font-semibold text-gray-500 ml-2 hover:underline cursor-pointer">
            Docs
          </h1>
        </div>
      </div>
      <div className="flex items-center bg-gray-100 p-3 rounded-lg  md:w-6/12 focus-within:bg-white focus-within:border  focus-within:shadow-sm">
        <SearchIcon className="text-gray-500" />
        <input
          placeholder="Search"
          className="bg-transparent outline-none w-full pl-2"
        />
      </div>
      <div className="flex items-center justify-between  md:w-24 ">
        <div>
          <IconButton>
            <AppsRoundedIcon />
          </IconButton>
        </div>
        <div className="hidden md:block ">
          <IconButton size="small" onClick={signOut}>
            <Avatar src={session.user.image} alt="" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
