# dapp-sla
## Summary
 The goal to create a simple dapp and interact it with a simple web application made with html and javascript.
## Requirements
 First of all you need to install :
 - **Truffle** : an ethereum framework.
 - **Ganache** : a local Blockchain network. 
 - **Metamask** :  a chrome extension to connect you ethereum account and see transactions.
# Demo
 
## 1- Clone the project
Run :
```
git clone https://github.com/majdas007/dapp-sla.git
```
## 2- Install dependencies
Run :
```
npm install
```
## 3- Connect you ether account in MetaMask
You have to make sure your account is well set up... also you have to save mnemonic in a .secret file in your project.
## 4- Start Ganache server
Run :
```
 ganache-cli -m " mnemonic " 
```
## 5- Migrate your Smart Contract
Run on your project dirctory this command : 
```
truffle migrate development 
```
## 6- Connect Metamask with your ganache via browser extension

  <img src="https://user-images.githubusercontent.com/7537712/54625709-06d33700-4a2d-11e9-8f3b-9ff621420a7e.png" align="center" height="200" width="200">
  
## 7- update your Conf.js File
 - Go to build directory.
 - Copy the **abi** field in **HelloPocteo.json** and replace it with the one that exists in Conf.js
 - Copy the **adress** attribut that exists in **networks** field in **HelloPocteo.json** and replace it with the one that exists in Conf.js

## 7-Go to the web interface and interact with your Contract   