const { expect } = require('chai');

describe('ZeroValueBondCalculator contract', function () {
  let contract;

  beforeEach(async function () {
    const Contract = await ethers.getContractFactory('ZeroValueBondCalculator');
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    contract = await Contract.deploy();
  });

  describe('Valuation', function () {
    it('Should return 0 from valuation function', async function () {
      const value = await contract.valuation(owner.address, 10000);
      expect(value).to.equal(0);

      await contract.testInterface();
    });
  });
});
