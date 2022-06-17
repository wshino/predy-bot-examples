/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockArbSys, MockArbSysInterface } from "../MockArbSys";

const _abi = [
  {
    inputs: [],
    name: "arbBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blocknumber",
        type: "uint256",
      },
    ],
    name: "setBlockNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060ac8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063a3b1b31d146037578063a8c3c85014604f575b600080fd5b603d606b565b60408051918252519081900360200190f35b606960048036036020811015606357600080fd5b50356071565b005b60005490565b60005556fea2646970667358221220f11c6215fb83726ef46feab8c4d619d25d959f6635a17a147c617681ac2ca73b64736f6c63430007060033";

export class MockArbSys__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockArbSys> {
    return super.deploy(overrides || {}) as Promise<MockArbSys>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockArbSys {
    return super.attach(address) as MockArbSys;
  }
  connect(signer: Signer): MockArbSys__factory {
    return super.connect(signer) as MockArbSys__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockArbSysInterface {
    return new utils.Interface(_abi) as MockArbSysInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockArbSys {
    return new Contract(address, _abi, signerOrProvider) as MockArbSys;
  }
}