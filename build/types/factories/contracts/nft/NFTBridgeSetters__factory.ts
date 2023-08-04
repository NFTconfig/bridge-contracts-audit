/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  NFTBridgeSetters,
  NFTBridgeSettersInterface,
} from "../../../contracts/nft/NFTBridgeSetters";

const _abi = [
  {
    inputs: [],
    name: "MIN_LOCK_TIME",
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
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50607e8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80633ff0320714602d575b600080fd5b60366201518081565b60405190815260200160405180910390f3fea2646970667358221220549361092084d5b9b178872f9f3a061b4b5e7d6f85f701c4a575bb796869402f64736f6c634300080e0033";

type NFTBridgeSettersConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTBridgeSettersConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTBridgeSetters__factory extends ContractFactory {
  constructor(...args: NFTBridgeSettersConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFTBridgeSetters> {
    return super.deploy(overrides || {}) as Promise<NFTBridgeSetters>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFTBridgeSetters {
    return super.attach(address) as NFTBridgeSetters;
  }
  override connect(signer: Signer): NFTBridgeSetters__factory {
    return super.connect(signer) as NFTBridgeSetters__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTBridgeSettersInterface {
    return new utils.Interface(_abi) as NFTBridgeSettersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTBridgeSetters {
    return new Contract(address, _abi, signerOrProvider) as NFTBridgeSetters;
  }
}
