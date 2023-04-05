import React from "react";
import Image from "next/image";

import { getSelectedAssetSymbol, useSwapStore } from "~/store";

import { useGetRelayerGasFee } from "~/hooks";
import { copyToClipboard } from "~/utils";
import { showDepositAddressCondition } from "~/utils/showDepositAddressCondition";
import { convertChainName } from "~/utils/transformers";

import { AddressShortener, InputWrapper } from "../../common";
import { TransferStats } from "../parts";
import { CosmosWalletTransfer, EvmWalletTransfer, ProgressBar } from "./parts";

export const WaitDepositState = () => {
  const { depositAddress, srcChain, asset } = useSwapStore((state) => state);
  const selectedAssetSymbol = useSwapStore(getSelectedAssetSymbol);
  const { data: relayerGasFee } = useGetRelayerGasFee();

  function renderTransferInfo() {
    if (!relayerGasFee) {
      return;
    }
    return (
      <div>
        <div>
          Please transfer{" "}
          <strong>
            {">"}
            {relayerGasFee} {selectedAssetSymbol}
          </strong>{" "}
          on{" "}
          <span className="capitalize">
            {convertChainName(srcChain.chainName)}
          </span>{" "}
          to
        </div>
      </div>
    );
  }

  function renderWalletSection() {
    // if (!wagmiConnected && !keplrConnected) return;

    return (
      <div>
        {srcChain.module === "evm" && <EvmWalletTransfer />}
        {srcChain.module === "axelarnet" && <CosmosWalletTransfer />}
      </div>
    );
  }

  const showDepositAddress = showDepositAddressCondition({ srcChain, asset });

  return (
    <>
      <TransferStats />
      <InputWrapper className="h-auto">
        <div className="h-full space-x-2">
          <div className="flex flex-col w-full h-full">
            <div className="h-full">
              <ProgressBar level={2} />

              <div className="flex items-center justify-center py-4 text-sm gap-x-2">
                <div>
                  <label className="block text-center">
                    {renderTransferInfo()}
                  </label>
                  <div className="flex justify-center font-bold text-info gap-x-2">
                    <AddressShortener value={depositAddress} />
                    {showDepositAddress && (
                      <button
                        className="cursor-pointer"
                        onClick={() =>
                          showDepositAddress && copyToClipboard(depositAddress)
                        }
                      >
                        <Image
                          src={"/assets/ui/copy.svg"}
                          height={16}
                          width={16}
                          alt="copy icon"
                        />
                      </button>
                    )}
                  </div>
                </div>
              </div>
              {renderWalletSection()}
            </div>
          </div>
        </div>
      </InputWrapper>
    </>
  );
};
