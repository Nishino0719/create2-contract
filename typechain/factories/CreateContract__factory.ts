/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CreateContract,
  CreateContractInterface,
} from "../CreateContract";

const _abi = [
  {
    inputs: [],
    name: "createGreeterContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506109a8806100206000396000f3fe60806040526004361061001e5760003560e01c8063a0815de314610023575b600080fd5b61002b610041565b60405161003891906100c8565b60405180910390f35b600060405161004f9061007a565b61005890610140565b604051809103906000f080158015610074573d6000803e3d6000fd5b50905090565b6108128061016183390190565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100b282610087565b9050919050565b6100c2816100a7565b82525050565b60006020820190506100dd60008301846100b9565b92915050565b600082825260208201905092915050565b7f75736564206372656174653220636f6e74726163740000000000000000000000600082015250565b600061012a6015836100e3565b9150610135826100f4565b602082019050919050565b600060208201905081810360008301526101598161011d565b905091905056fe60806040523480156200001157600080fd5b5060405162000812380380620008128339818101604052810190620000379190620002a4565b80600090805190602001906200004f92919062000057565b50506200035a565b828054620000659062000324565b90600052602060002090601f016020900481019282620000895760008555620000d5565b82601f10620000a457805160ff1916838001178555620000d5565b82800160010185558215620000d5579182015b82811115620000d4578251825591602001919060010190620000b7565b5b509050620000e49190620000e8565b5090565b5b8082111562000103576000816000905550600101620000e9565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001708262000125565b810181811067ffffffffffffffff8211171562000192576200019162000136565b5b80604052505050565b6000620001a762000107565b9050620001b5828262000165565b919050565b600067ffffffffffffffff821115620001d857620001d762000136565b5b620001e38262000125565b9050602081019050919050565b60005b8381101562000210578082015181840152602081019050620001f3565b8381111562000220576000848401525b50505050565b60006200023d6200023784620001ba565b6200019b565b9050828152602081018484840111156200025c576200025b62000120565b5b62000269848285620001f0565b509392505050565b600082601f8301126200028957620002886200011b565b5b81516200029b84826020860162000226565b91505092915050565b600060208284031215620002bd57620002bc62000111565b5b600082015167ffffffffffffffff811115620002de57620002dd62000116565b5b620002ec8482850162000271565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200033d57607f821691505b60208210811415620003545762000353620002f5565b5b50919050565b6104a8806200036a6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063a41368621461003b578063cfae321714610057575b600080fd5b6100556004803603810190610050919061031e565b610075565b005b61005f61008f565b60405161006c91906103ef565b60405180910390f35b806000908051906020019061008b929190610121565b5050565b60606000805461009e90610440565b80601f01602080910402602001604051908101604052809291908181526020018280546100ca90610440565b80156101175780601f106100ec57610100808354040283529160200191610117565b820191906000526020600020905b8154815290600101906020018083116100fa57829003601f168201915b5050505050905090565b82805461012d90610440565b90600052602060002090601f01602090048101928261014f5760008555610196565b82601f1061016857805160ff1916838001178555610196565b82800160010185558215610196579182015b8281111561019557825182559160200191906001019061017a565b5b5090506101a391906101a7565b5090565b5b808211156101c05760008160009055506001016101a8565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61022b826101e2565b810181811067ffffffffffffffff8211171561024a576102496101f3565b5b80604052505050565b600061025d6101c4565b90506102698282610222565b919050565b600067ffffffffffffffff821115610289576102886101f3565b5b610292826101e2565b9050602081019050919050565b82818337600083830152505050565b60006102c16102bc8461026e565b610253565b9050828152602081018484840111156102dd576102dc6101dd565b5b6102e884828561029f565b509392505050565b600082601f830112610305576103046101d8565b5b81356103158482602086016102ae565b91505092915050565b600060208284031215610334576103336101ce565b5b600082013567ffffffffffffffff811115610352576103516101d3565b5b61035e848285016102f0565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156103a1578082015181840152602081019050610386565b838111156103b0576000848401525b50505050565b60006103c182610367565b6103cb8185610372565b93506103db818560208601610383565b6103e4816101e2565b840191505092915050565b6000602082019050818103600083015261040981846103b6565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061045857607f821691505b6020821081141561046c5761046b610411565b5b5091905056fea264697066735822122081acb8721839d333e2a423bb0d1422c9f8865825a17e6abb0580201135daa71564736f6c63430008090033a26469706673582212204b2b240f647a9bbf8fcfceea949237f3ebdd32e77a9b3b0c32b109fcd737851964736f6c63430008090033";

type CreateContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CreateContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CreateContract__factory extends ContractFactory {
  constructor(...args: CreateContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CreateContract> {
    return super.deploy(overrides || {}) as Promise<CreateContract>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CreateContract {
    return super.attach(address) as CreateContract;
  }
  connect(signer: Signer): CreateContract__factory {
    return super.connect(signer) as CreateContract__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CreateContractInterface {
    return new utils.Interface(_abi) as CreateContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CreateContract {
    return new Contract(address, _abi, signerOrProvider) as CreateContract;
  }
}
