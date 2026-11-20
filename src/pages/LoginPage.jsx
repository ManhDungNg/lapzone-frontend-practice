import React from 'react'
import { useState } from 'react'
import authService from '../api/authService'
import { useAuth } from '../contexts/AuthContext';
export default function LoginPage() {
  const {login}=useAuth();
  const [loginData,setLoginData]=useState({
    identifier:'',
    password:'',
  });
  const [error,setError]=useState('');
  const handleChange=(e)=>{
     const {name,value}=e.target;
     setLoginData((prev)=>({
       ...prev,[name]:value
     }));
  }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
          const response=await authService.login(loginData);
          console.log("đăng nhập thành công, thông báo của BE trả về là : ",response);
          login(response);
          alert("ĐĂNG NHẬP THÀNH CÔNG");
        }catch(err){
          setError(err.message);
        }
    }
return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-extrabold text-blue-400 text-center mb-6">
          ĐĂNG NHẬP LAPZONE
        </h1>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              TÀI KHOẢN
            </label>
            <input
              type="text"
              value={loginData.identifier}
              name="identifier"
              onChange={handleChange}
              placeholder="Nhập tài khoản của bạn"
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              MẬT KHẨU
            </label>
            <input
              type="password"
              value={loginData.password}
              name="password"
              onChange={handleChange}
              placeholder="Nhập mật khẩu của bạn"
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-lg transition-colors cursor-pointer"
          >
            ĐĂNG NHẬP
          </button>
        </form>
      </div>
    </div>
  );
}
