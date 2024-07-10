import { httpClient } from "../helpers/http-client";
const adminLogin = async(data) => {
    try {
        const response = await httpClient.post(process.env.REACT_APP_BASE_URL+`/api/users/login/admin`,data,{});
        return response.data;
    } catch (err) {
        console.error('error in adminLogin APi ', err);
    }
}
const adminGetUser = async(token) => {
    let headers = {
        Authorization:`Bearer ${token}`,
    }
    try {
        const response = await httpClient.get(process.env.REACT_APP_BASE_URL+`/api/users`,
            {
                headers
            }
        );
    
       return response.data;
    } catch (err) {
        console.error('error in adminLogin APi ', err);
    }
}
export {
    adminLogin,
    adminGetUser
}