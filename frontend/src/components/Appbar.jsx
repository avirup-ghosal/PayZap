import { Link } from "react-router-dom"
import { LogoutButton } from "./LogoutButton"

export const Appbar = () => {
    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4 text-lime-500 text-xl font-bold">
            PayZap
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                Your
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    <Link to="/profile">Profile</Link>
                </div>
                
            </div>
            <div className="flex flex-col justify-center h-full mr-4">
                    <LogoutButton />
            </div>
        </div>
    </div>
}