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

        const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
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

  if (loading) return <p>Loading balance...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4 bg-white rounded shadow-md w-fit">
      <h2 className="text-xl font-semibold">Your Wallet Balance</h2>
      <p className="text-2xl text-green-600 mt-2">₹ {balance}</p>
    </div>
  );
};

export default AccountBalance;
