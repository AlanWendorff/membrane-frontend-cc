import { useWeb3 } from "react-dapp-web3";
import WarningChangeNetwork from "../../components/WarningChangeNetwork";
import WarningLogin from "../../components/WarningLogin";
import Survey from "../../components/Survey";
import useNetwork from "../../hooks/app/useNetwork";

const Home = () => {
  const { isWalletConnected } = useWeb3();
  const { isTargetNetworkSelected } = useNetwork();

  if (!isTargetNetworkSelected) {
    return (
      <main>
        <WarningChangeNetwork />
      </main>
    );
  }

  if (!isWalletConnected) {
    return (
      <main>
        <WarningLogin />
      </main>
    );
  }

  return (
    <main>
      <Survey />
    </main>
  );
};

export default Home;
