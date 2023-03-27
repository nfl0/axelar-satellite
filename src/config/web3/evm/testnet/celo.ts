import { ChainExtension } from "../interface";

export const celo: ChainExtension = {
  id: 44787,
  name: "Celo Alfajores Testnet",
  network: "celo",
  networkNameOverride: "celo",
  nativeCurrency: {
    name: "CELO",
    symbol: "CELO",
    decimals: 18,
  },
  blockExplorers: {
    default: {
      name: "Celo Explorer",
      url: "https://alfajores-blockscout.celo-testnet.org",
    },
  },
  rpcUrls: {
    default: {
      http: ["https://alfajores-forno.celo-testnet.org"],
    },
  },
  testnet: true,
};
