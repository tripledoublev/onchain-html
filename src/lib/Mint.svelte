<script>
    // Import necessary modules from the SDK and your config file
    import { createCreatorClient } from "@zoralabs/protocol-sdk";
    import { get, writable } from 'svelte/store';
    import { useAccount, useChainId, usePublicClient } from "wagmi";
    import { generateSVG, jsonToBase64, svgToBase64, generateHTMLDocument } from './utils';
    import { title, description, htmlCode, cssCode, jsCode, width, height, account, client } from '../store.js';
    import {  zeChain, publicClient, config } from "./config";
  import { signTypedData, getPublicClient, getConnectorClient, getConnections  } from '@wagmi/core'
import { createWalletClient, custom } from 'viem'
    import { onMount } from "svelte";
  
      let ouch;
    let walletClient;
    onMount(async () => {


      
    }
    );
/* 
    async function getit() {
              
        // Retrieve Account from an EIP-1193 Provider.
        const [account] = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        })
        
        walletClient = createWalletClient({
          account,
          transport: custom(window.ethereum)
        })
    }
      */

    async function logit() {
      console.log('connected account', $account);
      console.log('title', $title);
      console.log('description', $description);
      console.log('public client', publicClient);
      console.log('wallet client', $client);
      console.log('getConnections', getConnections(config));
      console.log('getWalletClient', ouch);
    }

    async function getWallet() {
      walletClient = await getConnectorClient(config);
    }
    export async function premint() {
      try {
        if (!account) {
          throw new Error("Please connect your wallet first.");
        }
        let ouch = await getConnectorClient(config);

        console.log("Creating and signing premint...");
        console.log('connected account', $account);
        // Generate SVG content and convert to base64
        const svgContent = generateSVG($htmlCode, $cssCode, $jsCode, $width, $height);
        const base64Svg = svgToBase64(svgContent);
        console.log("Base64 SVG:", base64Svg);
  
        // Prepare token and contract URIs
        const tokenURIObject = {
          name: $title.toString(),
          description: $description.toString(),
          image: base64Svg,
          content: {
            mime: "image/svg+xml",
            uri: base64Svg
          }
        };
  
        const contractURIObject = {
          name: $title.toString(),
          symbol: $title.toString(),
          description: $description.toString(),
          image: base64Svg,
          external_link: "https://project-website.com",
        };
  
        // Convert contract and token URIs to base64
        const base64ContractURI = jsonToBase64(contractURIObject);
        const base64TokenURI = jsonToBase64(tokenURIObject);
  
        console.log("tokenURI:", base64TokenURI);
  
        // Create the creator client with your configuration
        console.log('chain', zeChain);
        console.log("Chain:", zeChain); // Check if zeChain is correctly defined
console.log("Public Client:", publicClient); // Check if publicClient is correctly defined

const creatorClient = createCreatorClient({
  chainId: zeChain.id, 
  publicClient,
});

 

        console.log("Creating and signing premint...");
        console.log("Title:", $title, "Description:", $description, "SVG:", base64Svg);
  
        // Create and sign the Premint using the creator client
        const { signAndSubmit } = await creatorClient.createPremint({
          contract: {
            contractAdmin: $account.address,
            contractName: $title.toString(),
            contractURI: base64ContractURI,
          },
          token: {
            tokenURI: base64TokenURI,
            createReferral: "0x06f4DB783097c632B888669032B2905F70e08105",
            maxSupply: 50000n,
            maxTokensPerAddress: 10n,
            mintStart: 0n,
            mintDuration: 0n,
            pricePerToken: 0n,
            payoutRecipient: $account.address,
          },
        });
        console.log("Premint created with creator client", creatorClient);


        console.log("Wallet client", walletClient);


        // Sign and submit the premint using client
        await signAndSubmit({
          account: $account.address,
          walletClient, 
          checkSignature: true,
        });
  
        console.log("Premint created and signed successfully.");
      }catch (error) {
  if (error instanceof Error && error.message.includes("User rejected the request")) {
    console.error("User rejected the transaction.");
    // Provide user feedback if needed
  } else {
    console.error("Failed to create or sign premint:", error);
    // Handle other errors appropriately
  }
}
    }
  </script>

  <button on:click={logit}>Log</button>
  
  
  <button on:click={premint}>Mint</button>
  
  <style>
    button {
      color: white;
      background-color: #4CAF50;
      border: none;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
    }
  </style>
  