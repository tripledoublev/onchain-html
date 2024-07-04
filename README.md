# Onchain HTML Summer

Onchain HTML Summer is an in-browser code editor that allows anyone to premint HTML on-chain NFTs. This tool enables you to create a smart contract and its first token using HTML, CSS, and JavaScript, all encoded as base64 strings on-chain thanks to the Zora API and SDK.

## Features

- **Premint**: Create a contract and its first token with HTML, CSS, and JavaScript using the SDK to Gaslessly Create 1155 Contracts and Tokens, aka Premints.
- **Code Editor**: Edit HTML, CSS, and JavaScript directly in your browser.
- **On-chain Storage**: Encode and store your HTML, CSS, and JavaScript as base64 strings ready to be minted and brought as onchain data.

## Preminted NFTs

These tokens were preminted using the Onchain HTML Summer tool. You can view them here:
[onchain html summer](https://zora.co/collect/zora:0xc43906bf6be263ed7bb12ba8a1a1a7056af9a5c6/1)
[rektangles](https://zora.co/collect/zora:0xdc41953d89f0b8164713bb2a86b8c2ba608e55dc/1)

## Future development

This tool is currently in development. An essential future feature would be to fetch exisiting collections and allows users to premint new tokens to existing collections. This would allow users to create a collection and premint tokens to it, without having to create a new contract every time. Once Zora I find out how Zora supports this, I will update the tool to support this feature.

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/tripledoublev/onchain-html.git
    cd onchain-html
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

### Changing chains

In the config file, import the chain you want to use and adjust L12 to the desired chain. It is currently set to `zora`.   

