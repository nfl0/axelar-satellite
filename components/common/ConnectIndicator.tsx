import React from "react";
import { useAccount } from "wagmi";
import { useWalletStore } from "../../store";

export const ConnectIndicator = () => {
  const { walletConnected } = useWalletStore();

  if (walletConnected)
    return (
      <span className="flex items-center">
        <div className="relative w-2 h-2">
          <span className="absolute flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
            <span className="relative inline-flex w-2 h-2 bg-green-500 rounded-full"></span>
          </span>
        </div>
        <span className="ml-2 text-xs font-light">Connected</span>
      </span>
    );

  return (
    <span className="flex items-center">
      <div className="relative w-2 h-2">
        <span className="absolute flex w-2 h-2">
          <span className="absolute inline-flex w-full h-full bg-red-400 rounded-full opacity-75 animate-ping"></span>
          <span className="relative inline-flex w-2 h-2 bg-red-500 rounded-full"></span>
        </span>
      </div>
      <span className="ml-2 text-xs font-light">Not Connected</span>
    </span>
  );
};
