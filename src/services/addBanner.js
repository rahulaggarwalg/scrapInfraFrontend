import { httpClient } from "../helpers/http-client";
const getAddBanner = async(token) => {
    let headers = {
        Authorization:`Bearer ${token}`,
    }
    try {
        const response = await httpClient.get(process.env.REACT_APP_BASE_URL+`/api/ad`,
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
    getAddBanner
}