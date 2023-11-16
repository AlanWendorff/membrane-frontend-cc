import { useWeb3 } from "react-dapp-web3";
import QUIZ_CONTRACT_ABI from "../../contracts/QuizContract.abi";
import { QUIZ_CONTRACT_ADDRESS } from "../../constants/env";
import { useEffect, useState } from "react";

interface IUseQuizContractReturnProps {
  accountBalance: number | null;
}

const useQuizContract = (): IUseQuizContractReturnProps => {
  const { web3, isInitialized, walletAddress } = useWeb3();
  const [accountBalance, setAccountBalance] = useState<number | null>(null);

  const getBalance = async () => {
    if (!isInitialized || !web3) {
      return;
    }

    const QUIZ_CONTRACT = new web3.eth.Contract(
      QUIZ_CONTRACT_ABI,
      QUIZ_CONTRACT_ADDRESS
    ) as any;

    const BALANCE = await QUIZ_CONTRACT.methods.balanceOf(walletAddress).call();
    const DECIMALS = await QUIZ_CONTRACT.methods.decimals().call();
    const AMOUNT = Number(BALANCE) / 10 ** Number(DECIMALS);

    setAccountBalance(AMOUNT);
  };

  useEffect(() => {
    getBalance();
  }, [web3, walletAddress]);

  return { accountBalance };
};

export default useQuizContract;
