import React, { useEffect, useState } from "react";
import axios from "axios";

const AccountBalance = () => {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/account/balance`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setBalance(response.data.balance);
      } catch (err) {
        setError("Failed to fetch balance.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, []);

  if (loading) return (
    <div className="relative backdrop-blur-lg bg-white/90 border border-emerald-100 rounded-2xl shadow-xl p-6 w-fit min-w-72">
      <div className="animate-pulse flex items-center space-x-4">
        <div className="w-12 h-12 bg-emerald-200 rounded-full"></div>
        <div className="space-y-2 flex-1">
          <div className="h-4 bg-emerald-200 rounded w-32"></div>
          <div className="h-6 bg-emerald-300 rounded w-24"></div>
        </div>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="relative backdrop-blur-lg bg-white/90 border border-red-200 rounded-2xl shadow-xl p-6 w-fit">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
          <div className="w-5 h-5 text-red-500">⚠</div>
        </div>
        <p className="text-red-600 font-medium">{error}</p>
      </div>
    </div>
  );

  return (
    <div className="relative backdrop-blur-lg bg-white/90 border border-emerald-100 rounded-2xl shadow-xl p-6 w-fit min-w-80 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full transform translate-x-6 -translate-y-6 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-green-100 to-emerald-100 rounded-full transform -translate-x-4 translate-y-4 opacity-30"></div>
      
      <div className="relative">
        <div className="flex items-center space-x-4 mb-4">
          {/* Wallet icon */}
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
            <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-sm"></div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-slate-700 mb-1">Wallet Balance</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
            ₹ {balance?.toLocaleString('en-IN') || '0'}
          </div>
        </div>
        
        <div className="mt-3 text-sm text-slate-500">
          Available for transactions
        </div>
      </div>
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 rounded-b-2xl"></div>
    </div>
  );
};

export default AccountBalance;