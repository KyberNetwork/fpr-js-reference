require('dotenv').config()
var Web3 = require("web3")
var FPR = require("kyber-fpr-sdk")
var addresses = require("./addresses.json")
const KTTokenAddress = "0xc376079608C0F17FE06b9e950872666f9c3C3DA4"
const provider = new Web3.providers.HttpProvider(process.env.TESTNET_NODE_URL)
const web3 = new Web3(provider)
const reserveManager = new FPR.Reserve(web3, addresses)
reserveManager.getBuyRates(KTTokenAddress,1).then(result => {console.log(result)})
reserveManager.getSellRates(KTTokenAddress,1).then(result => {console.log(result)})