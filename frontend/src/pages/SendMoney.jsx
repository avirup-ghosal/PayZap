
import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';

export const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleTransfer = async () => {
    if (!amount || amount <= 0) {
      setMessage("Please enter a valid amount.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/account/transfer`,
        { to: id, amount: Number(amount) },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage(res.data.message || "Transfer successful!");
      setAmount("");
    } catch (error) {
      setMessage(error.response?.data?.message || "Transfer failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex justify-center items-center p-4"
      style={{
        background: 'linear-gradient(135deg, #059669 0%, #0d9488 50%, #16a34a 100%)'
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-20 -right-4 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative backdrop-blur-lg bg-white/90 border border-white/20 shadow-2xl rounded-2xl w-full max-w-md p-8 transform transition-all duration-300 hover:scale-[1.02] overflow-hidden">
        {/* Top decorative element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full transform translate-x-12 -translate-y-12 opacity-30"></div>
        
        {/* Top accent */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="text-emerald-600 text-lg">💸</div>
          </div>
        </div>

        <div className="relative">
          {/* Header */}
          <div className="text-center mb-8 mt-4">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-2">
              Send Money
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto"></div>
          </div>

          {/* Recipient Info */}
          <div className="bg-white/60 backdrop-blur-sm border border-emerald-100 rounded-2xl p-6 mb-8 transform transition-all duration-200 hover:bg-white/80">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-200 hover:scale-110">
                <span className="text-2xl font-bold text-white">
                  {name?.[0]?.toUpperCase()}
                </span>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-700 mb-1">{name}</h3>
                <div className="text-sm text-slate-500">Ready to receive payment</div>
              </div>
            </div>
          </div>

          {/* Amount Input */}
          <div className="space-y-6 mb-8">
            <div>
              <label 
                className="block text-sm font-semibold text-slate-600 mb-3"
                htmlFor="amount"
              >
                💰 Amount (in Rs)
              </label>
              <div className="relative transform transition-all duration-200 hover:scale-[1.02]">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-600 font-bold text-lg">
                  ₹
                </div>
                <input
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                  type="number"
                  className="w-full pl-10 pr-4 py-4 border border-emerald-200 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-300 transition-all duration-200 placeholder-slate-400 text-lg font-semibold disabled:opacity-60"
                  id="amount"
                  placeholder="Enter amount"
                  disabled={loading}
                />
                {/* Input decoration */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                  💳
                </div>
              </div>
            </div>
          </div>

          {/* Transfer Button */}
          <button
            onClick={handleTransfer}
            disabled={loading || !amount}
            className={`relative w-full font-bold text-lg py-4 rounded-2xl transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-emerald-200 shadow-lg overflow-hidden ${
              loading || !amount
                ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:scale-105 hover:shadow-xl active:scale-95'
            }`}
          >
            {!loading && !amount && (
              <div className="absolute inset-0 bg-gradient-to-r from-slate-300 to-slate-400 opacity-70"></div>
            )}
            
            {loading && (
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              </div>
            )}
            
            <span className="relative z-10 flex items-center justify-center space-x-2">
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Processing Transfer...</span>
                </>
              ) : (
                <>
                  <span>Send Money</span>
                  <span className="text-xl">🚀</span>
                </>
              )}
            </span>
          </button>

          {/* Status Message */}
          {message && (
            <div className={`mt-6 p-4 rounded-2xl text-center font-medium transform transition-all duration-300 animate-fadeIn ${
              message.includes("successful") || message.includes("Transfer successful")
                ? "bg-green-50 border border-green-200 text-green-700"
                : "bg-red-50 border border-red-200 text-red-700"
            }`}>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-xl">
                  {message.includes("successful") || message.includes("Transfer successful") ? "✅" : "❌"}
                </span>
                <span>{message}</span>
              </div>
            </div>
          )}

          {/* Security Notice */}
          <div className="mt-8 p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
            <div className="flex items-start space-x-3">
              <span className="text-emerald-600 mt-0.5">🔒</span>
              <div className="text-sm text-emerald-700">
                <strong>Secure Transfer:</strong> All transactions are encrypted and processed securely. Your money will be transferred instantly.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 rounded-b-2xl"></div>
      </div>
    </div>
  );
};

export default SendMoney;