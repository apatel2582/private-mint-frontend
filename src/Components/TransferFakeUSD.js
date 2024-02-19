// src/Components/TransferFakeUSD.js
import React, { useState } from "react";

function TransferFakeUSD() {
  const [fromUserId, setFromUserId] = useState("");
  const [toUserId, setToUserId] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const transferFakeUSD = async () => {
    const response = await fetch("http://localhost:3001/api/transferFakeUSD", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fromUserId, toUserId, amount }),
    });
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h2>Transfer FakeUSD</h2>
      <input
        type="text"
        value={fromUserId}
        onChange={(e) => setFromUserId(e.target.value)}
        placeholder="From User ID"
      />
      <input
        type="text"
        value={toUserId}
        onChange={(e) => setToUserId(e.target.value)}
        placeholder="To User ID"
      />
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button onClick={transferFakeUSD}>Transfer</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default TransferFakeUSD;
