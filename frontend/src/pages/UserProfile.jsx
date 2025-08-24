import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
import { Button } from "../components/Button";

const UserProfile=()=>{
    const [user,setUser]=useState(null);
    const [error, setError]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        const fetchUser=async()=>{
            const token=localStorage.getItem("token");
            if(!token){
                navigate("/login");
                return;
            }
            try{
                const res=await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(res.data.user);
            }catch(err){
                setError("Failed to load user profile");
            }
        };
        fetchUser();
    }, [navigate]);

    if(error){
        return (
            <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-green-500 flex justify-center items-center p-4">
                <div className="backdrop-blur-lg bg-white/90 border border-red-200 rounded-2xl shadow-xl p-8 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="text-red-500 text-2xl">⚠</div>
                    </div>
                    <div className="text-red-600 font-semibold text-lg">{error}</div>
                </div>
            </div>
        );
    }
    
    if(!user){
        return (
            <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-green-500 flex justify-center items-center p-4">
                <div className="backdrop-blur-lg bg-white/90 border border-emerald-100 rounded-2xl shadow-xl p-8">
                    <div className="animate-pulse space-y-4">
                        <div className="w-20 h-20 bg-emerald-200 rounded-full mx-auto"></div>
                        <div className="space-y-2">
                            <div className="h-6 bg-emerald-200 rounded w-32 mx-auto"></div>
                            <div className="h-4 bg-emerald-100 rounded w-24 mx-auto"></div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-4 bg-emerald-100 rounded w-full"></div>
                            <div className="h-4 bg-emerald-100 rounded w-3/4"></div>
                            <div className="h-4 bg-emerald-100 rounded w-2/3"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-green-500 flex justify-center items-center p-4">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute top-20 -right-4 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
            </div>

            <div className="relative backdrop-blur-lg bg-white/90 border border-emerald-100 rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                {/* Top decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full transform translate-x-12 -translate-y-12 opacity-30"></div>
                
                <div className="relative">
                    {/* Back button */}
                    <div className="mb-6">
                        <Link to="/dashboard">
                            <div className="transform transition-all duration-200 hover:scale-105 inline-block">
                                <Button label={"← Back"} />
                            </div>
                        </Link>
                    </div>

                    {/* Profile header */}
                    <div className="text-center mb-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <div className="text-white font-bold text-2xl">
                                {user.firstName[0].toUpperCase()}{user.lastName[0].toUpperCase()}
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-2">
                            Your Profile
                        </h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto"></div>
                    </div>

                    {/* Profile details */}
                    <div className="space-y-6 mb-8">
                        <div className="bg-white/60 backdrop-blur-sm border border-emerald-100 rounded-xl p-4 transform transition-all duration-200 hover:bg-white/80">
                            <div className="flex items-center space-x-3">
                                
                                <div>
                                    <div className="text-sm text-slate-500 font-medium">Username</div>
                                    <div className="text-slate-700 font-semibold">{user.username}</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/60 backdrop-blur-sm border border-emerald-100 rounded-xl p-4 transform transition-all duration-200 hover:bg-white/80">
                            <div className="flex items-center space-x-3">
                               
                                <div>
                                    <div className="text-sm text-slate-500 font-medium">First Name</div>
                                    <div className="text-slate-700 font-semibold">{user.firstName}</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/60 backdrop-blur-sm border border-emerald-100 rounded-xl p-4 transform transition-all duration-200 hover:bg-white/80">
                            <div className="flex items-center space-x-3">
                               
                                <div>
                                    <div className="text-sm text-slate-500 font-medium">Last Name</div>
                                    <div className="text-slate-700 font-semibold">{user.lastName}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Edit profile button */}
                    <div className="text-center">
                        <Link to="/profile/update">
                            <div className="transform transition-all duration-200 hover:scale-105">
                                <Button label={"Edit Profile"} />
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 rounded-b-2xl"></div>
            </div>
        </div>
    );
};

export default UserProfile;