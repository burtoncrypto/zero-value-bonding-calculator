# Zero value bonding calculator

Used with an Olympus style treasury to be able to move reserve/liquidity tokens without affecting actual reserves. Shouldn't actually be used for real purposes, but can be used if tokens have been sent directly to the treasury instead of being deposited correctly.

## Installation
Install dependencies
- `npm install`

Create a .env file with the following variables:
- ALCHEMY_API_KEY
- DEV_WALLET_PRIVATE_KEY
- ETHERSCAN_API_KEY

Currently only deployment via Alchemy is supported, for other nodes modifications to `hardhat.config.js` will be required.

## Testing
Test using standard hardhat commands
- `npx hardhat test`

## Deploy
- `npx hardhat deploy`
