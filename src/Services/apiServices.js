import axiosServices from "../Api/axiosServices";

// ADD RESUME API
export const addResumeAPI=async(reqBody)=>{
    return await axiosServices('POST','/resumes',reqBody)

}