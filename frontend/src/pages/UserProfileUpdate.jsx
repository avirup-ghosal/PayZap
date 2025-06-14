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
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow space-y-4">
      <h2 className="text-xl font-bold text-center">Update Profile</h2>

      <input
        type="password"
        placeholder="Current Password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <Button label={"Update Profile"} onClick={handleUpdate} />

      {status && (
        <div
          className={`text-center text-sm font-medium ${
            status.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {status.message}
        </div>
      )}
    </div>
  );
};

export default UserProfileUpdate;
