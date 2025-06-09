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
                const res=await axios.get("http://localhost:3000/api/v1/user/profile", {
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
        return <div className="text-red-500">{error}</div>;
    }
    if(!user){
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
          <Link to="/dashboard"><Button label={"<- Back"}></Button></Link>
          <h2 className="text-2xl font-semibold mb-4 text-center">Your Profile</h2>

          <div className="space-y-2 text-lg">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            {/* Add more fields if needed */}
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/profile/update"
              className="text-blue-600 underline hover:text-blue-800"
            >
              <Button label={"Edit Profile"}></Button>
            </Link>
          </div>
        </div>
      );
};

export default UserProfile;