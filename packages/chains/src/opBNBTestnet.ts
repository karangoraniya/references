import { Chain } from './types'


export const opBNBTestnet = {
    id: 5611,
    name: 'opBNB Testnet',
    network: 'opBNB Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'tBNB',
        symbol: 'tBNB',
    },
    rpcUrls: {
        public: { http: ['https://opbnb-testnet-rpc.bnbchain.org'] },
        default: { http: ['https://opbnb-testnet-rpc.bnbchain.org'] },
    },
    blockExplorers: {
        etherscan: { name: 'opbnbscan', url: 'https://opbnb-testnet.bscscan.com' },
        default: { name: 'opbnbscan', url: 'https://opbnbscan.com' },
    },
    contracts: {
        multicall3: {
          address: '0xcA11bde05977b3631167028862bE2a173976CA11',
          blockCreated: 3705108,
        },
      },
    testnet: true,
} as const satisfies Chain
