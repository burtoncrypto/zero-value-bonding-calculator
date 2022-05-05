require('@nomiclabs/hardhat-waffle');

task('deploy', 'Deploy the bond calculator contract').setAction(async () => {
  const contract = await (await ethers.getContractFactory('ZeroValueBondCalculator')).deploy();

  console.log('Contract address:', contract.address);
  console.log(`npx hardhat verify --network mainnet --contract contracts/ZeroValueBondCalculator.sol:ZeroValueBondCalculator ${contract.address}`);
});
