import { useWeb3 } from "react-dapp-web3";
import QUIZ_CONTRACT_ABI from "../../contracts/QuizContract.abi";
import { QUIZ_CONTRACT_ADDRESS } from "../../constants/env";
import { useEffect, useState } from "react";
import { CONFIRMATION } from "../../constants/web3Events";

interface IUseQuizContractReturnProps {
  accountBalance: number | null;
  submitAnswers: (surveyId: number, answers: number[]) => void;
}

const useQuizContract = (): IUseQuizContractReturnProps => {
  const { web3, isInitialized, walletAddress } = useWeb3();
  const [contract, setContract] = useState<any>();
  const [accountBalance, setAccountBalance] = useState<number | null>(null);

  const getBalance = async () => {
    if (!isInitialized || !web3) {
      return;
    }

    const QUIZ_CONTRACT = new web3.eth.Contract(
      QUIZ_CONTRACT_ABI,
      QUIZ_CONTRACT_ADDRESS
    ) as any;

    setContract(QUIZ_CONTRACT);

    const BALANCE = await QUIZ_CONTRACT.methods.balanceOf(walletAddress).call();
    const DECIMALS = await QUIZ_CONTRACT.methods.decimals().call();
    const AMOUNT = Number(BALANCE) / 10 ** Number(DECIMALS);

    setAccountBalance(AMOUNT);
  };

  const submitAnswers = async (surveyId: number, answers: number[]) => {
    await contract.methods
      .submit(surveyId, answers)
      .send({
        from: walletAddress,
      })
      .once(CONFIRMATION, () => {
        window.location.reload();
      });
  };

  useEffect(() => {
    getBalance();
  }, [web3, walletAddress]);

  return { accountBalance, submitAnswers };
};

export default useQuizContract;
