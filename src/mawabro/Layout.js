import React, { useState } from "react";

import Accountm from './Account.js';
import Notificationm from './Notification.js';
import Uploadm from './Upload.js';




import { CgProfile } from "react-icons/cg";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaUpload } from "react-icons/fa6";
import { GrShieldSecurity } from "react-icons/gr";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Profile from "./Profile";
import Securitym from "./Securitym.js";

const Layout = () => {
    const [profile,setProfile]=useState(true);
    const [Notification,setNotification]=useState(false);
    const [Upload,setUpload]=useState(false);
    const [Security,setSecurity]=useState(false);
    const [Account,setAccount]=useState(false);


    function profilefunc(prev){
        setProfile(true)
        setNotification(false)
        setUpload(false)
        setSecurity(false)
        setAccount(false)
    }
    function Notificationfunc(prev){
        setProfile(false)
        setNotification(true)
        setUpload(false)
        setSecurity(false)
        setAccount(false)
    }
    function Uploadfunc(prev){
        setProfile(false)
        setNotification(false)
        setUpload(true)
        setSecurity(false)
        setAccount(false)
    }
    function Securityfunc(prev){
        setProfile(false)
        setNotification(false)
        setUpload(false)
        setSecurity(true)
        setAccount(false)
    }
    function Accountfunc(prev){
        setProfile(false)
        setNotification(false)
        setUpload(false)
        setSecurity(false)
        setAccount(true)
    }



  return (
    <>
      <div className="row">
        <div className="sidebar col-3">
          <Sidebar style={{width:"100%", height:"100%"}}>
            <Menu>
              
              <MenuItem icon={<CgProfile />} onClick={profilefunc} >  Profile </MenuItem>
              <MenuItem icon={<MdOutlineNotificationsActive />} onClick={ Notificationfunc} > Notification </MenuItem>
              <MenuItem icon={<FaUpload />} onClick={Uploadfunc} >  Upload  </MenuItem>
              <MenuItem icon={<GrShieldSecurity />} onClick={Securityfunc} > Security </MenuItem>
              <MenuItem icon={<CgProfile />} onClick={Accountfunc} >  Account </MenuItem>
              
            </Menu>
          </Sidebar>
        
        </div>
        <div className="sidebar col-8">
            {profile && <Profile/>}
            {Notification && <Notificationm/>}
            {Upload && <Uploadm/>}
            {Security && <Securitym/>}
            {Account && <Accountm/>}
            </div>
      </div>
    </>
  )
};

export default Layout;
