<script>
  import { createCreatorClient } from "@zoralabs/protocol-sdk";
  import { onMount } from "svelte";
  import { signTypedData } from "@wagmi/core";
  import { chainId, publicClient, config } from "./config";
  import { account } from "../store.js";
  import { generateSVG, svgToBase64, prepareTokenURI, prepareContractURI } from './utils';
  import { get } from 'svelte/store';
  import { htmlCode, cssCode, jsCode, width, height, title, description, intro, responseData } from '../store.js';

  let creatorAddress;
  let creatorClient;
  let typedDataDefinition;
  let submit;
  let signature;

  onMount(async () => {
    creatorAddress = get(account).address;

    creatorClient = createCreatorClient({ chainId, publicClient });

  });

  async function handleCreate() {

    // Generate SVG content and convert to base64
    const svgContent = generateSVG(get(htmlCode), get(cssCode), get(jsCode), get(width), get(height));
      const base64Svg = svgToBase64(svgContent);
      console.log("Base64 SVG:", base64Svg);

            // Prepare token and contract URIs
            const base64TokenURI = prepareTokenURI(get(title), get(description), base64Svg);
      const base64ContractURI = prepareContractURI(get(title), get(description), base64Svg);
      console.log("tokenURI:", base64TokenURI);

      const response = await creatorClient.createPremint({
      contract: {
        contractAdmin: $account.address,
          contractName: get(title).toString(),
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

    typedDataDefinition = response.typedDataDefinition;
    submit = response.submit;



    try {
      const signature = await signTypedData(config,
      typedDataDefinition);
      if (signature) {
        const submitResponse = await submit({ signature });
        console.log("Submit succeeded");
          intro.set(4); // Success
           // Store the success message
          responseData.set('Premint did not send any erorr. Check your zora profile for the new NFT.');
          }
    } catch (error) {
      intro.set(5); // Error during submission
      responseData.set("Premint was unsuccesful. Please try again.");
      console.error("Error signing typed data", error);
    }
  }
</script>

<button on:click={handleCreate}>Create</button>

<h3>Signature will be sent to Zora API and allows to create gasless premints by simply signing our html-based creativity's metadata</h3> 


<style>
  
	button {
		background-color: #352c83;
	}

</style>