import React, { useState } from "react";
import Logo from "../assets/logo.svg"
import './header.css'
import { CiLocationOn, CiSearch } from "react-icons/ci";
import Button from "./Buttons/btn";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { TiThMenu, TiThMenuOutline } from "react-icons/ti";


const Header = () => {
    const [opened, setOpened] = useState(false);
    const handletoggle = () => {
        setOpened(!opened);
    }
    const navigate = useNavigate();
    return(
        <div className="head">
            {opened ? (
                <TiThMenuOutline size={50} onClick={handletoggle} />
            ) : (
                <TiThMenu size={50} onClick={handletoggle} />
            )}
            
            <img src = {Logo} alt = "Logo"/> 
            <div className="search-box">
                <CiSearch size = {22}/>
                <input />
            </div>
            <div className="btnbox">
                <Button  variant= 'secondary'> <CiLocationOn size = {22}/> </Button>
                <Button variant="secondary"> + Create Event </Button>
                <Button variant="secondary"> <IoIosNotifications size = {22}/> </Button>
                <CgProfile size = {25} onClick={() => navigate('/profile')} className="profileichead"/>
            </div>
            
        </div>
    );
}

export default Header;