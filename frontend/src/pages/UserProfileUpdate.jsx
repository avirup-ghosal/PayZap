import { useState } from "react";
import axios from "axios";
import { Button } from "../components/Button";

const UserProfileUpdate = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [status, setStatus] = useState(null); // success / error

  const handleUpdate = async () => {
    setStatus(null);

    if (!currentPassword) {
      setStatus({ type: "error", message: "Current password is required for updates." });
      return;
    }

    const updateData = { currentPassword };
    if (firstName) updateData.firstName = firstName;
    if (lastName) updateData.lastName = lastName;
    if (newPassword) updateData.password = newPassword;

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/update`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      setStatus({ type: "success", message: response.data.message });
      setFirstName("");
      setLastName("");
      setNewPassword("");
      setCurrentPassword("");
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.message || "Something went wrong";
      setStatus({ type: "error", message: msg });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-emerald-500 to-teal-500 flex justify-center items-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-20 -right-4 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative backdrop-blur-lg bg-white/90 border border-emerald-100 rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-300 hover:scale-[1.02] overflow-hidden">
        {/* Top decorative element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full transform translate-x-12 -translate-y-12 opacity-30"></div>
        
        {/* Top accent circle */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="text-emerald-600 text-sm">✏️</div>
          </div>
        </div>

        <div className="relative">
          <div className="text-center mb-8 mt-4">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-2">
              Update Profile
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto"></div>
          </div>

          <div className="space-y-5">
            {/* Current Password */}
            <div className="transform transition-all duration-200 hover:scale-[1.02]">
              <label className="block text-sm font-medium text-slate-600 mb-2">Current Password *</label>
              <input
                type="password"
                placeholder="Enter your current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full p-3 border border-emerald-200 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-300 transition-all duration-200 placeholder-slate-400"
              />
            </div>

            {/* First Name */}
            <div className="transform transition-all duration-200 hover:scale-[1.02]">
              <label className="block text-sm font-medium text-slate-600 mb-2">First Name</label>
              <input
                type="text"
                placeholder="Update first name (optional)"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3 border border-emerald-200 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-300 transition-all duration-200 placeholder-slate-400"
              />
            </div>

            {/* Last Name */}
            <div className="transform transition-all duration-200 hover:scale-[1.02]">
              <label className="block text-sm font-medium text-slate-600 mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Update last name (optional)"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-3 border border-emerald-200 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-300 transition-all duration-200 placeholder-slate-400"
              />
            </div>

            {/* New Password */}
            <div className="transform transition-all duration-200 hover:scale-[1.02]">
              <label className="block text-sm font-medium text-slate-600 mb-2">New Password</label>
              <input
                type="password"
                placeholder="Enter new password (optional)"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-3 border border-emerald-200 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-emerald-300 transition-all duration-200 placeholder-slate-400"
              />
            </div>
          </div>

          {/* Update Button */}
          <div className="mt-8">
            <div className="transform transition-all duration-200 hover:scale-105 active:scale-95">
              <Button label="🔄 Update Profile" onClick={handleUpdate} />
            </div>
          </div>

          {/* Status Message */}
          {status && (
            <div className={`mt-6 p-4 rounded-xl text-center font-medium transform transition-all duration-300 ${
              status.type === "success" 
                ? "bg-green-50 border border-green-200 text-green-700" 
                : "bg-red-50 border border-red-200 text-red-700"
            }`}>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-lg">
                  {status.type === "success" ? "✅" : "❌"}
                </span>
                <span>{status.message}</span>
              </div>
            </div>
          )}

          {/* Helper text */}
          <div className="mt-6 p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
            <div className="flex items-start space-x-2">
              <span className="text-emerald-600 mt-0.5">💡</span>
              <div className="text-sm text-emerald-700">
                <strong>Tip:</strong> Current password is required for all updates. Other fields are optional - leave blank to keep unchanged.
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

export default UserProfileUpdate;