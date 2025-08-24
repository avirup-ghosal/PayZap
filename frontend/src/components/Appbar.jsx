import { Link } from "react-router-dom"
import { LogoutButton } from "./LogoutButton"

export const Appbar = () => {
    return (
        <div className="relative backdrop-blur-lg bg-white/90 border-b border-emerald-100 shadow-xl h-16 flex justify-between items-center overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 via-teal-50 to-green-50 opacity-50"></div>
            
            {/* Animated background elements */}
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-emerald-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-1 right-20 w-6 h-6 bg-teal-200 rounded-full opacity-20 animate-pulse delay-500"></div>
            
            <div className="relative flex items-center ml-6">
                <div className="flex items-center space-x-3">
                    {/* Logo icon */}
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-12">
                        <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                            <div className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full"></div>
                        </div>
                    </div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 text-2xl font-bold tracking-tight">
                        PayZap
                    </div>
                </div>
            </div>

            <div className="relative flex items-center space-x-4 mr-6">
                <div className="text-slate-600 font-medium">
                    Welcome
                </div>
                
                <Link to="/profile" className="group relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 border-2 border-emerald-200 rounded-full flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:border-emerald-300 group-hover:bg-gradient-to-br group-hover:from-emerald-200 group-hover:to-teal-200">
                        <div className="text-emerald-700 font-semibold text-sm group-hover:text-emerald-800">
                            Profile
                        </div>
                    </div>
                    {/* Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        View Profile
                    </div>
                </Link>
                
                <div className="transform transition-all duration-200 hover:scale-105">
                    <LogoutButton />
                </div>
            </div>
            
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500"></div>
        </div>
    )
}