import { ChainInfo } from "@axelar-network/axelarjs-sdk";
import BigNumber from "bignumber.js";

import { AssetConfigExtended } from "~/types";
import { showErrorMsgAndThrow } from "~/utils/error";
import { renderGasFee } from "~/utils/renderGasFee";

export async function checkMinTransfer(
  amount: string,
  srcChain: ChainInfo,
  destChain: ChainInfo,
  asset: AssetConfigExtended | null
) {
  const minDeposit = (await renderGasFee(srcChain, destChain, asset)) || 0;
  const amountTooSmall = new BigNumber(amount || "0").lt(
    new BigNumber(minDeposit)
  );
  const symbol =
    asset?.chain_aliases[srcChain?.chainName?.toLowerCase()].assetSymbol;

  if (amountTooSmall) {
    showErrorMsgAndThrow(
      `${amount} ${symbol} is insufficient. Please transfer at least ${minDeposit} ${symbol}`
    );
  }
}
