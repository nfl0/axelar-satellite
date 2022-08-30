import { useContractRead } from "wagmi";
import gatewayABI from "../data/abi/axelarGateway.json";
import { useSwapStore } from "../store";
import { formatUnits } from "ethers/lib/utils";
import { useAxelarRPCQuery } from "./api/useAxelarRPCQuery";
import { useEffect, useState } from "react";
import { testnetChains as evmTestnetChains } from "../config/web3/evm/chains.testnet";

const UseGatewayQuery = (props: any) => {
  const { asset, destChain } = useSwapStore((state) => state);
  const [gatewayAddr, setGatewayAddr] = useState<string>("");
  const { api } = useAxelarRPCQuery();

  const { data: maxTransferAmount, error } = useContractRead({
    addressOrName: gatewayAddr,
    chainId: evmTestnetChains.find(
      (chain) => chain.network === destChain.chainName.toLowerCase()
    )?.id,
    contractInterface: gatewayABI,
    functionName: "tokenMintLimit",
    enabled: !!(gatewayAddr && asset && destChain && api),
    args: [
      asset?.chain_aliases[destChain?.chainName.toLowerCase()].assetSymbol,
    ],
  });

  useEffect(() => {
    (async () => {
      if (!api) return;
      const chain = destChain?.chainName.toLowerCase();
      const gatewayAddress = await (
        await api?.evm?.GatewayAddress({ chain })
      ).address;
      setGatewayAddr(gatewayAddress);
    })();
  }, [destChain, api]);

  return maxTransferAmount ? (
    <div>
      {formatUnits(
        maxTransferAmount,
        asset?.chain_aliases[destChain?.chainName.toLowerCase()]?.decimals
      )}
    </div>
  ) : null;
};
export default UseGatewayQuery;