# Membrane Frontend CC

## Steps necessary for the operation of the website

### Waiting to login

Simple screen with a call to action and a button to connect wallet. After you press the button metamask shows up requesting a wallet connection and an approval to interact with Membrane Frontend.

![connect wallet](https://github.com/AlanWendorff/membrane-frontend-cc/assets/62715512/d86da530-b75f-44bc-9bb9-13ba7cafc85f)

### Request Network change

Simple screen with a call to action and a button to change the network to Goerli Testnet. After you press the button metamask shows up requesting a network change.
When the user approve network change, Membrane Frontend refreshes up and is ready to work.
If you are not connected yet you would write your password and then switch the network.

![change net](https://github.com/AlanWendorff/membrane-frontend-cc/assets/62715512/d5033a7c-c182-43e4-83f6-59af60917b17)

## Main functionality

### Main menu

Once the previous steps were completed, the user account balance and his wallet address appear the on the top of the website.
In the main frame the title of the daily trivia is displayed with its picture and a button
that allows you to begin answering.

![main](https://github.com/AlanWendorff/membrane-frontend-cc/assets/62715512/abb20023-44ac-447f-bb1f-0041e1c8ea3c)

### Quiz

Once the survey has started, a question and its respective answers will be displayed, which will be available for a certain time.

![answer](https://github.com/AlanWendorff/membrane-frontend-cc/assets/62715512/aa0f8f26-8fea-49c5-845e-b806cee69933)

### Result of the Quiz

Once the survey ends an overview will be apper with all the answers and below this there will be a submit button.
This button allow the user to submit the responses to the blockchain so that they can be validated and receive a reward in return.
After you press the button metamask shows up requesting transaction confirmation, wich may take a while.

![submit](https://github.com/AlanWendorff/membrane-frontend-cc/assets/62715512/27a01d1d-1da6-4879-b87f-3f37a9631243)

### Quiz submitted

Once the transaction is done, you should receive a reward which can be seen in the header as "Account balance" after the website is updated.

![refresh](https://github.com/AlanWendorff/membrane-frontend-cc/assets/62715512/bf42cc7c-0b65-4d84-877a-1ac6940c72d4)

## Demo

## Technical reference

<b>ENV variables:</b>

`VITE_APP_TARGET_NETWORK_HEX={network-hexadecimal-code}`: Necessary for network change functionality.
This may vary over time if a contract is released on the mainnet.

`VITE_APP_QUIZ_CONTRACT_ADDRESS={contract-address}`: Necessary for frontend/contract interaction.
This may vary over time if the contract is changed to a new one.

## Resources used

<a href="https://mui.com/material-ui/getting-started/">MaterialUI Documentation</a></br>
<a href="https://docs.metamask.io/">MetaMask Documentation</a></br>
<a href="https://soliditytips.com/articles/detect-switch-chain-metamask/">Switching Network</a></br>
<a href="https://github.com/R4k4210/react-dapp-web3">react-dapp-web3 library</a></br>
