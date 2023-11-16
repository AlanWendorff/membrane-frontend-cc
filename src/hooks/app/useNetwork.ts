import { TARGET_NETWORK_HEX } from "../../constants/env";
import { useEffect, useState } from "react";

interface IUseNetworkReturnProps {
  isTargetNetworkSelected: boolean | undefined;
  switchNetwork: () => void;
}

const useNetwork = (): IUseNetworkReturnProps => {
  const [isTargetNetworkSelected, setIsTargetNetworkSelected] = useState<
    boolean | undefined
  >(undefined);

  const validateNetwork = async () => {
    if (!window.ethereum) {
      return;
    }

    const currentChainId = await window.ethereum.request({
      method: "eth_chainId",
    });

    if (currentChainId == TARGET_NETWORK_HEX) return true;
    return false;
  };

  const switchNetwork = async () => {
    if (!window.ethereum) {
      return;
    }

    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: TARGET_NETWORK_HEX }],
    });

    window.location.reload();
  };

  useEffect(() => {
    validateNetwork().then((res) => setIsTargetNetworkSelected(res));
  }, [window.ethereum]);

  return { isTargetNetworkSelected, switchNetwork };
};

export default useNetwork;
