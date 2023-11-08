import React, { useEffect, useState, useContext } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';

const Profile = () => {

    const user: any = useSelector((state: any) => state.loginUser.user.user);
    console.log('userrrr,', user);
    
    return (
        <div style={{display: "flex", justifyContent: "center", margin: "30px", border:"1px solid gainsboro", background:"antiquewhite"}}>
          
            <IconButton size="large">
                <AccountCircleIcon />
            </IconButton>
            <div className="fields" style={{display: "grid", fontWeight: "bold" }}>
                <span>{user.firstName + " " + user.lastName}</span>
                <span>{user.email}</span>
            </div>


        </div>
    )
}

export default Profile