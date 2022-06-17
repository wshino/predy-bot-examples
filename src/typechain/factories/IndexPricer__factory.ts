/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { IndexPricer, IndexPricerInterface } from "../IndexPricer";

const _abi = [
  {
    inputs: [],
    name: "SCALING_FACTOR",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608c610024600b82828239805160001a607314601757fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063ef4cadc5146038575b600080fd5b603e6050565b60408051918252519081900360200190f35b6127108156fea264697066735822122083e846474da1b9bd0434f34fa56974542ade6424ca3f43ba8700a04c1e13b11964736f6c63430007060033";

export class IndexPricer__factory extends ContractFactory {
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
  ): Promise<IndexPricer> {
    return super.deploy(overrides || {}) as Promise<IndexPricer>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): IndexPricer {
    return super.attach(address) as IndexPricer;
  }
  connect(signer: Signer): IndexPricer__factory {
    return super.connect(signer) as IndexPricer__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IndexPricerInterface {
    return new utils.Interface(_abi) as IndexPricerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IndexPricer {
    return new Contract(address, _abi, signerOrProvider) as IndexPricer;
  }
}