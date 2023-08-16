import { AxelarQueryAPI, ChainInfo } from "@axelar-network/axelarjs-sdk";
import { BigNumber } from "ethers";
import { formatUnits } from "ethers/lib/utils.js";

import { ENVIRONMENT } from "~/config/constants";

import { AssetConfigExtended } from "~/types";

export async function renderGasFee(
  srcChain: ChainInfo,
  destChain: ChainInfo,
  asset: AssetConfigExtended | null
) {
  const axelarQueryApi = new AxelarQueryAPI({ environment: ENVIRONMENT });
  const id = asset?.wrapped_erc20 || asset?.id;

  const feeQuery = await axelarQueryApi
    .getTransferFee(srcChain?.id, destChain?.id, id as string, 0)
    .then((res) => formatUnits(res.fee?.amount as string, asset?.decimals))
    .catch(() => "0");

  if (feeQuery) {
    return feeQuery;
  }

  if (!(srcChain && destChain)) {
    return "0";
  }

  const sourceChainName = srcChain.chainName?.toLowerCase();
  const destChainName = destChain.chainName?.toLowerCase();

  const sourceFee = asset?.chain_aliases[sourceChainName]?.minDepositAmt;
  const destFee = asset?.chain_aliases[destChainName]?.minDepositAmt;

  if (!(sourceFee && destFee)) {
    return "0";
  }

  return BigNumber.from(sourceFee).add(BigNumber.from(destFee)).toString();
}
