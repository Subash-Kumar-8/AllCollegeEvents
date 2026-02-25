import React, { useState } from "react";
import Logo from "../assets/logo.svg"
import MenuBar from "./Menubar.jsx";
import './header.css'
import { CiLocationOn, CiSearch } from "react-icons/ci";
import Button from "./Buttons/btn";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { TiThMenu, TiThMenuOutline } from "react-icons/ti";


const Header = () => {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setOpened(!opened);
  };

  return (
    <>
      <div className="head">
        {opened ? (
          <TiThMenuOutline size={40} onClick={handleToggle} />
        ) : (
          <TiThMenu size={40} onClick={handleToggle} />
        )}

        <img src={Logo} alt="Logo" />

        <div className="search-box">
          <CiSearch size={22} />
          <input placeholder="Search events..." />
        </div>

        <div className="btnbox">
          <Button variant="secondary">
            <CiLocationOn size={22} />
          </Button>

          <Button variant="secondary">+ Create Event</Button>

          <Button variant="secondary">
            <IoIosNotifications size={22} />
          </Button>

          <CgProfile
            size={25}
            onClick={() => navigate("/profile")}
            className="profileichead"
          />
        </div>
      </div>

      {/* Sidebar Component */}
      <MenuBar opened={opened} setOpened={setOpened} />
    </>
  );
};

export default Header;