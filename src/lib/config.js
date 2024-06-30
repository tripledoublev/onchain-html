import { zoraSepolia } from "viem/chains";
import {
  http,
  custom,
  createPublicClient,
  createWalletClient,
} from "viem";
import { createWeb3Modal, defaultWagmiConfig  } from '@web3modal/wagmi'
	import { watchAccount, getClient, getAccount, getConnectorClient, getPublicClient, getWalletClient } from '@wagmi/core';
	import { account, client } from '../store.js';


const chain = zoraSepolia;
export const zeChain = zoraSepolia;
export const chainId = zeChain.id;




	// 1. Get a project ID at https://cloud.walletconnect.com
	const projectId = '8254abff71727553af51f0ca46a639c7'

	// 2. Create wagmiConfig
	const metadata = {
	name: 'Web3Modal',
	description: 'Web3Modal Example',
	url: 'https://vncnt.xyz', // origin must match your domain & subdomain.
	icons: ['https://avatars.githubusercontent.com/u/37784886']
	}

	export const config = defaultWagmiConfig({
		chains: [chain],  
		projectId,
		metadata,
	})

	// 3. Create modal
	const modal = createWeb3Modal({
	wagmiConfig: config,
	projectId,
	})

	export const publicClient = createPublicClient({
		// this will determine which chain to interact with
		chain,
		transport: http(),
	  });
	   
	export async function giveMeTheclient() {
		return getWalletClient(config);
	}
/* 	export let connectorClient;

	function initializeConnectorClient() {
		const acc = getAccount(config);
		console.log('initializeConnectorClient', acc);
		if (acc) {
		  account.set(acc);
		  connectorClient = getConnectorClient(config);
		}
	  }
	  
	  initializeConnectorClient(); 
	  
	  // Ensure connectorClient is initialized after account change
account.subscribe((newAccount) => {
	if (newAccount) {
	  connectorClient = getConnectorClient(config);
	}
  });

  */
  
  console.log('publicClient configs', publicClient);
  

  export const provider = modal;

	 // Watch account changes
	 watchAccount(config, { 
    onChange: (newAccount) => {
      account.set(newAccount); // Update global store with new account data
    }
  });

export let walletClient; 


// Ensure the account store is updated
account.set(getAccount(config));