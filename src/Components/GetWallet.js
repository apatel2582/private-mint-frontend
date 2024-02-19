// src/Components/GetWallet.js
import React, { useState } from "react";

function GetWallet() {
  const [userId, setUserId] = useState("");
  const [wallet, setWallet] = useState(null);

  const fetchWallet = async () => {
    const response = await fetch(
      `http://localhost:3001/api/getWallet/${userId}`
    );
    const data = await response.json();
    setWallet(data);
  };

  return (
    <div>
      <h2>Get Wallet</h2>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <button onClick={fetchWallet}>Get Wallet</button>
      {wallet && (
        <div>
          <pre>{JSON.stringify(wallet, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default GetWallet;
