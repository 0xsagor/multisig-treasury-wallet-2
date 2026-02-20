const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MultiSigWallet", function () {
  it("Should deploy and allow a transaction to be submitted", async function () {
    const [owner1, owner2] = await ethers.getSigners();
    const MultiSig = await ethers.getContractFactory("MultiSigWallet");
    const multisig = await MultiSig.deploy([owner1.address, owner2.address], 2);

    await multisig.submitTransaction(owner2.address, ethers.parseEther("1"), "0x");
    const tx = await multisig.transactions(0);
    expect(tx.to).to.equal(owner2.address);
  });
});
