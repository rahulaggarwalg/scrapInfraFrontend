import React, { useEffect, useState } from 'react';
import { HomePageBanner } from "../components/homePageBanner"
import { getItemFromCookie,setItemInCookie,removeItemInCookie } from '../helpers/cookie';
import {getAddBanner} from './../services/addBanner';
import { useNavigate } from "react-router-dom";
export default function AddBanner () {
  const [allBanner, setAllBanner] = useState([]);
  const userAdminLogin = getItemFromCookie('userAdminLogin');
    const navigate = useNavigate();
  useEffect(() => {
    getAllAddBanner()
  }, []);
  const getAllAddBanner = async ()=>{
    if(!userAdminLogin){
        navigate('/login');
       }else if(userAdminLogin !=''){
        let GetBanner = await getAddBanner(userAdminLogin);
        if(GetBanner.success === 1){
          setAllBanner(GetBanner.data)
        }else{
            removeItemInCookie('userEmail');
            removeItemInCookie('userAdminLogin');
            navigate('/login');
        }
    }
  } 
  return (
    <HomePageBanner allBanner={allBanner} setAllBanner={setAllBanner}/>
  )
}
