import axiosClient from "./axiosClient";
const authService={
    register:(resgiterData)=>{
        return axiosClient.post('/api/auth/register',resgiterData);
    },
    login:(loginData)=>{
        return axiosClient.post('/api/auth/login',loginData)
    }
}
export default authService;