// src/App.js
import React from "react";
import "./App.css";
import UpsertWallet from "./Components/UpsertWallet";
import GetWallet from "./Components/GetWallet";
import CheatAddFakeUSD from "./Components/CheatAddFakeUSD";
import TransferFakeUSD from "./Components/TransferFakeUSD";
import PurchasePMCoin from "./Components/PurchasePMCoin";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Private Mint Frontend</h1>
        <UpsertWallet />
        <GetWallet />
        <CheatAddFakeUSD />
        <TransferFakeUSD />
        <PurchasePMCoin />
      </header>
    </div>
  );
}

export default App;
