import React, {useEffect, useState } from 'react'
import { Measurement } from '../components/measurement'
import {getMeasurementMaster} from './../services/measurementMaster';
import { getItemFromCookie,setItemInCookie,removeItemInCookie } from '../helpers/cookie';
import { useNavigate } from "react-router-dom";
export default function LoginPage(){
    const [weightList, setWeightList] = useState([]);
    const userAdminLogin = getItemFromCookie('userAdminLogin');
    const navigate = useNavigate();
    useEffect(() => {
        getCityData();
      }, []);
    const getCityData = async ()=>{
        if(!userAdminLogin){
            navigate('/login');
           }else if(userAdminLogin !=''){
            let GetWeight = await getMeasurementMaster(userAdminLogin);
            if(GetWeight.success === 1){
              setWeightList(GetWeight.data)
            }else{
                removeItemInCookie('userEmail');
                removeItemInCookie('userAdminLogin');
                navigate('/login');
            }
        }
      } 
  return (
    <>
    {weightList && weightList.length > 0  &&  <Measurement weightList={weightList}/>}
    </>
  )
}
