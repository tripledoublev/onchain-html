<script>
	import { reconnect, getAccount, watchAccount, getConnectors } from '@wagmi/core'
	import { zeChain, provider, config } from './config'
  	import { writable, readable } from 'svelte/store'
	import { account, client } from '../store.js';


	let textbutton = 'Connect Wallet';

	 // Watch account changes
	 watchAccount(config, { 
    onChange: (newAccount) => {
      account.set(newAccount); // Update global store with new account data
    }
  });

	$: console.log('account', $account)
  	$: if ($account.status === 'connected') {
		console.log('Connected account:', $account)
		textbutton = 'Connected';
	}
	
	function logStatus() {
	console.log('account', $account)
	console.log('getConnnectors', getConnectors(config))
	}
</script>


<button on:click={() => provider.open()}>{textbutton}</button>

<style>
	button {
		background-color: #4CAF50;
		border: none;
		color: white;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		cursor: pointer;
		margin: 0.5rem;
	}
</style>