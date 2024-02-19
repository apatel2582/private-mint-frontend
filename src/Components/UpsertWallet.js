//src/Components/UpsertWallet.js
import React, { useState } from "react";
import axios from "axios";

function UpsertWallet() {
  const [userId, setUserId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/upsertWallet",
        { userId }
      );
      alert(`Wallet upserted: ${response.data.message}`);
    } catch (error) {
      alert(`Failed to upsert wallet: ${error.response.data.error}`);
    }
  };

  return (
    <div>
      <h2>Upsert Wallet</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UpsertWallet;
