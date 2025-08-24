import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/bulk?filter=` + filter)
            .then(response => {
                setUsers(response.data.user)
            })
    }, [filter])

    return (
        <div className="relative backdrop-blur-lg bg-white/90 border border-emerald-100 rounded-2xl shadow-xl p-6 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full transform translate-x-12 -translate-y-12 opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-100 to-emerald-100 rounded-full transform -translate-x-8 translate-y-8 opacity-20"></div>
            
            <div className="relative">
                <div className="flex items-center space-x-3 mb-6">
                    {/* Users icon */}
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </div>
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                        Send Money To
                    </h2>
                </div>
                
                <div className="mb-6">
                    <div className="relative">
                        <input 
                            onChange={(e) => {
                                setFilter(e.target.value)
                            }} 
                            type="text" 
                            placeholder="Search users..." 
                            className="w-full px-4 py-3 pl-12 border border-emerald-200 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-300 transition-all duration-200 placeholder-slate-400"
                        />
                        {/* Search icon */}
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-emerald-400">
                            🔍
                        </div>
                    </div>
                </div>
                
                <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
                    {users.map((user, index) => <User key={user._id || index} user={user} />)}
                </div>
            </div>
        </div>
    )
}

function User({user}) {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center p-4 bg-white/60 backdrop-blur-sm border border-emerald-100 rounded-xl transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:bg-white/80 group">
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-200 to-teal-200 border-2 border-emerald-300 rounded-full flex items-center justify-center transform transition-all duration-200 group-hover:scale-110 group-hover:shadow-md">
                        <div className="text-emerald-700 font-bold text-lg group-hover:text-emerald-800">
                            {user.firstName[0].toUpperCase()}
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col">
                    <div className="font-semibold text-slate-700 group-hover:text-slate-800 transition-colors duration-200">
                        {user.firstName} {user.lastName}
                    </div>
                    <div className="text-sm text-slate-500">
                        Available for transfer
                    </div>
                </div>
            </div>

            <div className="transform transition-all duration-200 hover:scale-105">
                <Button 
                    onClick={(e) => {
                        navigate("/send?id=" + user._id + "&name=" + user.firstName);
                    }} 
                    label={"Send Money"} 
                />
            </div>
        </div>
    )
}