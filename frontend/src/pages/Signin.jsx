import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignin = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/signin`, {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials or server error");
      console.error(err);
    }
  };

  return (
    <div 
      className="min-h-screen flex justify-center items-center p-4"
      style={{
        background: 'linear-gradient(135deg, #059669 0%, #0d9488 50%, #16a34a 100%)'
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-20 -right-4 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative flex flex-col justify-center">
        <div className="backdrop-blur-lg bg-white/90 border border-white/20 shadow-2xl rounded-2xl w-96 text-center p-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            </div>
          </div>

          <div className="mt-4">
            <Heading label={"Sign in"} />
            <SubHeading label={"Enter your credentials to access your account"} />
          </div>

          <div className="space-y-4 mt-6">
            <div className="transform transition-all duration-200 hover:scale-105">
              <InputBox
                onChange={(e) => setUsername(e.target.value)}
                placeholder="avirup"
                label={"Username"}
              />
            </div>
            
            <div className="transform transition-all duration-200 hover:scale-105">
              <InputBox
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                label={"Password"}
              />
            </div>
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl transform transition-all duration-300 animate-pulse">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-red-500 text-lg">❌</span>
                <span className="text-red-600 font-medium text-sm">{error}</span>
              </div>
            </div>
          )}

          <div className="pt-6">
            <div className="transform transition-all duration-200 hover:scale-105 active:scale-95">
              <Button onClick={handleSignin} label={"Sign in"} />
            </div>
          </div>

          <div className="mt-6">
            <BottomWarning 
              label={"Don't have an account?"} 
              buttonText={"Sign up"} 
              to={"/signup"} 
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 rounded-b-2xl"></div>
        </div>
      </div>
    </div>
  );
};