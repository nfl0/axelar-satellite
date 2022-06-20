import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useConnect } from "wagmi";

export const Web3Modal = () => {
  // const { connect, connectors, isConnected } = useConnect();
  const modalRef = useRef<any>();

  function closeModal() {
    if (modalRef?.current?.checked) modalRef.current.checked = false;
  }

  // function handleOnMetamaskSwitch() {
  //   const metamaskConnector = connectors[0];
  //   connect(metamaskConnector);
  // }

  // function handleOnWalletConnectSwitch() {
  //   const walletConnectConnector = connectors[1];
  //   connect(walletConnectConnector);
  // }

  // function handleOnCoinbaseWalletSwitch() {
  //   const coinbaseConnector = connectors[2];
  //   connect(coinbaseConnector);
  // }

  // useEffect(() => {
  //   if (isConnected) closeModal();
  // }, [isConnected]);

  function renderConnectors() {
    return (
      <div>
        <h4 className="text-lg font-light text-white">Select Wallet</h4>
        <div className="grid grid-cols-2 mt-4 gap-x-4 gap-y-5">
          <button
            className="relative flex btn btn-neutral"
            // onClick={handleOnMetamaskSwitch}
          >
            <span>Metamask</span>
            <div className="ml-auto">
              <Image
                src="/assets/wallets/metamask.logo.svg"
                alt="metamask"
                layout="intrinsic"
                objectFit="contain"
                height={30}
                width={30}
              />
            </div>
          </button>
          {/* <button
            className="relative flex btn btn-primary bg-[#181A25]"
            // onClick={handleOnWalletConnectSwitch}
          >
            <span>Wallet Connect</span>
            <div className="ml-auto">
              <Image
                src="/assets/svg/walletconnect-logo.svg"
                alt="metamask"
                layout="intrinsic"
                objectFit="contain"
                height={30}
                width={30}
              />
            </div>
          </button>
          <button
            className="relative flex btn btn-primary bg-[#181A25]"
            // onClick={handleOnCoinbaseWalletSwitch}
          >
            <span>Coinbase Wallet</span>
            <div className="ml-auto">
              <Image
                src="/assets/svg/walletconnect-logo.svg"
                alt="metamask"
                layout="intrinsic"
                objectFit="contain"
                height={30}
                width={30}
              />
            </div>
          </button> */}
        </div>
      </div>
    );
  }

  return (
    <div>
      <input
        ref={modalRef}
        type="checkbox"
        id="web3-modal"
        className="modal-toggle"
      />
      <label
        htmlFor="web3-modal"
        className="cursor-pointer modal backdrop-blur-sm"
      >
        <label className="relative max-w-lg bg-base-100 modal-box">
          {renderConnectors()}
        </label>
      </label>
    </div>
  );
};