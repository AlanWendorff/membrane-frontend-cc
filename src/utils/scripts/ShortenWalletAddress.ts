/**
 * Takes an address and returns it shortened. eg: 0xfFcA09511931F09De2198Bb0345Dd5e0D941b6C1 => 0xfFcA…b6C1
 */
const shortenWalletAddress = (address: string): string =>
  `${address.substring(0, 6)}…${address.substring(
    address.length - 4,
    address.length
  )}`;

export default shortenWalletAddress;
