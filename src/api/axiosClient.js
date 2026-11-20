import axios from "axios";
const axiosClient=axios.create({
    baseURL:'http://localhost:8080',
    headers:{
        'Content-Type':'application/json',
    },
    withCredentials:true,
});

axiosClient.interceptors.request.use(
    (config)=>{
        const token=localStorage.getItem('token');
        if(token){
            config.headers.Authorization='Bearer ${token}';
        }
      return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
)   

   axiosClient.interceptors.response.use(
   (response)=>{
    return response.data;
   },
   (error)=>{
    const messsage=error.response?.data?.message||'có lỗi xảy ra ,vui lòng thử lại sau'
    return Promise.reject(new Error(messsage));
   }
);
export default axiosClient;
