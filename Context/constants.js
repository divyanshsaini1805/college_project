import nftMarketplace from "./NFTMarketplace.json";
import transferFunds from "./TransferFunds.json";


const blockchain_address = process.env.NEXT_PUBLIC_BLOCKCHAIN_ADDRESS
const transfer_Funds_Address = process.env.NEXT_PUBLIC_TRANSFER_FUNDS_ADDRESS

//NFT MARKETPLACE
export const NFTMarketplaceAddress = blockchain_address
export const NFTMarketplaceABI = nftMarketplace.abi;

//TRANSFER FUNDS
export const transferFundsAddress = transfer_Funds_Address 
export const transferFundsABI = transferFunds.abi;
