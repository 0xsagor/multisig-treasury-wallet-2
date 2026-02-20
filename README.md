# Multi-Signature Treasury Wallet

This repository contains a secure, expert-level MultiSig wallet implementation. It is designed for groups who want to manage shared funds without relying on a single point of failure.

## Features
* **M-of-N Approval**: Requires a predefined number of owners to confirm a transaction before execution.
* **Transaction Queueing**: Any owner can propose a transaction (transfer ETH or interact with other contracts).
* **Revocation**: Owners can revoke their confirmation before a transaction is executed.
* **Security**: Built with state-machine logic to prevent unauthorized access and reentrancy.

## Usage
1. **Deployment**: Initialize the contract with an array of owner addresses and the required number of confirmations.
2. **Submit**: Use `submitTransaction` to propose a transfer.
3. **Confirm**: Other owners call `confirmTransaction`.
4. **Execute**: Once the threshold is met, any owner calls `executeTransaction`.

## License
MIT
