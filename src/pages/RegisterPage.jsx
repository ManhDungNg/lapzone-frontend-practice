import React from 'react'
import { useState } from 'react'
import authService from '../api/authService'
export default function RegisterPage() {
  const[error,setError]=useState('');
  const [formData,setFormData]=useState({
    fullname:'',
    email:'',
    phone:'',
    address:'',
    password:'',
    confirmPassword:'',
  });
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData((prev)=>({
      ...prev,[name]:value,
    }));
  }
  const handleSubmit=async(e)=>{
     e.preventDefault();
     if(formData.password!==formData.confirmPassword){
        setError("Xác nhận mật khẩu không khớp, vui lòng nhập lại");
     };

     try{
       const response= await authService.register(formData);
       console.log("phản hồi từ BE", response);
       alert("đăng ký thành công");
     }catch(err){
       setError(err.message);
     }
  }
  return (
   <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-slate-800 border border-slate-700 rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-blue-400">Lapzone</h1>
          <p className="text-slate-400 mt-2">Tạo tài khoản khách hàng mới</p>
        </div>
    {error&&(
        <div>
            {error}
        </div>
    )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Họ và tên
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Nguyễn Văn A"
              className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Số điện thoại
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                 onChange={handleChange}
                placeholder="0912345678"
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Địa chỉ
            </label>
            <input
              type="text"
              name="address"
              required
              value={formData.address}
               onChange={handleChange}
              placeholder="Hà Nội, Việt Nam"
              className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Mật khẩu
              </label>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                 onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Xác nhận mật khẩu
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                 onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-semibold py-2.5 rounded-lg transition-colors cursor-pointer"
          >
           đăng ký
          </button>
        </form>
      </div>
    </div>
  );
}
