import axios from "axios";

const instance = axios.create({
  baseURL: "https://resume-builder-backend-rh1d.onrender.com",
  timeout: 5000,

});
instance.interceptors.response.use((response)=>{
    console.log("API RESPONSE RECIEVED");
    return response
    },
    (error)=>{
        if(error.response){
            const status=error.response.status
            if(status==401){
                console.log("Unauthorized Acess");
                
            }
            else if(status==404){
                console.log("API is NOT FOUND");
                
            }
            else if(status==500){
                console.log("Something went wrong");
                
                
            }else if(error.request){
                console.log("no response from the server");
                

            }
            else{
                console.log("error"+error.message);
                
            }
            return Promise.reject(error)
        }
    }







)
export default instance