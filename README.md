# Membrane Frontend CC

## Steps necessary for the operation of the website

### Waiting to login

Simple screen with a call to action and a button to connect wallet. After you press the button metamask shows up requesting a wallet connection and an approval to interact with Membrane Frontend.

"connect-wallet img"
"connect-wallet request"

### Request Network change

Simple screen with a call to action and a button to change the network to Goerli Testnet. After you press the button metamask shows up requesting a network change.
When the user approve network change, Membrane Frontend refreshes up and is ready to work.
If you are not connected yet you would write your password and then switch the network.

"network request"
"metamask request"

## Main functionality

### Main menu

Once the previous steps were completed, the user account balance and his wallet address appear the on the top of the website.

In the main frame the title of the daily trivia is displayed with its picture and a button
that allows you to begin answering.

"main"

### Quiz

Once the survey has started, a question and its respective answers will be displayed, which will be available for a certain time.

"answer and question"

### Result of the Quiz

Once the survey ends an overview will be apper with all the answers and below this there will be a submit button.
This button allow the user to submit the responses to the blockchain so that they can be validated and receive a reward in return.
After you press the button metamask shows up requesting transaction confirmation, wich may take a while.

"end"
"trans request"

### Quiz submitted

Once the transaction is done, you should receive a reward which can be seen in the header as "Account balance" after the website is updated.

"end"
"trans request"

</br>
<hr>
</br>

## Technical reference

### Env variables

</br>
`VITE_APP_TARGET_NETWORK_HEX`
</br>
Necessary for network change.
In the code its necessary to know the network on which the contract runs and can vary over time if a contract is released to production.

</br>
</br>

`VITE_APP_QUIZ_CONTRACT_ADDRESS`
</br>
Necessary for frontend/contract interaction.
In the code its necessary to know the contract address and can vary over time if the contract is changed to a new one.

## Resources used

<a href="https://mui.com/material-ui/getting-started/">MaterialUI Documentation</a></br>
<a href="https://docs.metamask.io/">MetaMask Documentation</a></br>
<a href="https://soliditytips.com/articles/detect-switch-chain-metamask/">Switch Network</a></br>
<a href="https://github.com/R4k4210/react-dapp-web3">react-dapp-web3 library</a></br>
