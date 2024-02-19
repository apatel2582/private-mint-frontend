// src/Components/CheatAddFakeUSD.js
import React, { useState } from "react";

function CheatAddFakeUSD() {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const addFakeUSD = async () => {
    const response = await fetch("http://localhost:3001/api/cheatAddFakeUSD", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, amount }),
    });
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h2>Add FakeUSD</h2>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button onClick={addFakeUSD}>Add</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CheatAddFakeUSD;
