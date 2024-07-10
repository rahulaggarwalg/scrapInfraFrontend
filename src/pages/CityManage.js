import React, {useEffect, useState } from 'react'
import { CityMaster } from '../components/cityMaster'
import {getCityMaster} from './../services/cityMaster';
import { getItemFromCookie,setItemInCookie,removeItemInCookie } from '../helpers/cookie';
import { useNavigate } from "react-router-dom";
export default function LoginPage(){
    const [cityList, setCityList] = useState([]);
    const userAdminLogin = getItemFromCookie('userAdminLogin');
    const navigate = useNavigate();
    useEffect(() => {
        getCityData()
      }, []);
    const getCityData = async ()=>{
        if(!userAdminLogin){
            navigate('/login');
           }else if(userAdminLogin !=''){
            let GetCity = await getCityMaster(userAdminLogin);
            if(GetCity.success === 1){
                setCityList(GetCity.data)
            }else{
                removeItemInCookie('userEmail');
                removeItemInCookie('userAdminLogin');
                navigate('/login');
            }
        }
      } 
  return (
    <>
    {cityList && cityList.length > 0  &&  <CityMaster cityList={cityList}/>}
    </>
  )
}
