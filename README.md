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

![main](https://github.com/AlanWendorff/membrane-frontend-cc/assets/62715512/705be668-2586-4c29-a7e2-fe279c70a542)

### Quiz

Once the survey has started, a question and its respective answers will be displayed, which will be available for a certain time.
![answer](https://github.com/AlanWendorff/membrane-frontend-cc/assets/62715512/39b14010-23fa-40c5-9b91-67d5d5d59453)

### Result of the Quiz

Once the survey ends an overview will be apper with all the answers and below this there will be a submit button.
This button allow the user to submit the responses to the blockchain so that they can be validated and receive a reward in return.
After you press the button metamask shows up requesting transaction confirmation, wich may take a while.

![end](https://github.com/AlanWendorff/membrane-frontend-cc/assets/62715512/f07cd909-cd66-4bb2-865b-9cb540a19d3c)

### Quiz submitted

Once the transaction is done, you should receive a reward which can be seen in the header as "Account balance" after the website is updated.

![submit](https://github.com/AlanWendorff/membrane-frontend-cc/assets/62715512/97e7c3ed-3ad4-4627-9811-8ceb2707e908)

## Technical reference
<b>ENV variables:</b>

`VITE_APP_TARGET_NETWORK_HEX={network-hexadecimal-code}`: Necessary for network change.
In the code its necessary to know the network on which the contract runs and can vary over time if a contract is released to production.

`VITE_APP_QUIZ_CONTRACT_ADDRESS={contract-address}`: Necessary for frontend/contract interaction.
In the code its necessary to know the contract address and can vary over time if the contract is changed to a new one.

## Resources used

<a href="https://mui.com/material-ui/getting-started/">MaterialUI Documentation</a></br>
<a href="https://docs.metamask.io/">MetaMask Documentation</a></br>
<a href="https://soliditytips.com/articles/detect-switch-chain-metamask/">Switching Network</a></br>
<a href="https://github.com/R4k4210/react-dapp-web3">react-dapp-web3 library</a></br>
