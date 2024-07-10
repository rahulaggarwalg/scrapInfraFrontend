import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Validation from '../form/Validation';
import { getItemFromCookie,setItemInCookie,removeItemInCookie } from '../helpers/cookie';
import { DashBoard } from '../components'
import { adminLogin,adminGetUser } from '../services/userServices';
export default function DashBoardPage(){
    const [userDetails, setUserDetails] = useState('');
    const [allUserDetails, setAllUserDetails] = useState('');
    const userAdminLogin = getItemFromCookie('userAdminLogin');
    const navigate = useNavigate();
  useEffect(() => {
    getUserData()
  }, []);
  const getUserData = async ()=>{
    if(!userAdminLogin){
        navigate('/login');
       }else if(userAdminLogin !=''){
        let GetUser = await adminGetUser(userAdminLogin);
        if(GetUser.success === 1){
            let userEmail = getItemFromCookie('userEmail');
            let user = GetUser.data.filter((item)=>item.email === userEmail && item.userType === "Admin" );
            setUserDetails(user[0]);
            setAllUserDetails(GetUser.data);
        }else{
            removeItemInCookie('userEmail');
            removeItemInCookie('userAdminLogin');
            navigate('/login');
        }
    }
  } 
  console.log(allUserDetails, 'allUserDetails')
  return (
    allUserDetails.length > 0? <DashBoard userDetails={userDetails} allUserDetails={allUserDetails}/>:''
  )
}
