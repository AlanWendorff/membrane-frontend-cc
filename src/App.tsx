import Layout from "./components/Layout";
import { Web3ContextProvider } from "react-dapp-web3";
import PROVIDERS_CONFIG from "./constants/providers.config";

const App = () => (
  <Web3ContextProvider config={PROVIDERS_CONFIG}>
    <Layout />
  </Web3ContextProvider>
);

export default App;
