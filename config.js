module.exports = Object.freeze({
    // required. wallet privateKey
    privateKey : "0x913d1c73a2cdda2d9d9725f2f6376fa89b925e8391e71260a2492840109304d1",
    
    // required. Your wallet address   
    fromAddress : "0xa53e757202dba1f7759445a7f4e2c008738f7d73".toLocaleLowerCase(),
    
    // reuiqred. Your target contract address
    toAddress: "0x732aaC95078af3244B521B462727317FA5Cb92b7".toLocaleLowerCase(),

    // required. Find out the contract creator address
    creatorAddress: "0x458672FC88aD8B08C884e408855AF898f1C81725".toLocaleLowerCase(),

    // required. The price of public mint
    price: "0.065",                    
    
    // required. How many items you wants to buy
    maxPriorityFeePerGas : "200", 
    
    // required. The collection contract address you want to buy                                                                           
    maxFeePerGas : "300",                    
    
    // required. The num you want to mint
    number: "1",

    // required. http provider from infura or alchemy. It must be wss
    wssMainnet: "wss://eth-mainnet.alchemyapi.io/v2/B1EUZ-G8ZybZT-7HVc96YTmVG35MiDYF",

    // required. http provider from infura or alchemy. It must be wss
    wssRinkeby: "wss://eth-rinkeby.alchemyapi.io/v2/qdNAsHSMVPMnPyfUuuG4pt5ac1LAiGvu",

    // required. http provider from infura or alchemy. It must be wss
    wssGoerli : "wss://eth-goerli.alchemyapi.io/v2/vhHJyJ1uV0tkajSwJeN0Pi7SwgPiJsN2",

    // optional. debug usage. The value should be "Rinkeby" for rinkeby, "Goerli" for goerli or "" for mainnet
    network : "Goerli",

    // timere script const, the start time of dutch
    time: 6719995,
});
