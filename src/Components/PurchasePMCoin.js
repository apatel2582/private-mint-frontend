// src/Components/PurchasePMCoin.js
import React, { useState } from "react";

function PurchasePMCoin() {
  const [userId, setUserId] = useState("");
  const [pmCoinAmount, setPmCoinAmount] = useState("");
  const [message, setMessage] = useState("");

  const purchasePMCoin = async () => {
    const response = await fetch("http://localhost:3001/api/purchasePMCoin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, pmCoinAmount }),
    });
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h2>Purchase PMCoin</h2>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <input
        type="text"
        value={pmCoinAmount}
        onChange={(e) => setPmCoinAmount(e.target.value)}
        placeholder="PM Coin Amount"
      />
      <button onClick={purchasePMCoin}>Purchase</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default PurchasePMCoin;
